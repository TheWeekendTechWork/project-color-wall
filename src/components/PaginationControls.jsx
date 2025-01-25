import React from "react";
import PropTypes from "prop-types";

const PaginationControls = ({
    page,
    setPage,
    maxPage,
    loading,
    setLoading,
}) => {
    const [inputPage, setInputPage] = React.useState(page);

    const handlePageInputChange = (e) => {
        setInputPage(Number(e.target.value));
    };

    const handlePageInputSubmit = () => {
        if (inputPage >= 0 && inputPage <= maxPage) {
            setPage(inputPage);
        }
    };

    const handlePreviousPage = () => {
        if (page > 0) {
            setLoading(true);
            setPage(page - 1);
        }
    };

    const handleNextPage = () => {
        if (page < maxPage) {
            setLoading(true);
            setPage(page + 1);
        }
    };

    return (
        <div className="pagination-controls">
            <button
                onClick={handlePreviousPage}
                disabled={page === 0 || loading}
            >
                Previous
            </button>
            <input
                type="number"
                value={inputPage}
                onChange={handlePageInputChange}
                min="0"
                max={maxPage}
                disabled={loading}
            />
            <button onClick={handlePageInputSubmit} disabled={loading}>
                Go
            </button>
            <button
                onClick={handleNextPage}
                disabled={page >= maxPage || loading}
            >
                Next
            </button>
        </div>
    );
};

PaginationControls.propTypes = {
    page: PropTypes.number.isRequired,
    setPage: PropTypes.func.isRequired,
    maxPage: PropTypes.number.isRequired,
    loading: PropTypes.bool.isRequired,
    setLoading: PropTypes.func.isRequired,
};

export { PaginationControls };
