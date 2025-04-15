/* eslint-disable jsx-a11y/href-no-hash */
import Page from "../../../../components/Page";
import React from "react";

import Form from "react-bootstrap/Form";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { CommonTable } from "../../../../components/Table/CommonTable";
import { MdEdit, MdDelete } from "react-icons/md";
const UserList = () => {
    const data = React.useMemo(
      () => [
        {
          slno: "106610",
          loginame: "ajvalues99",
          details: "RAVI chinchaliravi12@gmail.com",
          client: "A J VALUES	",
          accounttype: "	RO Valuator",
          accountstatus: "Active 	",
          created: "04/10/2023 11:33 AM	",
        },
        {
          slno: "106611",
          loginame: "ajvalues99",
          details: "RAVI chinchaliravi12@gmail.com",
          client: "A J VALUES	",
          accounttype: "	RO Valuator",
          accountstatus: "Inactive 	",
          created: "04/10/2023 11:33 AM	",
        },
      ],
      []
    );
    const columns = React.useMemo(
      () => [
        {
          Header: "#",
          accessor: "slno",
        },
        {
          Header: "Login name",
          accessor: "loginame",
        },
        {
          Header: "User Details",
          accessor: "details",
        },
        {
          Header: "Client",
          accessor: "client",
        },
        {
          Header: "Account Type",
          accessor: "accounttype",
        },
        {
          Header: "Account status",
          accessor: "accountstatus",
          Cell: ({ value }) => {
            const status = value.trim().toLowerCase(); // to handle extra spaces
            const isActive = status === "active";
            return (
              <button
                className={`btn btn-sm text-white ${
                  isActive ? "btn-success" : "btn-danger"
                }`}
                disabled
              >
                {isActive ? "Active" : "Inactive"}
              </button>
            );
          },
        },
        {
          Header: "Created",
          accessor: "created",
        },
        // {
        //   Header: "Actions",
        //   id: "actions",
        //   Cell: ({ row }) => (
        //     <div
        //       className="text-center"
        //       style={{ color: "#f96262", fontSize: "20px" }}
        //     >
        //       <MdEdit
        //         style={{ cursor: "pointer" }}
        //         onClick={() => alert(`Viewing ${row.original.company}`)}
        //       />
        //     </div>
        //   ),
        // },
      ],
      []
    );

  return (
    <Page
      breadcrumbs={[
        { name: "User Management"},
        { name: "All User", active: true }, 
      ]}
    >
      <div>
          <CommonTable propColumns={columns} propData={data} />
      </div>
    </Page>
  );
};

export default UserList;
