import { resolve } from 'node:path';
import { Resvg } from '@resvg/resvg-js';

interface Card {
  eyebrow: string;
  title: string;
  footer: string;
}

const width = 1200;
const height = 630;
const inset = 96;
const titleSize = 72;
const titleLeading = 84;
const titleCharsPerLine = 26;

const fontFiles = ['Geist-Regular.ttf', 'Geist-SemiBold.ttf'].map((file) =>
  resolve(process.cwd(), 'src/assets/fonts', file),
);

const escapeXml = (text: string) =>
  text.replace(/[&<>"']/g, (character) => `&#${character.charCodeAt(0)};`);

const wrap = (text: string, limit: number) =>
  text.split(' ').reduce<string[]>((lines, word) => {
    const last = lines.at(-1);
    if (last !== undefined && `${last} ${word}`.length <= limit) {
      lines[lines.length - 1] = `${last} ${word}`;
    } else {
      lines.push(word);
    }
    return lines;
  }, []);

export function renderCard({ eyebrow, title, footer }: Card): Uint8Array<ArrayBuffer> {
  const lines = wrap(title, titleCharsPerLine);
  const titleTop = height / 2 - ((lines.length - 1) * titleLeading) / 2 + titleSize / 3;

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
  <rect width="100%" height="100%" fill="#0a0a0a"/>
  <text x="${inset}" y="166" font-family="Geist" font-weight="600" font-size="30" fill="#ededed">${escapeXml(eyebrow)}</text>
  <text font-family="Geist" font-weight="600" font-size="${titleSize}" letter-spacing="${titleSize * -0.04}" fill="#ededed">${lines
    .map((line, index) => `<tspan x="${inset}" y="${titleTop + index * titleLeading}">${escapeXml(line)}</tspan>`)
    .join('')}</text>
  <text x="${inset}" y="546" font-family="Geist" font-size="30" fill="#a1a1a1">${escapeXml(footer)}</text>
</svg>`;

  const png = new Resvg(svg, {
    font: { fontFiles, loadSystemFonts: false, defaultFontFamily: 'Geist' },
  })
    .render()
    .asPng();

  return new Uint8Array(png);
}
