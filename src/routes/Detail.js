import { useEffect, useState } from "react";
import {useParams} from "react-router-dom";

function Detail() {
    const [loading, setLoading] = useState(true);
    const [movie, setMovie] = useState([]);
    const {id} = useParams(); //내가 작성한 parameter의 내용을 가져와줌
    const getMovie = async () => {
        const json = await(
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`) //백틱 빼먹지 말것...
        ).json();
        setMovie(json.data.movie);
        setLoading(false);
    }; // await는 async 안에서만 쓸 수 있음
    useEffect(() => {
        getMovie();
    }, []);
    return (
        <div>
            { loading ? (
            <h1>loading...</h1>) : (
            <div>
                <img src={movie.background_image_original} />
                <h2>{movie.title} ({movie.year})</h2>
                <ul>
                    {movie.genres.map(g => <li key={g}>{g}</li>)}
                </ul>
                <p>{movie.description_full}</p>
            </div>
            )}
        </div>
    );
}


export default Detail;