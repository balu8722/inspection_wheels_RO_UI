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

const ReAssigned = () => {
  const data = React.useMemo(
    () => [
      {
        contact: "Kumar mysuru ",
        reqno: "CVRTL300812913",
        vehicledetails: "KA12B5695",
        clientdetails: "CHOLAMANDALAM IN..",
        valuator: "ajvalues13 BANGALORE",
        status: "Open",
        execdetails: "RANGANTHA 7353286216",
        rouser: "ajvaluesadmin DAVANGERE",
        assign: "03/04/2025 03:53 PM",
        remark: "ok",
        assinon: "08/04/2025 09:26 am",
      },
      {
        contact: "BASAVARAJ R HIDA..ATHANIBELGAUM ",
        reqno: "CVRTL300812913",
        vehicledetails: "KA12B5695",
        clientdetails: "CHOLAMANDALAM IN..",
        valuator: "ajvalues13 BANGALORE",
        status: "Open",
        execdetails: "RANGANTHA 7353286216",
        rouser: "ajvaluesadmin DAVANGERE",
        assign: "03/04/2025 03:53 PM",
        remark: "ok",
        assinon: "08/04/2025 09:26 am",
      },
      {
        contact: "NAGESH NIPNALBELGAUM ",
        reqno: "CVRTL300812913",
        vehicledetails: "KA12B5695",
        clientdetails: "CHOLAMANDALAM IN..",
        valuator: "ajvalues13 BANGALORE",
        status: "Open",
        execdetails: "RANGANTHA 7353286216",
        rouser: "ajvaluesadmin DAVANGERE",
        assign: "03/04/2025 03:53 PM",
        remark: "ok",
        assinon: "08/04/2025 09:26 am",
      },
      {
        contact: "NAGESH NIPNALBELGAUM ",
        reqno: "CVRTL300812913",
        vehicledetails: "KA12B5695",
        clientdetails: "CHOLAMANDALAM IN..",
        valuator: "ajvalues13 BANGALORE",
        status: "Open",
        execdetails: "RANGANTHA 7353286216",
        rouser: "ajvaluesadmin DAVANGERE",
        assign: "03/04/2025 03:53 PM",
        remark: "ok",
        assinon: "08/04/2025 09:26 am",
      },
      {
        contact: "NAGESH NIPNALBELGAUM ",
        reqno: "CVRTL300812913",
        vehicledetails: "KA12B5695",
        clientdetails: "CHOLAMANDALAM IN..",
        valuator: "ajvalues13 BANGALORE",
        status: "Open",
        execdetails: "RANGANTHA 7353286216",
        rouser: "ajvaluesadmin DAVANGERE",
        assign: "03/04/2025 03:53 PM",
        remark: "ok",
        assinon: "08/04/2025 09:26 am",
      },
      {
        contact: "NAGESH NIPNALBELGAUM ",
        reqno: "CVRTL300812913",
        vehicledetails: "KA12B5695",
        clientdetails: "CHOLAMANDALAM IN..",
        valuator: "ajvalues13 BANGALORE",
        status: "Open",
        execdetails: "RANGANTHA 7353286216",
        rouser: "ajvaluesadmin DAVANGERE",
        assign: "03/04/2025 03:53 PM",
        remark: "ok",
        assinon: "08/04/2025 09:26 am",
      },
      {
        contact: "NAGESH NIPNALBELGAUM ",
        reqno: "CVRTL300812913",
        vehicledetails: "KA12B5695",
        clientdetails: "CHOLAMANDALAM IN..",
        valuator: "ajvalues13 BANGALORE",
        status: "Open",
        execdetails: "RANGANTHA 7353286216",
        rouser: "ajvaluesadmin DAVANGERE",
        assign: "03/04/2025 03:53 PM",
        remark: "ok",
        assinon: "08/04/2025 09:26 am",
      },
      {
        contact: "NAGESH NIPNALBELGAUM ",
        reqno: "CVRTL300812913",
        vehicledetails: "KA12B5695",
        clientdetails: "CHOLAMANDALAM IN..",
        valuator: "ajvalues13 BANGALORE",
        status: "Open",
        execdetails: "RANGANTHA 7353286216",
        rouser: "ajvaluesadmin DAVANGERE",
        assign: "03/04/2025 03:53 PM",
        remark: "ok",
        assinon: "08/04/2025 09:26 am",
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
        Header: "Valuator",
        accessor: "valuator",
      },
      {
        Header: "Status",
        accessor: "status",
      },
      {
        Header: "Valuator Remark",
        accessor: "remark",
      },
      {
        Header: "Assigned on",
        accessor: "assinon",
      },

      {
        Header: "Actions",
        id: "actions",
        Cell: ({ row }) => (
          <div className="d-flex gap-2">
            <Form.Select className="selective-field">
              <option>Select</option>
              <option>Remarks</option>
              <option>Reassign</option>
              <option>Change Vehicle Catgory</option>
              <option>Valuation</option>
              <option>Reject</option>
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
        { name: "Reassigned", active: true },
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

export default ReAssigned;
