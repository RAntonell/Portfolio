import { getCollection } from 'astro:content';

export async function getWork() {
  const entries = await getCollection('work');
  return entries.sort((a, b) => a.data.order - b.data.order);
}
