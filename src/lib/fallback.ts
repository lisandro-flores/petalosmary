/**
 * Fallback static data — used when PocketBase is unreachable or empty.
 * These mirror what was previously hardcoded in Gallery and SpringYellow.
 */
import type { GalleryItem, SpringPhoto } from './pb';

export const FALLBACK_GALLERY: GalleryItem[] = [
  // Ramos
  { src: '/images/IMG-20241122-WA0002.jpg',  alt: 'Arreglo floral artesanal',       category: 'ramos'      },
  { src: '/images/IMG-20250110-WA0016.jpg',  alt: 'Bouquet primaveral',             category: 'ramos'      },
  { src: '/images/IMG-20250208-WA0002.jpg',  alt: 'Arreglo en tonos rosados',       category: 'ramos'      },
  { src: '/images/IMG-20250418-WA0006.jpg',  alt: 'Flores frescas del día',         category: 'ramos'      },
  { src: '/images/IMG-20250418-WA0007.jpg',  alt: 'Bouquet festivo',                category: 'ramos'      },
  { src: '/images/IMG-20250607-WA0008.jpg',  alt: 'Ramo especial',                  category: 'ramos'      },
  { src: '/images/IMG-20260226-WA0033.jpg',  alt: 'Arreglo en colores cálidos',     category: 'ramos'      },
  { src: '/images/IMG-20260226-WA0034.jpg',  alt: 'Ramo silvestre',                 category: 'ramos'      },
  { src: '/images/IMG-20260226-WA0035.jpg',  alt: 'Flores de temporada',            category: 'ramos'      },
  { src: '/images/IMG-20260226-WA0036.jpg',  alt: 'Bouquet elegante',               category: 'ramos'      },
  { src: '/images/IMG-20260226-WA0037.jpg',  alt: 'Arreglo minimalista',            category: 'ramos'      },
  // Bodas
  { src: '/images/IMG-20260226-WA0020.jpg',  alt: 'Centro de mesa boda',            category: 'bodas'      },
  { src: '/images/IMG-20260226-WA0021.jpg',  alt: 'Arreglo nupcial romántico',      category: 'bodas'      },
  { src: '/images/IMG-20260226-WA0022.jpg',  alt: 'Flores para ceremonia',          category: 'bodas'      },
  { src: '/images/IMG-20260226-WA0023.jpg',  alt: 'Decoración de altar',            category: 'bodas'      },
  { src: '/images/IMG-20260226-WA0025.jpg',  alt: 'Arreglo para boda',              category: 'bodas'      },
  { src: '/images/IMG-20260226-WA0038.jpg',  alt: 'Flores blancas para boda',       category: 'bodas'      },
  { src: '/images/IMG-20260226-WA0039.jpg',  alt: 'Centro nupcial elegante',        category: 'bodas'      },
  { src: '/images/IMG-20260226-WA0056.jpg',  alt: 'Ramo de novia especial',         category: 'bodas'      },
  // Eventos
  { src: '/images/IMG-20260226-WA0027.jpg',  alt: 'Centros de mesa corporativos',   category: 'eventos'    },
  { src: '/images/IMG-20260226-WA0028.jpg',  alt: 'Arreglo para inauguración',      category: 'eventos'    },
  { src: '/images/IMG-20260226-WA0029.jpg',  alt: 'Flores para oficina',            category: 'eventos'    },
  { src: '/images/IMG-20260226-WA0040.jpg',  alt: 'Decoración floral corporativa',  category: 'eventos'    },
  { src: '/images/IMG-20260226-WA0042.jpg',  alt: 'Centro de mesa evento',          category: 'eventos'    },
  { src: '/images/IMG-20260226-WA0043.jpg',  alt: 'Flores para celebración',        category: 'eventos'    },
  { src: '/images/IMG-20260226-WA0057.jpg',  alt: 'Arreglo institucional',          category: 'eventos'    },
  { src: '/images/IMG-20260226-WA0058.jpg',  alt: 'Flores para conferencia',        category: 'eventos'    },
  // Especiales
  { src: '/images/IMG-20260226-WA0031.jpg',  alt: 'Arreglo de cumpleaños',          category: 'especiales' },
  { src: '/images/IMG-20260226-WA0032.jpg',  alt: 'Flores para mamá',               category: 'especiales' },
  { src: '/images/IMG-20260226-WA0045.jpg',  alt: 'Arreglo San Valentín',           category: 'especiales' },
  { src: '/images/IMG-20260226-WA0046.jpg',  alt: 'Flores para aniversario',        category: 'especiales' },
  { src: '/images/IMG-20260226-WA0048.jpg',  alt: 'Regalo con flores',              category: 'especiales' },
  { src: '/images/IMG-20260226-WA0050.jpg',  alt: 'Flores para graduación',         category: 'especiales' },
  { src: '/images/IMG-20260226-WA0051.jpg',  alt: 'Arreglo de celebración',         category: 'especiales' },
  { src: '/images/IMG-20260226-WA0052.jpg',  alt: 'Bouquet sorpresa',               category: 'especiales' },
  { src: '/images/IMG-20260226-WA0053.jpg',  alt: 'Detalle floral especial',        category: 'especiales' },
  { src: '/images/IMG-20260226-WA0054.jpg',  alt: 'Flores miniatura',               category: 'especiales' },
];

export const FALLBACK_SPRING: SpringPhoto[] = [
  { src: '/images/amarillas/IMG-20250110-WA0017.jpg', alt: 'Ramo de flores amarillas'     },
  { src: '/images/amarillas/IMG-20260226-WA0018.jpg', alt: 'Arreglo primavera amarillo'   },
  { src: '/images/amarillas/IMG-20260226-WA0019.jpg', alt: 'Bouquet flores amarillas'     },
  { src: '/images/amarillas/IMG-20260226-WA0024.jpg', alt: 'Flores amarillas especiales'  },
  { src: '/images/amarillas/IMG-20260226-WA0026.jpg', alt: 'Arreglo amarillo festivo'     },
  { src: '/images/amarillas/IMG-20260226-WA0030.jpg', alt: 'Ramo amarillo primaveral'     },
  { src: '/images/amarillas/IMG-20260226-WA0041.jpg', alt: 'Flores amarillas frescas'     },
  { src: '/images/amarillas/IMG-20260226-WA0044.jpg', alt: 'Bouquet amarillo alegre'      },
  { src: '/images/amarillas/IMG-20260226-WA0047.jpg', alt: 'Flores amarillas regalo'      },
  { src: '/images/amarillas/IMG-20260226-WA0049.jpg', alt: 'Arreglo primavera especial'   },
];
