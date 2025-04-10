/* eslint-disable jsx-a11y/href-no-hash */

import Page from "../../../components/Page";
// import Typography from "../components/Typography";
import React, { useState } from "react";
import { CommonTable } from "../../../components/Table/CommonTable";
import {
  Alert,
  Card,
  CardBody,
  CardHeader,
  Col,
  Row,
  UncontrolledAlert,
} from "reactstrap";
import { Dropdown, Button } from "react-bootstrap";
// import { ThreeDotsVertical } from "react-bootstrap-icons";
import Form from "react-bootstrap/Form";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
// import { fetchUsers, fetchPosts } from "../../redux/slices/usersSlice";
import { useNavigate } from "react-router-dom";
import PageSpinner from "../../../components/PageSpinner";
import DataTable from "../../../components/DataTable/DataTable"
import { MdVisibility, MdEdit, MdDelete, MdMoreVert } from "react-icons/md";
import CommanModel from "../../../components/CommanModel/CommanModel";

const Roleads = () => {
  const [showModal, setShowModal] = useState(false);
  const [title, setTitle] = useState();
const data = React.useMemo(
  () => [
    {
      contact: "AJITH ALLIPUR BELLARY ",
      reqno: "CVRTL300812913",
      vehicledetails: "KA12B5695",
      clientdetails: "CHOLAMANDALAM IN..",
      execdetails: "RANGANTHA 7353286216",
      rouser: "ajvaluesadmin DAVANGERE",
      assign: "03/04/2025 03:53 PM",
    },
    {
      contact: "ANABURU DAVANGERE",
      reqno: "CVRTL300812913",
      vehicledetails: "KA12B5695",
      clientdetails: "CHOLAMANDALAM IN..",
      execdetails: "RANGANTHA 7353286216",
      rouser: "ajvaluesadmin DAVANGERE",
      assign: "03/04/2025 03:53 PM",
    },
  ],
  []
);
  const columns = React.useMemo(
    () => [
      {
        Header: "Contact Details",
        accessor: "contact",
      },
      {
        Header: "Req.No",
        accessor: "reqno",
      },
      {
        Header: "Vehicle Details",
        accessor: "vehicledetails",
      },
      {
        Header: "Client Details",
        accessor: "clientdetails",
      },
      {
        Header: "Exec Details",
        accessor: "execdetails",
      },
      {
        Header: "RO User",
        accessor: "rouser",
      },
      {
        Header: "Assigned on",
        accessor: "assign",
      },

      {
        Header: "Actions",
        id: "actions",
        Cell: ({ row }) => {
          const handleSelect = (action) => {
                  console.log("actions",action);
                  
               setShowModal(true)
              setTitle(action);
            // const rowData = row.original;
         
            // switch (action) {
            //   case "Remarks":
            //     console.log("Opening remarks for:", rowData);
            //     break;
            //   case "Assign":
            //     console.log("Assigning request:", rowData.reqno);
            //     break;
            //   case "History":
            //     console.log("Showing history for:", rowData);
            //     break;
            //   default:
            //     break;
            // }
          };

          return (
            <Dropdown>
              <Dropdown.Toggle
                variant="light"
                className="p-1 border-0 shadow-none three_dots"
                id="dropdown-basic"
              >
                <MdMoreVert />
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item
                  className="fontsize-14"
                  onClick={() => handleSelect("Remarks")}
                >
                  Remarks
                </Dropdown.Item>
                <Dropdown.Item
                  className="fontsize-14"
                  onClick={() => handleSelect("Assign")}
                >
                  Assign
                </Dropdown.Item>
                <Dropdown.Item
                  className="fontsize-14"
                  onClick={() => handleSelect("History")}
                >
                  History
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          );
        },
      },
    ],
    []
  );

  const { users, posts, loading, error } = useSelector((state) => state.users);
  
  return (
    <Page
      title="RO Leads"
      breadcrumbs={[
        { name: "My Tray", link: "/mytray" },
        { name: "RO Leads", active: true },
      ]}
    >
      <div>
        <div>
          {/* <Button onClick={() => setShowModal(true)}>Open Modal</Button> */}

          <CommanModel
            show={showModal}
            onClose={() => setShowModal(false)}
            title="Lead Remarks"
            buttontext="Update"
            closebuttontext="Close"
          >
            <p>This modal is fully reusable!</p>
          </CommanModel>
          <CommonTable propColumns={columns} propData={data} />
        </div>
      </div>
    </Page>
  );
};

export default Roleads;
