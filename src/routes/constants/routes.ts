export enum routes {
  home = '/',
  movies = '/movie',
  series = '/tv',
  detailsIndex = '/details',
  details = `${routes.detailsIndex}/:id`,
}
