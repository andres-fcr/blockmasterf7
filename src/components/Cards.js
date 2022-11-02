import React from "react";
import {Titulo} from "../styles/CardsStyles";
import Carrusel from "./Carrusel";
import {useSelector} from "react-redux";
import {PaginatedItems} from "./PaginatedItems";
// import { Link } from 'react-router-dom'
// import { BsFillStarFill } from 'react-icons/bs'
// import { Card } from 'react-bootstrap'
// import { listSearch } from '../redux/actions/actionSearch'
// import { GetMoviesByName } from '../helpers/GetMoviesByName'

const Cards = ({items}) => {
	const {movies} = useSelector((store) => store.movies);

	const video = movies.slice(0, 5);
	// console.log(term);
	// console.log(resultSearch);

	//////////////Realtime Database////////////

	// const dbRef = ref(getDatabase());
	// get(child(dbRef, `results/`)).then((snapshot) => {
	//     if (snapshot.exists()) {
	//         console.log(snapshot.val());
	//     } else {
	//         console.log("No data available");
	//     }
	// }).catch((error) => {
	//     console.error(error);
	// });

	//////////////////MAyor a menor//////////// para el contrario, cambiar el + a -

	// const ordenDatosQ = datosQ.sort((a, b) => {
	//     return (a.vote_average + b.vote_average)
	// })

	return (
		<div className="my-5">
			<Carrusel video={video} />
			<Titulo>Todas las peliculas</Titulo>
			<PaginatedItems itemsPerPage={15} items={items} />
		</div>
	);
};

export default Cards;
