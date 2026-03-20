// import { useSelector } from 'react-redux'

export const GetMoviesByName = (name = '') => {
  // const { movies } = useSelector(store => store.movies);
  name = name.toLocaleLowerCase()
  return [].filter((movie) => movie.title?.toLocaleLowerCase().includes(name))
}
