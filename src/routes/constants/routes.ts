export enum routes {
  home = '/',
  movies = '/movie',
  series = '/tv',
  login = '/login',
  register = '/register',
  new = '/new',
  favs = '/favs',
  detailsIndex = '/details',
  details = `${routes.detailsIndex}/:id`,
}
