import type { ImageMetadata } from 'astro';
import sharp from 'sharp';

const thumbnailWidth = 16;
const canvasWidth = 320;
const blur = 20;

export async function blurredPlaceholder(image: ImageMetadata): Promise<string | undefined> {
  const { fsPath } = image as ImageMetadata & { fsPath?: string };
  if (!fsPath) return undefined;

  const thumbnail = await sharp(fsPath).resize(thumbnailWidth).webp({ quality: 50 }).toBuffer();
  const canvasHeight = Math.round((canvasWidth * image.height) / image.width);
  const svg = [
    `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 ${canvasWidth} ${canvasHeight}'>`,
    `<filter id='b' color-interpolation-filters='sRGB'>`,
    `<feGaussianBlur stdDeviation='${blur}'/>`,
    `<feComponentTransfer><feFuncA type='discrete' tableValues='1 1'/></feComponentTransfer>`,
    `</filter>`,
    `<image width='100%' height='100%' preserveAspectRatio='none' filter='url(#b)' href='data:image/webp;base64,${thumbnail.toString('base64')}'/>`,
    `</svg>`,
  ].join('');

  return `url("data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}")`;
}
