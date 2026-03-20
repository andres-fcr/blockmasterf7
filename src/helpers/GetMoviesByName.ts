
export const GetMoviesByName = (name = '') => {
  name = name.toLocaleLowerCase()
  return [].filter((movie) => movie.title?.toLocaleLowerCase().includes(name))
}
