import React from "react";
import { useDispatch } from "react-redux";
import { setSearchQuery } from "../redux/slices/SearchSlice";
import { Link } from "react-router-dom";
export default function Header() {
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    e.preventDefault();
    const query = e.target.elements.search.value;
    dispatch(setSearchQuery(query));
  };

  return (
    <>
      <nav className="navbar ">
        <div className="container">
          <a className="navbar-brand"  href="/"><img src="./logo.png" alt="" /></a>
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" style={{ color: '#fff' }} to="/Home1">Restaurant</Link>
            </li>
          </ul>
          <form className="d-flex" role="search" onSubmit={handleSearch}>
            <input
              className="form-control me-2"
              type="search"
              name="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-warning" type="submit">
              Search
            </button>
          </form>
        </div>
      </nav>
    </>
  );
}
