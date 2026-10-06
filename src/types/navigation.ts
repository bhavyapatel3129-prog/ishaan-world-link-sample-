export type PageId = 'home' | 'services' | 'about' | 'contact';

export interface NavItem {
  id: PageId;
  label: string;
  path: string;
}

export const NAV_ITEMS: NavItem[] = [
  { id: 'home', label: 'Home', path: '/' },
  { id: 'services', label: 'Our Services', path: '/our-services' },
  { id: 'about', label: 'About Us', path: '/about-us' },
  { id: 'contact', label: 'Contact', path: '/contact' }
];
