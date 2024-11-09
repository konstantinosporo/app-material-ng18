/**
 * carousel interface
 */
export interface Slide {
  label: string;
  content: string;
  buttonText: string;
  srcLight: string;
  srcDark: string;
}
/**
 * carousel slide list
 */
export const carouselSlideList = [
  {
    label: 'First slide label',
    content: 'Some representative placeholder content for the first slide.',
    buttonText: 'Browse Library',
    srcLight: '/home/light/slide1-light.svg',
    srcDark: '/home/dark/slide1-dark.svg',
  },
  {
    label: 'Second slide label',
    content: 'Some representative placeholder content for the second slide.',
    buttonText: 'News & Announcements',
    srcLight: '/home/light/slide2-light.svg',
    srcDark: '/home/dark/slide2-dark.svg',
  },
  {
    label: 'Third slide label',
    content: 'Some representative placeholder content for the third slide.',
    buttonText: 'Register',
    srcLight: '/home/light/slide3-light.svg',
    srcDark: '/home/dark/slide3-dark.svg',
  }
];