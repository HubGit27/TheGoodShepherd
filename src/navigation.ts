import {createLocalizedPathnamesNavigation} from 'next-intl/navigation';
 
export const locales = ['en', 'es'] as const;
export const localePrefix = 'always'; // Default
 
export const {Link, redirect, usePathname, useRouter} =
  createLocalizedPathnamesNavigation({
    locales,
    localePrefix,
    pathnames: {
      '/': '/',
      '/about': '/about',
      '/services': '/services',
      '/testimonials': '/testimonials',
      '/before-after': '/before-after',
      '/gallery': '/gallery',
      '/contact': '/contact'
    }
  });