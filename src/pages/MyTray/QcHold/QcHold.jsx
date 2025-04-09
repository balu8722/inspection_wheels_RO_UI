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
import { MdVisibility, MdEdit, MdDelete } from "react-icons/md";

const QcHold = () => {
  const data = React.useMemo(
    () => [
      {
        reqno: "CVRTL300812913",
        vehicledetails: "KA12B5695",
        client: "Mahindra & Mahin..BANGALORE",
        reason: "others",
        report: "reports"
      },
    ],
    []
  );
  const columns = React.useMemo(
    () => [
      {
        Header: "Req.No",
        accessor: "reqno",
      },
      {
        Header: "Vehicle Details",
        accessor: "vehicledetails",
      },
      {
        Header: "Client ",
        accessor: "client",
      },
      {
        Header: "Reason",
        accessor: "reason",
      },
      {
        Header: "Report",
        accessor: "report",
      },

      {
        Header: "Actions",
        id: "actions",
        Cell: ({ row }) => (
          <div className="d-flex gap-2">
            <Form.Select className="selective-field">
              <option>Select</option>
              <option>Remarks</option>
              <option>Approve</option>
              <option>History</option>
              <option>Payment need to do</option>
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
        { name: "QC Hold", active: true },
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

export default QcHold;
