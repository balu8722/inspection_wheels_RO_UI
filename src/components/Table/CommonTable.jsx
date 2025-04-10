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
import './commontable.scss'

export const CommonTable = (props) => {
    const { propColumns=[], propData=[], isVisible=false } = props

    const [fieldData, setFieldData] = useState([]);

    useEffect(() => {
        if(propData.length>0){
            setFieldData(propData || [])
        }
    }, [propData])

    const columns = propColumns;
    const data = useMemo(() => fieldData);

    const {
        tableInstance,
        getTableProps,
        getTableBodyProps,
        headerGroups,
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
        },
        useGlobalFilter,
        useFilters,
        useSortBy,
        usePagination
    );

    const { globalFilter, pageSize, pageIndex } = state;


    return (
      <div>
        <div className="table_design">
          {/* {!loader && <> </>} */}
          {fieldData.length < 1 ? (
            <>
              <h4 className="p-4">No Data Found</h4>
            </>
          ) : (
            <>
              {!isVisible && (
                <div className="px-3 mb-3 d-flex justify-content-between align-items-end">
                  <GlobalFilter
                    filter={globalFilter}
                    setFilter={setGlobalFilter}
                  />
                  <div>
                    Show
                    <select
                      id="tablenumber"
                      value={pageSize}
                      className="selectTag ms-2"
                      onChange={(e) => setPageSize(Number(e.target.value))}
                    >
                      <option value="" disabled>
                        Select
                      </option>
                      {[5, 10, 15, 25, 50].map((pageSize) => (
                        <option key={pageSize} value={pageSize}>
                          {pageSize}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              )}
              <div className="text-center table_scroll">
                <table {...getTableProps()}>
                  <thead>
                    {headerGroups.length > 0 &&
                      headerGroups.map((headerGroup) => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                          {headerGroup.headers.map((column) => (
                            <th
                              {...column.getHeaderProps(
                                column.getSortByToggleProps()
                              )}
                            >
                              {column.render("Header")}
                              <span>
                                {column.isSorted
                                  ? column.isSortedDesc
                                    ? " 🔽"
                                    : " 🔼"
                                  : ""}
                              </span>
                            </th>
                          ))}
                        </tr>
                      ))}
                  </thead>
                  <tbody {...getTableBodyProps()}>
                        {page.length > 0 ? (
                            page.map((row, idx) => {
                            prepareRow(row);
                            return (
                                <tr {...row.getRowProps()}>
                                {row.cells.map((cell) => {
                                    return (
                                    <td {...cell.getCellProps()}>
                                        {cell.render("Cell")}
                                    </td>
                                    );
                                })}
                                </tr>
                            );
                            })
                        ) : (
                            <tr>
                            <td colSpan={columns.length} className="text-center py-3">
                                No matched results found.
                            </td>
                            </tr>
                        )}
                  </tbody>
                </table>
              </div>
            </>
          )}
        </div>
        <div className="text-center mt-3">
          <TableNavigation
            pageIndex={pageIndex}
            gotoPage={gotoPage}
            previousPage={previousPage}
            nextPage={nextPage}
            pageCount={pageCount}
            canNextPage={canNextPage}
            canPreviousPage={canPreviousPage}
          />
        </div>
      </div>
    );
};
