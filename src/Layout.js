import React, { useState } from 'react';
import ReactPaginate from 'react-paginate';
import './Layout.css';
import { useSelector, useDispatch } from 'react-redux';
import { incPage} from './Actions';

const Layout = (props) => {
  const myState = useSelector((state)=>state.ChangeThePage);
  const dispatch = useDispatch()

  const [currentPage, setCurrentPage] = useState(myState);
  const PER_PAGE = 20;
  const offset = currentPage * PER_PAGE;
  const pageCount = Math.ceil(props.data.length / PER_PAGE);

  const handlePageClick = ({ selected: selectedPage }) => {
    setCurrentPage(selectedPage);
    dispatch(incPage(selectedPage));
  };

  return (
    <>
      <div className="grid-container">
        {props.data.slice(offset, offset + PER_PAGE).map((item) => (
          <div className="card" key={item.id}>
            <img src={item.avatar} alt="Avatar" />
            <div className="card-info">
              <h2>{item.first_name} {item.last_name}</h2>
              <p className="email">Email: {item.email}</p>
              <p>Gender: {item.gender}</p>
              <p>Domain: {item.domain}</p>
              <p>Available: <span className="unavailable">{JSON.stringify(item.available)}</span></p>
            </div>
          </div>
        ))}
      </div>
      <ReactPaginate
        previousLabel="Previous"
        nextLabel="Next"
        pageCount={pageCount}
        onPageChange={handlePageClick}
        containerClassName="pagination"
        previousLinkClassName="previous-page"
        nextLinkClassName="next-page"
        disabledClassName="pagination-disabled"
        activeClassName="pagination-active"
      />
    </>
  );
};

export default Layout;