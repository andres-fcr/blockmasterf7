import { useSelector } from "react-redux";

export const GetMoviesByName = ( name = '' ) => {
// console.log(name);
    const { movies } = useSelector(store => store.movies);
    // console.log(name,movies);
    name = name.toLocaleLowerCase();
    return movies.filter( movie => movie.title?.toLocaleLowerCase().includes(name)  );

}