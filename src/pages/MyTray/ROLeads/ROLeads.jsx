/* eslint-disable jsx-a11y/href-no-hash */

import Page from "../../../components/Page";
// import Typography from "../components/Typography";
import React from "react";
import {
  Alert,
  Card,
  CardBody,
  CardHeader,
  Col,
  Row,
  UncontrolledAlert,
} from "reactstrap";
import Form from "react-bootstrap/Form";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
// import { fetchUsers, fetchPosts } from "../../redux/slices/usersSlice";
import { useNavigate } from "react-router-dom";
import PageSpinner from "../../../components/PageSpinner";
import DataTable from "../../../components/DataTable/DataTable"
import { MdVisibility, MdEdit, MdDelete } from "react-icons/md";

const Roleads = () => {
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
        Cell: ({ row }) => (
          <div className="d-flex gap-2">
            <Form.Select className="selective-field">
              <option>Select</option>
              <option>Remarks</option>
              <option>Assign</option>
              <option>History</option>
            </Form.Select>
            {/* <MdVisibility
              style={{ cursor: "pointer" }}
              onClick={() => alert(`Viewing ${row.original.company}`)}
            />
            <MdEdit
              style={{ cursor: "pointer" }}
              onClick={() => alert(`Editing ${row.original.company}`)}
            />
            <MdDelete
              style={{ cursor: "pointer" }}
              onClick={() => alert(`Deleting ${row.original.company}`)}
            /> */}
          </div>
        ),
      },
    ],
    []
  );

  const { users, posts, loading, error } = useSelector((state) => state.users);
  
  return (
    <Page
      breadcrumbs={[
        { name: "My Tray", link: "/mytray" },
        { name: "RO Leads", active: true },
      ]}
    >
      <div>
        <div>
          <DataTable columns={columns} data={data} />
        </div>
      </div>
    </Page>
  );
};

export default Roleads;
