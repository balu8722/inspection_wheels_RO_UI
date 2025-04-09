
import React from "react";
import {
    useTable,
    useSortBy,
    usePagination,
    useFilters,
    useGlobalFilter,
} from "react-table";
import { Button, } from "reactstrap";
import { Table } from "reactstrap";
import "./DataTable.scss";


// A basic text filter UI
const DefaultColumnFilter = ({
    column: { filterValue, setFilter },
}) => (
    <input
        value={filterValue || ""}
        onChange={(e) => setFilter(e.target.value || undefined)}
        placeholder="Search..."
        style={{ width: "100%" }}
    />
);
function GlobalFilter({ globalFilter, setGlobalFilter }) {
    return (

        <input
            value={globalFilter || ""}
            onChange={(e) => setGlobalFilter(e.target.value)}
            placeholder="Search..."
            style={{ marginLeft: "auto" }}
            className="cr-search-form__input my-2 form-control "
        />

    );
}

const DataTable = ({ columns, data }) => {
//   const data = React.useMemo(
//     () => [
//       {
//         company: "Chola",
//         rolead: 28,
//         assigned: 23,
//         reassigned: 67,
//         roconfirmation: 22,
//         qc: 12,
//         qchold: 33,
//         insecptioncompleted: 55,
//         reject: 12,
//         total: 102,
//       },
//       {
//         company: "Bajaj",
//         rolead: 22,
//         assigned: 23,
//         reassigned: 67,
//         roconfirmation: 22,
//         qc: 12,
//         qchold: 33,
//         insecptioncompleted: 55,
//         reject: 12,
//         total: 102,
//       },
//       {
//         company: "ICICI",
//         rolead: 35,
//         assigned: 23,
//         reassigned: 67,
//         roconfirmation: 22,
//         qc: 12,
//         qchold: 33,
//         insecptioncompleted: 55,
//         reject: 12,
//         total: 102,
//       },
//       {
//         company: "Kormadana",
//         rolead: 31,
//         assigned: 23,
//         reassigned: 67,
//         roconfirmation: 22,
//         qc: 12,
//         qchold: 33,
//         insecptioncompleted: 55,
//         reject: 12,
//         total: 102,
//       },
//       {
//         company: "hdcf",
//         rolead: 26,
//         assigned: 23,
//         reassigned: 67,
//         roconfirmation: 22,
//         qc: 12,
//         qchold: 33,
//         insecptioncompleted: 55,
//         reject: 12,
//         total: 102,
//       },
//       {
//         company: "katnataka",
//         rolead: 29,
//         assigned: 23,
//         reassigned: 67,
//         roconfirmation: 22,
//         qc: 12,
//         qchold: 33,
//         insecptioncompleted: 55,
//         reject: 12,
//         total: 102,
//       },
//       {
//         company: "BOB",
//         rolead: 40,
//         assigned: 23,
//         reassigned: 67,
//         roconfirmation: 22,
//         qc: 12,
//         qchold: 33,
//         insecptioncompleted: 55,
//         reject: 12,
//         total: 102,
//       },
//     ],
//     []
//   );

//   const columns = React.useMemo(
//     () => [
//       {
//         Header: "Company",
//         accessor: "company",
//         Filter: DefaultColumnFilter,
//       },
//       {
//         Header: "Ro Lead",
//         accessor: "rolead",
//         Filter: DefaultColumnFilter,
//       },
//       {
//         Header: "Assigned",
//         accessor: "assigned",
//         Filter: DefaultColumnFilter,
//       },
//       {
//         Header: "Reassigned",
//         accessor: "reassigned",
//         Filter: DefaultColumnFilter,
//       },
//       {
//         Header: "RO Confirmation",
//         accessor: "roconfirmation",
//         Filter: DefaultColumnFilter,
//       },
//       {
//         Header: "QC ",
//         accessor: "qc",
//         Filter: DefaultColumnFilter,
//       },
//       {
//         Header: "QC Hold",
//         accessor: "qchold",
//         Filter: DefaultColumnFilter,
//       },
//       {
//         Header: "Inspection Completed",
//         accessor: "insecptioncompleted",
//         Filter: DefaultColumnFilter,
//       },
//       {
//         Header: "Reject",
//         accessor: "reject",
//         Filter: DefaultColumnFilter,
//       },
//       {
//         Header: "Total",
//         accessor: "total",
//         Filter: DefaultColumnFilter,
//       },
//       // {
//       //   Header: "Actions",
//       //   id: "actions",
//       //   Cell: ({ row }) => (
//       //     <div className="d-flex gap-2">
//       //       <button
//       //         onClick={() => console.log("View", row.original)}
//       //         className="btn btn-sm btn-outline-primary"
//       //       >
//       //         <i className="bi bi-eye" />
//       //       </button>
//       //       <button
//       //         onClick={() => console.log("Edit", row.original)}
//       //         className="btn btn-sm btn-outline-success"
//       //       >
//       //         <i className="bi bi-pencil-square" />
//       //       </button>
//       //       <button
//       //         onClick={() => console.log("Delete", row.original)}
//       //         className="btn btn-sm btn-outline-danger"
//       //       >
//       //         <i className="bi bi-trash" />
//       //       </button>
//       //     </div>
//       //   ),
//       // },
//     ],
//     []
//   );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page, // instead of rows
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    setGlobalFilter,
    state: { pageIndex, pageSize, globalFilter },
  } = useTable(
    {
      columns,
      data,
      defaultColumn: { Filter: DefaultColumnFilter },
      initialState: { pageIndex: 0, pageSize: 5 },
    },
    useFilters,
    useGlobalFilter,
    useSortBy,
    usePagination
  );
  return (
    <div>
      <div className="data_table">
        <div className="row m-0">
          <div className="col-md-8 align-self-center mb-0">
            <div>
              <label>
                Show{" "}
                <select
                  value={pageSize}
                  onChange={(e) => {
                    setPageSize(Number(e.target.value));
                  }}
                >
                  {[5, 10, 20, 50].map((size) => (
                    <option key={size} value={size}>
                      {size}
                    </option>
                  ))}
                </select>{" "}
                entries
              </label>
            </div>
          </div>
          <div className="col-md-4 align-self-center mb-0">
            <div className="text-right">
              <GlobalFilter
                globalFilter={globalFilter}
                setGlobalFilter={setGlobalFilter}
              />
            </div>
          </div>
        </div>

        {/* <input
          value=""
          onChange={(e) => setGlobalFilter(e.target.value)}
          className="cr-search-form__input my-2 form-control w-25"
          placeholder="Search ..."
          style={{ fontSize: "1rem", padding: "4px", marginLeft: "auto" }}
        /> */}
        <div className="overflow-hor-scroll">
          <Table
            striped
            bordered
            hover
            responsive
            {...getTableProps()}
            style={{ border: "1px solid black", width: "100%" }}
          >
            <thead>
              {headerGroups.map((headerGroup, idx) => (
                <tr {...headerGroup.getHeaderGroupProps()} key={idx}>
                  {headerGroup.headers.map((column) => (
                    <th
                      {...column.getHeaderProps(column.getSortByToggleProps())}
                      key={column.id}
                      style={{
                        borderBottom: "2px solid black",
                        padding: "8px",
                        textAlign: "left",
                      }}
                    >
                      {column.render("Header")}
                      <span>
                        {column.isSorted
                          ? column.isSortedDesc
                            ? " 🔽"
                            : " 🔼"
                          : ""}
                      </span>
                      {/* <div>
                      {column.canFilter ? column.render("Filter") : null}
                    </div> */}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>

            <tbody {...getTableBodyProps()}>
              {/* {page.map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()} key={row.id}>
                  {row.cells.map((cell) => (
                    <td
                      {...cell.getCellProps()}
                      key={cell.column.id}
                      style={{ padding: "8px", border: "1px solid gray" }}
                    >
                      {cell.render("Cell")}
                    </td>
                  ))}
                </tr>
              );
            })} */}
              {/*  */}
              {page.length > 0 ? (
                page.map((row, idx) => {
                  prepareRow(row);
                  return (
                    <tr {...row.getRowProps()} key={idx}>
                      {row.cells.map((cell) => (
                        <td
                          {...cell.getCellProps()}
                          key={cell.column.id}
                          style={{ padding: "8px", border: "1px solid gray" }}
                        >
                          {cell.render("Cell")}
                        </td>
                      ))}
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
          </Table>
        </div>

        {/* Pagination Controls */}
        <div style={{ marginTop: "10px" }}>
          {/* <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
            {"<<"}
          </button>{" "} */}
          {/* <button
            color="primary"
            onClick={() => previousPage()}
            disabled={!canPreviousPage}
          >
            {"Prev"}
          </button>{" "} */}
          <Button
            color="primary"
            onClick={() => previousPage()}
            disabled={!canPreviousPage}
            className="text-white mx-1"
          >
            Prev
          </Button>
          {/* <button onClick={() => nextPage()} disabled={!canNextPage}>
            {"Next"}
          </button>{" "}
           */}
          <Button
            color="primary"
            onClick={() => nextPage()}
            disabled={!canNextPage}
            className="text-white mx-1"
          >
            Next
          </Button>
          {/* <button
            onClick={() => gotoPage(pageCount - 1)}
            disabled={!canNextPage}
          >
            {">>"}
          </button>{" "} */}
          <span>
            Page{" "}
            <strong>
              {pageIndex + 1} of {pageOptions.length}
            </strong>
          </span>
        </div>
      </div>
    </div>
  );
};

export default DataTable;
