/**
 * Fallback static data — used when PocketBase is unreachable or empty.
 * These mirror what was previously hardcoded in Gallery and SpringYellow.
 */
import type { ImageMetadata } from 'astro';

export type GalleryItem = {
  src: ImageMetadata;
  alt: string;
  category: 'ramos' | 'bodas' | 'eventos' | 'especiales';
};

export type SpringPhoto = {
  src: ImageMetadata;
  alt: string;
};

// Import all images eagerly from assets
const localImages = import.meta.glob<{ default: ImageMetadata }>('../assets/images/**/*.{jpeg,jpg,png,gif,webp}', { eager: true });

// Helper to safely get the image metadata
function getLocalImg(path: string): ImageMetadata {
  const globPath = `../assets${path}`;
  if (!localImages[globPath]) {
    throw new Error(`Image not found in assets: ${globPath}`);
  }
  return localImages[globPath].default;
}

export const FALLBACK_GALLERY: GalleryItem[] = [
  // Ramos
  { src: getLocalImg('/images/IMG-20241122-WA0002.jpg'), alt: 'Diseño floral', category: 'ramos' },
  { src: getLocalImg('/images/IMG-20250110-WA0016.jpg'), alt: 'Diseño floral', category: 'ramos' },
  { src: getLocalImg('/images/IMG-20250208-WA0002.jpg'), alt: 'Diseño floral', category: 'ramos' },
  { src: getLocalImg('/images/IMG-20250418-WA0006.jpg'), alt: 'Diseño floral', category: 'ramos' },
  { src: getLocalImg('/images/IMG-20250418-WA0007.jpg'), alt: 'Diseño floral', category: 'ramos' },
  { src: getLocalImg('/images/IMG-20250607-WA0008.jpg'), alt: 'Diseño floral', category: 'ramos' },
  { src: getLocalImg('/images/IMG-20260226-WA0033.jpg'), alt: 'Diseño floral', category: 'ramos' },
  { src: getLocalImg('/images/IMG-20260226-WA0034.jpg'), alt: 'Diseño floral', category: 'ramos' },
  { src: getLocalImg('/images/IMG-20260226-WA0035.jpg'), alt: 'Diseño floral', category: 'ramos' },
  { src: getLocalImg('/images/IMG-20260226-WA0036.jpg'), alt: 'Diseño floral', category: 'ramos' },
  { src: getLocalImg('/images/IMG-20260226-WA0037.jpg'), alt: 'Diseño floral', category: 'ramos' },
  // Bodas
  { src: getLocalImg('/images/IMG-20260226-WA0020.jpg'), alt: 'Diseño floral', category: 'bodas' },
  { src: getLocalImg('/images/IMG-20260226-WA0021.jpg'), alt: 'Diseño floral', category: 'bodas' },
  { src: getLocalImg('/images/IMG-20260226-WA0022.jpg'), alt: 'Diseño floral', category: 'bodas' },
  { src: getLocalImg('/images/IMG-20260226-WA0023.jpg'), alt: 'Diseño floral', category: 'bodas' },
  { src: getLocalImg('/images/IMG-20260226-WA0025.jpg'), alt: 'Diseño floral', category: 'bodas' },
  { src: getLocalImg('/images/IMG-20260226-WA0038.jpg'), alt: 'Diseño floral', category: 'bodas' },
  { src: getLocalImg('/images/IMG-20260226-WA0039.jpg'), alt: 'Diseño floral', category: 'bodas' },
  { src: getLocalImg('/images/IMG-20260226-WA0056.jpg'), alt: 'Diseño floral', category: 'bodas' },
  // Eventos
  { src: getLocalImg('/images/IMG-20260226-WA0027.jpg'), alt: 'Diseño floral', category: 'eventos' },
  { src: getLocalImg('/images/IMG-20260226-WA0028.jpg'), alt: 'Diseño floral', category: 'eventos' },
  { src: getLocalImg('/images/IMG-20260226-WA0029.jpg'), alt: 'Diseño floral', category: 'eventos' },
  { src: getLocalImg('/images/IMG-20260226-WA0040.jpg'), alt: 'Diseño floral', category: 'eventos' },
  { src: getLocalImg('/images/IMG-20260226-WA0042.jpg'), alt: 'Diseño floral', category: 'eventos' },
  { src: getLocalImg('/images/IMG-20260226-WA0043.jpg'), alt: 'Diseño floral', category: 'eventos' },
  { src: getLocalImg('/images/IMG-20260226-WA0057.jpg'), alt: 'Diseño floral', category: 'eventos' },
  { src: getLocalImg('/images/IMG-20260226-WA0058.jpg'), alt: 'Diseño floral', category: 'eventos' },
  // Especiales
  { src: getLocalImg('/images/IMG-20260226-WA0031.jpg'), alt: 'Diseño floral', category: 'especiales' },
  { src: getLocalImg('/images/IMG-20260226-WA0032.jpg'), alt: 'Diseño floral', category: 'especiales' },
  { src: getLocalImg('/images/IMG-20260226-WA0045.jpg'), alt: 'Diseño floral', category: 'especiales' },
  { src: getLocalImg('/images/IMG-20260226-WA0046.jpg'), alt: 'Diseño floral', category: 'especiales' },
  { src: getLocalImg('/images/IMG-20260226-WA0048.jpg'), alt: 'Diseño floral', category: 'especiales' },
  { src: getLocalImg('/images/IMG-20260226-WA0050.jpg'), alt: 'Diseño floral', category: 'especiales' },
  { src: getLocalImg('/images/IMG-20260226-WA0051.jpg'), alt: 'Diseño floral', category: 'especiales' },
  { src: getLocalImg('/images/IMG-20260226-WA0052.jpg'), alt: 'Diseño floral', category: 'especiales' },
  { src: getLocalImg('/images/IMG-20260226-WA0053.jpg'), alt: 'Diseño floral', category: 'especiales' },
  { src: getLocalImg('/images/IMG-20260226-WA0054.jpg'), alt: 'Diseño floral', category: 'especiales' },
];

export const FALLBACK_SPRING: SpringPhoto[] = [
  { src: getLocalImg('/images/amarillas/IMG-20250110-WA0017.jpg'), alt: 'Diseño floral' },
  { src: getLocalImg('/images/amarillas/IMG-20260226-WA0018.jpg'), alt: 'Diseño floral' },
  { src: getLocalImg('/images/amarillas/IMG-20260226-WA0019.jpg'), alt: 'Diseño floral' },
  { src: getLocalImg('/images/amarillas/IMG-20260226-WA0024.jpg'), alt: 'Diseño floral' },
  { src: getLocalImg('/images/amarillas/IMG-20260226-WA0026.jpg'), alt: 'Diseño floral' },
  { src: getLocalImg('/images/amarillas/IMG-20260226-WA0030.jpg'), alt: 'Diseño floral' },
  { src: getLocalImg('/images/amarillas/IMG-20260226-WA0041.jpg'), alt: 'Diseño floral' },
  { src: getLocalImg('/images/amarillas/IMG-20260226-WA0044.jpg'), alt: 'Diseño floral' },
  { src: getLocalImg('/images/amarillas/IMG-20260226-WA0047.jpg'), alt: 'Diseño floral' },
  { src: getLocalImg('/images/amarillas/IMG-20260226-WA0049.jpg'), alt: 'Diseño floral' },
];
