import type { APIRoute, GetStaticPaths } from 'astro';
import { profile } from '../../../data/resume';
import { getWork } from '../../../lib/work';
import { renderCard } from '../../../lib/og';

export const getStaticPaths = (async () => {
  const entries = await getWork();
  return entries.map((entry) => ({ params: { slug: entry.id }, props: { title: entry.data.title } }));
}) satisfies GetStaticPaths;

export const GET: APIRoute = ({ params, props, site }) => {
  const host = site ? site.host.replace(/^www\./, '') : '';
  const png = renderCard({
    eyebrow: `${profile.name} · Case study`,
    title: props.title,
    footer: `${host}/work/${params.slug}`,
  });
  return new Response(png, { headers: { 'Content-Type': 'image/png' } });
};
