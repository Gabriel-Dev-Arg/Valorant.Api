import "../App.css";

function Pagination({paginacion,currentPage,total,setCurrentPage}) {
    const pageNumbers = [];
    console.log(Math.ceil(total/paginacion))
    for(let i=1;i<=Math.ceil(total/paginacion);i++){
        pageNumbers.push(i);
    }
    function handlePageClick(pageNumber){
        setCurrentPage(pageNumber);
    }
    const onPreviousClick = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const onNextClick = () => {
        if (currentPage < pageNumbers.length) {
            setCurrentPage(currentPage + 1);
        }
    };
    return( 
    <nav className="pagination is-centered mb-6" role="navigation" aria-label="pagination">
  <a href="#" className={`pagination-previous ${currentPage === 1 ? "is-disabled" : ""}`} onClick={onPreviousClick}>Previous</a>
  <a href="#" className={`pagination-next ${currentPage >= pageNumbers.length ? "is-disabled" : ""}`} onClick={onNextClick}>Next page</a>
  <ul className="pagination-list">
    {
        pageNumbers.map(noPage =>(
            <li key={noPage}>
                <a href="#" className={currentPage === noPage ? "pagination-link is-current" : "pagination-link"} aria-current="page" onClick={()=>handlePageClick(noPage)}>
                {noPage}   </a>
                    </li>
        ))
     }
  </ul>
</nav>
    )
}
export default Pagination