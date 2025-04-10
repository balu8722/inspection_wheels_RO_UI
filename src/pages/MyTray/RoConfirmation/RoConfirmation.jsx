/* eslint-disable jsx-a11y/href-no-hash */

import Page from "../../../components/Page";
// import Typography from "../components/Typography";
import React, {useState } from "react";
import { CommonTable } from "../../../components/Table/CommonTable";
import {
  Alert,
  Card,
  CardBody,
  CardHeader,
  Col,
  Row,
  Button,
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
import "./RoConfirmation.scss";
import MultiSelectDropdown from "../../../components/MultiSelectDropdown/MultiSelectDropdown"; 
const RoConfirmation = () => {
  const data = React.useMemo(
    () => [
      {
        reqno: "CVRTL300812913",
        vehicledetails: "KA12B5695",
        client: "Mahindra & Mahin..BANGALORE",
        roconfirmation: "29/03/2025 12:02 pm",
      },
      {
        reqno: "CVRTL300722451",
        vehicledetails: "KA12B5695",
        client: "Indostar Capital..HOSPET",
        roconfirmation: "29/03/2025 12:02 pm",
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
        Header: "In Time of RO Confirmation",
        accessor: "roconfirmation",
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
              <option>Reject</option>
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
  const [selectedCompany, setselectedCompany] = useState([]);
    const companyList = [
      { value: "ro", label: "ICICI" },
      { value: "admin", label: "BOB" },
    ];
  return (
    <Page
      title="RO Confirmation"
      breadcrumbs={[
        { name: "My Tray", link: "/mytray" },
        { name: "Ro Confirmation", active: true },
      ]}
    >
      <div className="ro_confirmation mb-3">
        <Row>
           <label>Company</label>
          <Col className="mb-0" xs={12} sm={12} md={6}>
            <div className="">
              <Form.Group>
                {/* <Form.Label>
                  Client Company<span className="text-danger">*</span>
                </Form.Label> */}
                <MultiSelectDropdown
                  options={companyList}
                  value={selectedCompany}
                  onChange={setselectedCompany}
                  placeholder="Choose client company"
                  isMulti={false}
                  isSearchable={true}
                  closeMenuOnSelect={true}
                  showControls={false}
                />
              </Form.Group>
            </div>
          </Col>
           <Col className="align-self-center mb-0" xs={12} sm={12} md={6}>
              <Button
                           className="px-2 text-white"
                           style={{ backgroundColor: "#5c6ac4", borderColor: "#5c6ac4" }}
                         
                         >
                           Search
                         </Button>
           </Col>
        </Row>
      </div>
      <div className="ro_confirmation">
        <div className="">
          <CommonTable propColumns={columns} propData={data} />
        </div>
      </div>
    </Page>
  );
};

export default RoConfirmation;
