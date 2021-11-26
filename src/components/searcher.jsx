const Searcher = () => {
    return (
        <form className="d-flex my-5">
            <input className="form-control col-2 mx-1" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
    );
}

export default Searcher;