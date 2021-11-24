import React from "react";

const MovieCard = ({ movies }) => {
    
    return (
        <React.Fragment>
            <div className="row">

                { movies.map(m => (

                    <div className="content-wrapper my-5 mx-5" style={{ width: '18rem' }}>
                    <img src={m.poster_path} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{ m.title }</h5>
                        <h5 className="card-title">{ m.popularity }</h5>
                        <p className="card-text">{ m.overview }</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                    </div>
                ))
                }
            </div>

        </React.Fragment>
    );

}

export default MovieCard;