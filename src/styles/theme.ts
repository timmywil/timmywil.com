export const screens = {
  larger: 1600,
  large: 1280,
  default: 980,
  tablet: 768,
  mobile: 480
}

export const breakpoints = {
  LARGER_DISPLAY_MEDIA_QUERY: `@media only screen and (max-width:${screens.larger}px)`,
  LARGE_DISPLAY_MEDIA_QUERY: `@media only screen and (max-width:${screens.large}px)`,
  DEFAULT_MEDIA_QUERY: `@media only screen and (max-width:${screens.default}px)`,
  TABLET_MEDIA_QUERY: `@media only screen and (max-width:${screens.tablet}px)`,
  MOBILE_MEDIA_QUERY: `@media only screen and (max-width:${screens.mobile}px)`,
  MIN_LARGER_DISPLAY_MEDIA_QUERY: `@media (min-width:${screens.larger + 1}px)`,
  MIN_LARGE_DISPLAY_MEDIA_QUERY: `@media (min-width:${screens.large + 1}px)`,
  MIN_DEFAULT_MEDIA_QUERY: `@media (min-width:${screens.default + 1}px)`,
  MIN_TABLET_MEDIA_QUERY: `@media (min-width:${screens.tablet + 1}px)`,
  MIN_MOBILE_MEDIA_QUERY: `@media (min-width:${screens.mobile + 1}px)`
}
