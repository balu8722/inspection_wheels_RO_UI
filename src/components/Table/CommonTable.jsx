import React, { useEffect, useMemo, useState } from "react";
import {
  useGlobalFilter,
  useTable,
  usePagination,
  useFilters,
  useSortBy,
} from "react-table";
import { TableNavigation } from "./TableNavigation";
import { GlobalFilter } from "./GlobalFilter";
import { FaChevronDown, FaChevronRight } from "react-icons/fa";
import "./commontable.scss";

export const CommonTable = (props) => {
  const {
    propColumns = [],
    propData = [],
    isVisible = true,
    isPagination = false,
    isColumnSearch = false,
    filterComponent,
    extraComponent,
    subTableColumns = [],
    paginationDetails={},
    gotoParticularPages=()=>{},
    isManualPagination=false,
    manualPageSize=10,
    manualSetPageSize=()=>{}
  } = props;
// console.log("paginationDetails",paginationDetails)
  const [expandedRows, setExpandedRows] = useState([]); 

  const toggleRowExpansion = (rowId) => {
    setExpandedRows((prev) =>
      prev.includes(rowId) ? prev.filter((id) => id !== rowId) : [...prev, rowId]
    );
  };

  const columns = propColumns;
  const data = useMemo(() => propData, [propData]);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows, 
    page, 
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    state,
    setGlobalFilter,
    gotoPage,
    pageCount,
    setPageSize,
    prepareRow,
  } = useTable(
    {
      columns,
      data,
      manualPagination: !isPagination, 
      initialState: { pageSize: 10 },
    },
    useGlobalFilter,
    useFilters,
    useSortBy,
    usePagination
  );
  const { globalFilter, pageSize, pageIndex } = state;
  
  const displayRows = isPagination ? page : rows;

  const handleManualGotoPage=(pageNo)=>{
    gotoParticularPages(pageNo+1)
  }

  return (
    <>
      <div className="table_design">
        <>
          <div
            className={`order-2 order-md-1 px-3  ${
              filterComponent ||
              extraComponent ||
              (isVisible && !isColumnSearch)
                ? "mb-2 mt-3"
                : "mb-0"
            }
               d-grid d-md-flex justify-content-between align-items-end`}
          >
            <div className="d-flex gap-2 mb-3 mb-md-0">
              <>{filterComponent}</>
              {isVisible && !isColumnSearch && (
                <GlobalFilter
                  filter={globalFilter}
                  setFilter={setGlobalFilter}
                />
              )}
            </div>
            <div className="order-2 order-md-1 ">
              <>{extraComponent}</>
            </div>
          </div>
          <div className="text-center table_scroll">
            <table {...getTableProps()}>
              <thead>
                {headerGroups.map((headerGroup) => (
                  <React.Fragment key={headerGroup.id}>
                    <tr {...headerGroup.getHeaderGroupProps()}>
                      {headerGroup.headers.map((column) => (
                        <th
                          {...column.getHeaderProps(
                            column.getSortByToggleProps()
                          )}
                        >
                          <div className="header-cell">
                            {column.render("Header")}
                            <span>
                              {column.isSorted
                                ? column.isSortedDesc
                                  ? " 🔽"
                                  : " 🔼"
                                : ""}
                            </span>
                          </div>
                        </th>
                      ))}
                    </tr>
                  </React.Fragment>
                ))}
              </thead>
              <tbody {...getTableBodyProps()}>
                {displayRows.length > 0 ? (
                  displayRows.map((row) => {
                    prepareRow(row);
                    const hasSubTable = row.original.subTableData; // Check if the row has a subtable
                    const isExpanded = expandedRows.includes(row.id); // Check if the row is expanded
                    return (
                      <React.Fragment key={row.id}>
                        <tr
                          {...row.getRowProps()}
                          onClick={() => toggleRowExpansion(row.id)} // Toggle subtable on row click
                          style={{
                            cursor: hasSubTable ? "pointer" : "default",
                          }}
                        >
                          {row.cells.map((cell, index) => (
                            <td
                              {...cell.getCellProps()}
                              style={{
                                position: index === 0 ? "relative" : "static", // Position the first cell for the icon
                              }}
                            >
                              {index === 0 && hasSubTable && (
                                <span
                                  className="dropdown-icon"
                                  style={{
                                    position: "absolute",
                                    left: "10px",
                                    top: "50%",
                                    transform: "translateY(-50%)",
                                    fontSize: "16px",
                                  }}
                                >
                                  {isExpanded ? (
                                    <FaChevronDown className="text-primary" />
                                  ) : (
                                    <FaChevronRight className="text-primary" />
                                  )}
                                </span>
                              )}
                              {cell.render("Cell")}
                            </td>
                          ))}
                        </tr>
                        {hasSubTable && isExpanded && (
                          <tr>
                            <td colSpan={columns.length}>
                              <div className="subtable-container">
                                <CommonTable
                                  propColumns={subTableColumns}
                                  propData={row.original.subTableData}
                                  isVisible={false}
                                />
                              </div>
                            </td>
                          </tr>
                        )}
                      </React.Fragment>
                    );
                  })
                ) : (
                  <tr>
                    <td colSpan={columns.length} className="text-center py-3">
                      No data found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </>
        {isPagination && (
          <div className="d-md-flex justify-content-between align-items-end px-3 pb-3">
            <div className="text-end">
              <span className="small">Show</span>
              <select
                id="tablenumber"
                value={isManualPagination?manualPageSize:pageSize}
                className="selectTag ms-2"
                onChange={(e) => {
                  if(isManualPagination){
                    manualSetPageSize(Number(e.target.value))
                  }else{
                    setPageSize(Number(e.target.value))
                  }
                }}
              >
                <option value="" disabled>
                  Select
                </option>
                {[1,2,5, 10, 15, 25, 50].map((pageSize) => (
                  <option key={pageSize} value={pageSize}>
                    {pageSize}
                  </option>
                ))}
              </select>
            </div>
           {!isManualPagination && <TableNavigation
              pageIndex={pageIndex}
              gotoPage={gotoPage}
              previousPage={previousPage}
              nextPage={nextPage}
              pageCount={pageCount}
              canNextPage={canNextPage}
              canPreviousPage={canPreviousPage}
            />}
           {isManualPagination && paginationDetails?.totalPages&& 
           <TableNavigation
              pageIndex={paginationDetails?.pageNo?(Number(paginationDetails.pageNo)-1):1}
              gotoPage={handleManualGotoPage}
              previousPage={()=>gotoParticularPages(Number(paginationDetails?.pageNo)-1)}
              nextPage={()=>gotoParticularPages(Number(paginationDetails?.pageNo)+1)}
              pageCount={paginationDetails?.totalPages}
              canNextPage={(paginationDetails?.pageNo) < paginationDetails?.totalPages }
              canPreviousPage={(paginationDetails?.pageNo) > 1}
            />}
          </div>
        )}
      </div>
    </>
  );
};
