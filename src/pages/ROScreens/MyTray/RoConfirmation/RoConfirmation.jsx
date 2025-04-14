/* eslint-disable jsx-a11y/href-no-hash */

import Page from "../../../../components/Page";
// import Typography from "../components/Typography";
import React, {useState } from "react";
import { CommonTable } from "../../../../components/Table/CommonTable";
import { Dropdown } from "react-bootstrap";
import CommanModel from "../../../../components/CommanModel/CommanModel";
import LeadHistory from "../../../../components/LeadHistory/LeadHistory";
import {
  Alert,
  Card,
  CardBody,
  CardHeader,
  Col,
  Row,
  UncontrolledAlert,
} from "reactstrap";
// import Form from "react-bootstrap/Form";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
// import { fetchUsers, fetchPosts } from "../../redux/slices/usersSlice";
import { useNavigate } from "react-router-dom";
import PageSpinner from "../../../../components/PageSpinner";
import { MdVisibility, MdEdit, MdDelete, MdMoreVert } from "react-icons/md";
import "./RoConfirmation.scss";
import MultiSelectDropdown from "../../../../components/MultiSelectDropdown/MultiSelectDropdown"; 

import * as Yup from "yup"; 
import { Formik, Field, Form, ErrorMessage } from "formik";
import { Form as BootstrapForm, Table, Button } from "react-bootstrap";


const validationSchema = Yup.object({
  remarks: Yup.string().required("Required"),

});

const rejectSchema = Yup.object({
  reject: Yup.string().required("Required"),
});



