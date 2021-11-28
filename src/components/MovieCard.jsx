import React from "react";

const MovieCard = ({ movies }) => {
    
    return (
        <React.Fragment>
            <div className="container">
                <div className="row">
                    { movies.map( (m, i) => (
                        <div key={i} className="col-4" style={{ width: '18rem' }}>                        
                            <div className="card">                                
                                    <img src={"https://image.tmdb.org/t/p/w500"+m.poster_path} className="card-img-top" alt="..."/>

                                <div className="card-body">
                                    <h5 className="card-title text-center">{ m.title }</h5>                            
                                    <p className="card-text text-center">{ m.overview }</p>
                                    <div className="text-center">
                                        <a href="#" className="btn btn-primary">Go somewhere</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                    }
                </div>
            </div>

        </React.Fragment>
    );

}

export default MovieCard;