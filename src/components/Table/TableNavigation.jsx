import React from 'react'
import "./commontable.scss";

export const TableNavigation = (props) => {
    const { pageIndex, gotoPage, previousPage, nextPage, pageCount, canNextPage, canPreviousPage } = props
    return (
        <div className="tablenav">
            <button
                id='skiptobtn1'
                className="skipToBtn"
                onClick={() => gotoPage(0)}
                disabled={!canPreviousPage}
            >
                {"<<"}
            </button>
            <button
                id='prevbtn'
                className="actionBtn"
                onClick={() => previousPage()}
                disabled={!canPreviousPage}
            >
                Prev
            </button>
            <div className="mx-1 pageNumber">
                <strong>{pageIndex + 1}</strong>{" "}
            </div>
            <button
                id='nextbtn'
                className="actionBtn"
                onClick={() => nextPage()}
                disabled={!canNextPage}
            >
                Next
            </button>
            <button
                id='skiptobtn2'
                className="skipToBtn"
                onClick={() => gotoPage(pageCount - 1)}
                disabled={!canNextPage}
            >
                {">>"}
            </button>
        </div>
    )
}