const RoConfirmation = () => {
     const [showModal, setShowModal] = useState(false);
        const [title, setTitle] = useState();
        // const [selectedCompany, setselectedCompany] = useState([]);
            // const companyList = [
            //   { value: "ro", label: "ICICI" },
            //   { value: "admin", label: "BOB" },
            // ];
              const { users, posts, loading, error } = useSelector(
                (state) => state.users
              );
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
        roconfirmation: "29/03/2025 12:02 pm",
      },
      {
        reqno: "CVRTL300722451",
        vehicledetails: "KA12B5695",
        client: "Indostar Capital..HOSPET",
        roconfirmation: "29/03/2025 12:02 pm",
      },
      {
        reqno: "CVRTL300722451",
        vehicledetails: "KA12B5695",
        client: "Indostar Capital..HOSPET",
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
        Cell: ({ row }) => {
          const handleSelect = (action) => {
            console.log("actions", action);
            setShowModal(true);
            setTitle(action);
            setselectedCompany();
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
                  onClick={() => handleSelect("Lead Remarks")}
                >
                  Remarks
                </Dropdown.Item>
                <Dropdown.Item className="fontsize-14">Approve</Dropdown.Item>
                <Dropdown.Item
                  className="fontsize-14"
                  onClick={() => handleSelect("Lead Reject")}
                >
                  Reject
                </Dropdown.Item>
          

                <Dropdown.Item
                  className="fontsize-14"
                  onClick={() => handleSelect("Lead History")}
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
          {/* <label>Company</label> */}
          <Col className="mb-0" xs={12} sm={12} md={6}>
            <div className="">
              {/* <Form.Group>
              <Form.Label>
                  Client Company<span className="text-danger">*</span>
                </Form.Label> 
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
              </Form.Group> */}
              <BootstrapForm.Group className="mb-3">
                <BootstrapForm.Label className="mb-1">
                  Client Company
                </BootstrapForm.Label>
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
              </BootstrapForm.Group>
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
          <div>
            <CommanModel
              show={showModal}
              onClose={() => setShowModal(false)}
              title={title}
              // onSubmit={() => formikRef.current?.onSubmit()}
              buttontext="Update"
              closebuttontext="Close"
            >
              <div>
                {title === "Lead Remarks" && (
                  <div className="lead_remarks ">
                    <div>
                      <Formik
                        initialValues={{
                          remarks: "",
                          isChecked: false,
                        }}
                        validationSchema={validationSchema}
                        onSubmit={(values) => {
                          console.log("=====lead=====", values);
                          setShowModal(false);
                        }}
                      >
                        {() => (
                          <Form>
                            <Row>
                              <Col className="mx-auto" md={6}>
                                <BootstrapForm.Group
                                  controlId="description"
                                  className="mb-3"
                                >
                                  <BootstrapForm.Label className="mb-1">
                                    Remarks{" "}
                                    <span className="text-danger">*</span>
                                  </BootstrapForm.Label>
                                  <Field
                                    name="remarks"
                                    as="textarea"
                                    rows={4}
                                    className="form-control"
                                  />
                                  <ErrorMessage
                                    name="remarks"
                                    component="div"
                                    className="text-danger errormessage"
                                  />
                                </BootstrapForm.Group>

                                <BootstrapForm.Group
                                  controlId="isChecked"
                                  className="mb-3"
                                >
                                  <div className="form-check">
                                    <Field
                                      type="checkbox"
                                      name="isChecked"
                                      className="form-check-input"
                                      id="isChecked"
                                    />
                                    <label
                                      className="form-check-label"
                                      htmlFor="isChecked"
                                    >
                                      Send SMS To Executive
                                    </label>
                                  </div>
                                  <ErrorMessage
                                    name="isChecked"
                                    component="div"
                                    className="text-danger errormessage"
                                  />
                                </BootstrapForm.Group>
                              </Col>
                            </Row>
                            <div className="text-end">
                              <Button
                                className="text-white fontsize-14 mx-1"
                                variant="secondary"
                                onClick={() => setShowModal(false)}
                              >
                                Close
                              </Button>
                              <Button
                                type="submit"
                                className="text-white fontsize-14 mx-1"
                                variant="primary"
                              >
                                Update
                              </Button>
                            </div>
                          </Form>
                        )}
                      </Formik>
                    </div>
                  </div>
                )}

                {title === "Lead Reject" && (
                  <div className="lead_reject">
                    <Formik
                      initialValues={{
                        reject: "", // default to empty (no radio selected)
                      }}
                      validationSchema={rejectSchema}
                      onSubmit={(values) => {
                        console.log("=====lead=====", values);
                        setShowModal(false);
                      }}
                    >
                      {() => (
                        <Form>
                          <Row>
                            <Col className="mx-auto" md={6}>
                              <BootstrapForm.Group
                                controlId="reject"
                                className="mb-3"
                              >
                                <BootstrapForm.Label className="mb-1">
                                  Choose Reason{" "}
                                  <span className="text-danger">*</span>
                                </BootstrapForm.Label>

                                <div className="">
                                  <div className="form-check mb-2">
                                    <Field
                                      type="radio"
                                      name="reject"
                                      value="Customer is not Reachable"
                                      className="form-check-input"
                                      id="reject-reachable"
                                    />
                                    <label
                                      className="form-check-label fontsize-14"
                                      htmlFor="reject-reachable"
                                    >
                                      Customer is not Reachable
                                    </label>
                                  </div>

                                  <div className="form-check">
                                    <Field
                                      type="radio"
                                      name="reject"
                                      value="Vehicle Sold Out / Released from Yard"
                                      className="form-check-input"
                                      id="reject-sold"
                                    />
                                    <label
                                      className="form-check-label fontsize-14" 
                                      htmlFor="reject-sold"
                                    >
                                      Vehicle Sold Out / Released from Yard
                                    </label>
                                  </div>
                                </div>

                                <ErrorMessage
                                  name="reject"
                                  component="div"
                                  className="text-danger errormessage"
                                />
                              </BootstrapForm.Group>
                            </Col>
                          </Row>
                          <div className="text-end">
                            <Button
                              className="text-white fontsize-14 mx-1"
                              variant="secondary"
                              onClick={() => setShowModal(false)}
                            >
                              Close
                            </Button>
                            <Button
                              type="submit"
                              className="text-white fontsize-14 mx-1"
                              variant="primary"
                            >
                              Confirm
                            </Button>
                          </div>
                        </Form>
                      )}
                    </Formik>
                  </div>
                )}
                {title === "Lead History" && (
                  <div>
                    <LeadHistory />
                  </div>
                )}
              </div>
            </CommanModel>
          </div>
        </div>
      </div>
    </Page>
  );
};

export default RoConfirmation;
