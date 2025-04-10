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
  Button,
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
import "./Qchold.scss"
import MultiSelectDropdown from "../../../components/MultiSelectDropdown/MultiSelectDropdown"; 
const QcHold = () => {
    const [selectedCompany, setselectedCompany] = useState([]);
      const companyList = [
        { value: "ro", label: "ICICI" },
        { value: "admin", label: "BOB" },
      ];
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
  const handleFilter = () => {
    console.log(`Filtering for `);
  };
    
  return (
    <Page
      title="QC Hold"
      breadcrumbs={[
        { name: "My Tray", link: "/mytray" },
        { name: "QC Hold", active: true },
      ]}
    >
      <div>
        <div className="qc_hold mb-3">
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
                onClick={handleFilter}
              >
                Search
              </Button>
            </Col>
          </Row>
        </div>
        <div>
          <CommonTable propColumns={columns} propData={data} />
        </div>
      </div>
    </Page>
  );
};

export default QcHold;
