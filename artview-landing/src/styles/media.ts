const sizes = {
  desktop: 1024,
  tablet: 768,
  mobile: 480,
};

const media = {
  desktop: `@media (max-width: ${sizes.desktop}px)`,
  tablet: `@media (max-width: ${sizes.tablet}px)`,
  mobile: `@media (max-width: ${sizes.mobile}px)`,
};

export default media;
