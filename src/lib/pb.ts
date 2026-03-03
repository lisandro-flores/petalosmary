/**
 * PocketBase client utilities for Pétalos Mary
 *
 * Collections in PocketBase:
 *   gallery       — photo(file), alt(text), category(select), sort_order(number), active(bool)
 *   spring_photos — photo(file), alt(text), sort_order(number), active(bool)
 *   settings      — key(text unique), value(text)
 */

export type GalleryItem = {
  src: string;
  alt: string;
  category: 'ramos' | 'bodas' | 'eventos' | 'especiales';
};

export type SpringPhoto = {
  src: string;
  alt: string;
};

const PB_URL     = (import.meta.env.PB_URL        ?? 'http://localhost:8090').replace(/\/$/, '');
export const PB_PUBLIC_URL = (import.meta.env.PUBLIC_PB_URL ?? 'http://localhost:8090').replace(/\/$/, '');
const TIMEOUT   = 4000;

export function pbFileUrl(collection: string, recordId: string, filename: string): string {
  return `${PB_PUBLIC_URL}/api/files/${collection}/${recordId}/${filename}`;
}

async function pbFetch<T>(path: string): Promise<T[]> {
  try {
    const res = await fetch(`${PB_URL}${path}`, {
      signal: AbortSignal.timeout(TIMEOUT),
    });
    if (!res.ok) return [];
    const data = await res.json();
    return (data.items ?? []) as T[];
  } catch {
    return [];
  }
}

export async function getGalleryItems(): Promise<GalleryItem[]> {
  const records = await pbFetch<{ id: string; photo: string; alt: string; category: GalleryItem['category'] }>(
    '/api/collections/gallery/records?sort=sort_order&perPage=200&filter=(active=true)'
  );
  return records
    .filter(r => r.photo)
    .map(r => ({
      src: pbFileUrl('gallery', r.id, r.photo),
      alt: r.alt,
      category: r.category,
    }));
}

export async function getSpringPhotos(): Promise<SpringPhoto[]> {
  const records = await pbFetch<{ id: string; photo: string; alt: string }>(
    '/api/collections/spring_photos/records?sort=sort_order&perPage=50&filter=(active=true)'
  );
  return records
    .filter(r => r.photo)
    .map(r => ({
      src: pbFileUrl('spring_photos', r.id, r.photo),
      alt: r.alt,
    }));
}

export async function getSetting(key: string, fallback = ''): Promise<string> {
  const records = await pbFetch<{ key: string; value: string }>(
    `/api/collections/settings/records?filter=(key='${encodeURIComponent(key)}')`
  );
  return records[0]?.value ?? fallback;
}

export async function getSettings(keys: string[]): Promise<Record<string, string>> {
  const filter = keys.map(k => `key='${encodeURIComponent(k)}'`).join('||');
  const records = await pbFetch<{ key: string; value: string }>(
    `/api/collections/settings/records?filter=(${filter})&perPage=50`
  );
  const result: Record<string, string> = {};
  for (const r of records) result[r.key] = r.value;
  return result;
}
