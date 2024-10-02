import React from "react";
import "../App.css";

function Pagination({ paginacion, currentPage, total, setCurrentPage }) {
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(total / paginacion); i++) {
        pageNumbers.push(i);
    }

    const handlePageClick = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

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

    return (
        <nav className="flex justify-center items-between space-x-2 my-8" role="navigation" aria-label="pagination">
            <button
                onClick={onPreviousClick}
                disabled={currentPage === 1}
                className={`px-4 py-2 rounded-md ${
                    currentPage === 1
                        ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                        : 'bg-red-600 text-white hover:bg-red-700'
                } transition duration-300 ease-in-out`}
            >
                Previous
            </button>
            <div className="flex space-x-1">
                {pageNumbers.map((noPage) => (
                    <button
                        key={noPage}
                        onClick={() => handlePageClick(noPage)}
                        className={`w-10 h-10 flex items-center justify-center rounded-md ${
                            currentPage === noPage
                                ? 'bg-red-600 text-white'
                                : 'bg-gray-200 text-gray-700 hover:bg-red-200'
                        } transition duration-300 ease-in-out`}
                    >
                        {noPage}
                    </button>
                ))}
            </div>
            <button
                onClick={onNextClick}
                disabled={currentPage >= pageNumbers.length}
                className={`px-4 py-2 rounded-md ${
                    currentPage >= pageNumbers.length
                        ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                        : 'bg-red-600 text-white hover:bg-red-700'
                } transition duration-300 ease-in-out`}
            >
                Next
            </button>
        </nav>
    );
}

export default Pagination;