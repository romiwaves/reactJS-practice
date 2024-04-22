import PropTypes, { string } from "prop-types";
import { Link } from "react-router-dom";

function Movie({coverImg, title, summary, genres, year, id}) { 
    //movie component가 parent component로부터 중괄호 안의 것들을 받아온다!
    return (
    <div>
        <img src={coverImg} alt={title}/>
        <h2>
            <Link to={`/movie/${id}`}>{title} ({year})</Link></h2>
        <p>{summary}</p>
        <ul>
            {genres.map(g => <li key={g}>{g}</li>)}
        </ul>
    </div>
    )
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    coverImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    generes: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default Movie;