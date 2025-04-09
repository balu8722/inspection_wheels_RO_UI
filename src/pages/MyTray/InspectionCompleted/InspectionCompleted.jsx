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
import DataTable from "../../../components/DataTable/DataTable";
import {
  MdVisibility,
  MdEdit,
  MdDelete,
  MdContentCopy,
  MdDownload,
} from "react-icons/md";

const InspectionCompleted = () => {
  const data = React.useMemo(
    () => [
      {
        client: "Mahindra & Mahin..BANGALORE",
        reqno: "CVRTL300812913",
        vehicledetails: "KA12B5695",
        closeddate: "29/03/2025 12:02 pm",
      },
      {
        client: "Mahindra & Mahin..BANGALORE",
        reqno: "CVRTL300812913",
        vehicledetails: "KA12B5695",
        closeddate: "29/03/2025 12:02 pm",
      },
      {
        client: "Mahindra & Mahin..BANGALORE",
        reqno: "CVRTL300812913",
        vehicledetails: "KA12B5695",
        closeddate: "29/03/2025 12:02 pm",
      },
      {
        client: "Mahindra & Mahin..BANGALORE",
        reqno: "CVRTL300812913",
        vehicledetails: "KA12B5695",
        closeddate: "29/03/2025 12:02 pm",
      },

    ],
    []
  );
  const columns = React.useMemo(
    () => [
      {
        Header: "Client ",
        accessor: "client",
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
        Header: "Mail/SMS/Copy",
        id: "mail",
        Cell: ({ row }) => (
          <div
            className="text-center"
            style={{ color: "#f96262", fontSize: "20px" }}
          >
            <MdContentCopy
              style={{ cursor: "pointer" }}
              onClick={() => alert(`Viewing ${row.original.client}`)}
            />
          </div>
        ),
      },
      {
        Header: "Download",
        id: "download",
        Cell: ({ row }) => (
          <div
            className="text-center"
            style={{ color: "#f96262", fontSize: "20px" }}
          >
            <MdDownload
              style={{ cursor: "pointer" }}
              onClick={() => alert(`Viewing ${row.original.company}`)}
            />
          </div>
        ),
      },
      {
        Header: "Report",
        id: "report",
        Cell: ({ row }) => (
          <div
            className="text-center"
            style={{ color: "#f96262", fontSize: "20px" }}
          >
            <MdVisibility
              style={{ cursor: "pointer" }}
              onClick={() => alert(`Viewing ${row.original.company}`)}
            />
          </div>
        ),
      },
      {
        Header: "Closed Date",
        accessor: "closeddate",
      },

      {
        Header: "Actions",
        id: "actions",
        Cell: ({ row }) => (
          <div className="d-flex gap-2">
            <Form.Select className="selective-field">
              <option>Select</option>
              <option>Remarks</option>
              <option>Push to server</option>
            </Form.Select>
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
        { name: "Inspection Completed", active: true },
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

export default InspectionCompleted;
