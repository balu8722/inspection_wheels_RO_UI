/* eslint-disable jsx-a11y/href-no-hash */

import Page from "../../../../components/Page";
// import Typography from "../components/Typography";
import React, { useState } from "react";
import  { useRef } from "react";

import { CommonTable } from "../../../../components/Table/CommonTable";
import  MultiSelectDropdown  from "../../../../components/MultiSelectDropdown/MultiSelectDropdown";
import "./Roleads.scss"
import {
  Alert,
  CardBody,
  CardHeader,
  UncontrolledAlert,
  
} from "reactstrap";
import {
  Formik,
  Field,
  Form,
  ErrorMessage
} from 'formik';
import * as Yup from 'yup'; 
import {
  Form as BootstrapForm,
  Button,
  Row,
  Col,
  OverlayTrigger,
  Tooltip,
  Card,
  Table,
} from "react-bootstrap";
import { Dropdown } from "react-bootstrap";
// import { ThreeDotsVertical } from "react-bootstrap-icons";
// import Form from "react-bootstrap/Form";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
// import { fetchUsers, fetchPosts } from "../../redux/slices/usersSlice";
import { useNavigate } from "react-router-dom";
import PageSpinner from "../../../../components/PageSpinner";
import { MdVisibility, MdEdit, MdDelete, MdMoreVert } from "react-icons/md";
import CommanModel from "../../../../components/CommanModel/CommanModel";
import { Background } from "victory";
import LeadHistory from "../../../../components/LeadHistory/LeadHistory";


const validationSchema = Yup.object({
  remarks: Yup.string().required("Required"),

});

const assignSchema = Yup.object({
  remarks: Yup.string(),
  selectedCompany: Yup.string().required("Required"),
});

const rejectSchema = Yup.object({
  reject: Yup.string().required("Required"),
});

const Roleads = () => {
  const formikRef = useRef();
  const [showModal, setShowModal] = useState(false);
  const [title, setTitle] = useState();
  const [selectedCompany, setselectedCompany] = useState([]);
      const companyList = [
        { value: "ro", label: "John AJ Values-Ro valuator" },
        { value: "admin", label: "Smith  AJ Values-Ro valuator" },
        { value: "admin", label: "Roy  AJ Values-Ro valuator" },
        { value: "admin", label: "Joe  AJ Values-Ro valuator" },
      ];
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
    {
      contact: "ANABURU DAVANGERE",
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
                   setselectedCompany();
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
                  onClick={() => handleSelect("Lead Remarks")}
                >
                  Remarks
                </Dropdown.Item>
                <Dropdown.Item
                  className="fontsize-14"
                  onClick={() => handleSelect("Assign To Valuator")}
                >
                  Assign
                </Dropdown.Item>
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
                                  Remarks <span className="text-danger">*</span>
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

              {/* *********************ASSIGN******************/}
              {title === "Assign To Valuator" && (
                <div className="lead_assign">
                  <Formik
                    initialValues={{
                      selectedCompany: "",
                      remarks: "",
                      from: "",
                      to: "",
                      extrakm: "",
                    }}
                    validationSchema={assignSchema}
                    onSubmit={(values) => {
                      console.log("===assign=======", values);
                      console.log("===assign=======", values);

                      const selectedCompanyObj = companyList.find(
                        (opt) => opt.value === values.selectedCompany
                      );

                      let payload = {
                        remarks: values.remarks,
                        selectedCompany: selectedCompanyObj?.label || "", // use label from list
                      };

                      console.log("payload", payload);
                      setShowModal(false);
                    }}
                  >
                    {({ setFieldValue, values }) => (
                      <Form>
                        <Row>
                          <Col className="mx-auto" md={6}>
                            <BootstrapForm.Group
                              controlId="selectedCompany"
                              className="mb-3"
                            >
                              <BootstrapForm.Label className="mb-1">
                                Choose evaluator{" "}
                                <span className="text-danger">*</span>
                              </BootstrapForm.Label>
                              <MultiSelectDropdown
                                options={companyList}
                                value={selectedCompany}
                                // onChange={setselectedCompany}
                                placeholder="Choose Valuator"
                                isMulti={false}
                                isSearchable={true}
                                closeMenuOnSelect={true}
                                showControls={false}
                                onChange={(value) => {
                                  setselectedCompany(value); // your state (if needed)
                                  setFieldValue(
                                    "selectedCompany",
                                    value?.value
                                  );
                                }}
                              />
                              <ErrorMessage
                                name="selectedCompany"
                                component="div"
                                className="text-danger errormessage"
                              />
                            </BootstrapForm.Group>

                            <BootstrapForm.Group
                              controlId="remarks"
                              className="mb-3"
                            >
                              <BootstrapForm.Label className="mb-1">
                                Remarks
                              </BootstrapForm.Label>
                              <Field
                                name="remarks"
                                as="textarea"
                                rows={4}
                                className="form-control"
                              />
                            </BootstrapForm.Group>
                            <BootstrapForm.Group
                              controlId="isChecked"
                              className="mb-3"
                            >
                              <BootstrapForm.Label className="mb-1">
                                Extra KM
                              </BootstrapForm.Label>

                              <div className="d-flex">
                                <div className="form-check">
                                  <Field
                                    type="radio"
                                    name="isChecked"
                                    value="yes"
                                    className="form-check-input"
                                    id="isCheckedYes"
                                    checked
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor="isCheckedYes"
                                  >
                                    Yes
                                  </label>
                                </div>

                                <div className="form-check px-5">
                                  <Field
                                    type="radio"
                                    name="isChecked"
                                    value="no"
                                    className="form-check-input"
                                    id="isCheckedNo"
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor="isCheckedNo"
                                  >
                                    No
                                  </label>
                                </div>
                              </div>

                              <ErrorMessage
                                name="isChecked"
                                component="div"
                                className="text-danger errormessage"
                              />
                            </BootstrapForm.Group>
                            <BootstrapForm.Group
                              controlId="from"
                              className="mb-3"
                            >
                              <BootstrapForm.Label className="mb-1">
                                From<span className="text-danger">*</span>
                              </BootstrapForm.Label>
                              <Field
                                name="from"
                                rows={4}
                                className="form-control"
                              />
                            </BootstrapForm.Group>
                            <BootstrapForm.Group
                              controlId="to"
                              className="mb-3"
                            >
                              <BootstrapForm.Label className="mb-1">
                                To<span className="text-danger">*</span>
                              </BootstrapForm.Label>
                              <Field
                                name="to"
                                rows={4}
                                className="form-control"
                              />
                            </BootstrapForm.Group>
                            <BootstrapForm.Group
                              controlId="extrakm"
                              className="mb-3"
                            >
                              <BootstrapForm.Label className="mb-1">
                                Extra KM<span className="text-danger">*</span>
                              </BootstrapForm.Label>
                              <Field
                                name="extrakm"
                                rows={4}
                                className="form-control"
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
          <CommonTable propColumns={columns} propData={data} />
        </div>
      </div>
    </Page>
  );
};

export default Roleads;
