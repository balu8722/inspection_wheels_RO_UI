/* eslint-disable jsx-a11y/href-no-hash */
import Page from "../../../../components/Page";
import React, { useState } from "react";
import "./CreateLead.scss";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import {
  Form as BootstrapForm,
  Button,
  Row,
  Col,
  OverlayTrigger,
  Tooltip,
  Card,
} from "react-bootstrap";
import MultiSelectDropdown from "../../../../components/MultiSelectDropdown/MultiSelectDropdown";

const validationSchema = Yup.object({
  selectedCompany: Yup.string().required("Required"),
  selectedCity: Yup.string().required("Required"),
  vehicleType: Yup.string().required("Required"),
  vehicleCategory: Yup.string().required("Required"),
  regNo: Yup.string().required("Required"),
  prospectNo: Yup.string(),
  vehicle: Yup.string(),
  contactName: Yup.string().required("Required"),
  contactMobile: Yup.string().required("Required"),
  extraKm: Yup.string(),
  state: Yup.string().required("Required"),
  city: Yup.string().required("Required"),
  area: Yup.string().required("Required"),
  street: Yup.string(),
  pincode: Yup.string().required("Required"),
  rcStatus: Yup.string(),
  manufacturingDate: Yup.string(),
  registrationDate: Yup.string(),
  chassisNo: Yup.string(),
  noOfOwners: Yup.string(),
  executiveName: Yup.string().required("Required"),
  executiveMobile: Yup.string().required("Required"),
  reportTo: Yup.string().required("Required"),
});

const CreateLead = () => {
  const [selectedCompany, setselectedCompany] = useState([]);
  const [selectedCity, setselectedCity] = useState([]);
  const [selectedState, setselectedState] = useState([]);
  const [selectedLeadCity, setselectedLeadCity] = useState([]);
  const [selectedArea, setselectedArea] = useState([]);

  const companyList = [
    { value: "ro", label: "ICICI" },
    { value: "admin", label: "BOB" },
  ];
  const cityList = [
    { value: "ro", label: "ICICI" },
    { value: "admin", label: "BOB" },
  ];
  const stateList = [
    { value: "ro", label: "Kar" },
    { value: "admin", label: "AP" },
  ];
  const leadCity = [
    { value: "ro", label: "mysuru" },
    { value: "admin", label: "bengalore" },
  ];

  const leadarea = [
    { value: "ro", label: "vijayanagar" },
    { value: "admin", label: "hebbal" },
  ];

  return (
    <Page
      breadcrumbs={[
        { name: "Lead Management", link: "/mytray" },
        { name: "New", active: true },
      ]}
    >
      <div className="create_lead">
        <div>
          <Formik
            initialValues={{
              selectedCompany: "",
              selectedCity: "",
              vehicleType: "",
              vehicleCategory: "",
              regNo: "",
              prospectNo: "",
              vehicle: "",
              contactName: "",
              contactMobile: "",
              extraKm: "",
              state: "",
              city: "",
              area: "",
              street: "",
              pincode: "",
              rcStatus: "",
              manufacturingDate: "",
              registrationDate: "",
              chassisNo: "",
              noOfOwners: "",
              executiveName: "",
              executiveMobile: "",
              reportTo: "",
            }}
            validationSchema={validationSchema}
            onSubmit={(values) => {
              console.log("==========", values);
            }}
          >
            {({ setFieldValue }) => (
              <Form>
                <Row>
                  <h4>Lead Details</h4>
                  <Col md={6}>
                    <BootstrapForm.Group
                      controlId="selectedCompany"
                      className="mb-2"
                    >
                      <BootstrapForm.Label className="mb-1">
                        Client Company<span className="text-danger">*</span>
                      </BootstrapForm.Label>
                      <MultiSelectDropdown
                        options={companyList}
                        value={selectedCompany}
                        onChange={(selectedOption) => {
                          setselectedCompany(selectedOption);
                          setFieldValue(
                            "selectedCompany",
                            selectedOption?.value || ""
                          );
                        }}
                        placeholder="Choose client company"
                        isMulti={false}
                        isSearchable={true}
                        closeMenuOnSelect={true}
                        showControls={false}
                      />
                      <ErrorMessage
                        name="selectedCompany"
                        component="div"
                        className="text-danger errormessage"
                      />
                    </BootstrapForm.Group>
                  </Col>
                  <Col md={6}>
                    <BootstrapForm.Group
                      controlId="selectedCity"
                      className="mb-2"
                    >
                      <BootstrapForm.Label className="mb-1">
                        Client City<span className="text-danger">*</span>
                      </BootstrapForm.Label>
                      <MultiSelectDropdown
                        options={cityList}
                        value={selectedCity}
                        onChange={(selectedOption) => {
                          setselectedCity(selectedOption);
                          setFieldValue(
                            "selectedCity",
                            selectedOption?.value || ""
                          );
                        }}
                        placeholder="Select Client city"
                        isMulti={false}
                        isSearchable={true}
                        closeMenuOnSelect={true}
                        showControls={false}
                      />
                      <ErrorMessage
                        name="selectedCity"
                        component="div"
                        className="text-danger errormessage"
                      />
                    </BootstrapForm.Group>
                  </Col>
                  <Col md={6}>
                    <BootstrapForm.Group
                      controlId="vehicleType"
                      className="mb-2"
                    >
                      <BootstrapForm.Label className="mb-1">
                        Vehicle Type<span className="text-danger">*</span>
                      </BootstrapForm.Label>
                      <div>
                        <BootstrapForm.Check
                          label="Repo"
                          type="radio"
                          name="vehicleType"
                          id="inline-radio-repo"
                          value="Repo"
                          onChange={() => setFieldValue("vehicleType", "Repo")}
                        />
                        <BootstrapForm.Check
                          label="Retail"
                          type="radio"
                          name="vehicleType"
                          id="inline-radio-retail"
                          value="Retail"
                          onChange={() =>
                            setFieldValue("vehicleType", "Retail")
                          }
                        />
                      </div>
                      <ErrorMessage
                        name="vehicleType"
                        component="div"
                        className="text-danger errormessage"
                      />
                    </BootstrapForm.Group>
                  </Col>
                  <Col md={6}>
                    <BootstrapForm.Group
                      controlId="vehicleCategory"
                      className="mb-2"
                    >
                      <BootstrapForm.Label className="mb-1">
                        Vehicle Category<span className="text-danger">*</span>
                      </BootstrapForm.Label>
                      <div>
                        <BootstrapForm.Check
                          label="2 Wheelers"
                          name="vehicleCategory"
                          type="radio"
                          value="2 Wheelers"
                          onChange={() =>
                            setFieldValue("vehicleCategory", "2 Wheelers")
                          }
                        />
                        <BootstrapForm.Check
                          label="3 Wheelers"
                          name="vehicleCategory"
                          type="radio"
                          value="3 Wheelers"
                          onChange={() =>
                            setFieldValue("vehicleCategory", "3 Wheelers")
                          }
                        />
                        <BootstrapForm.Check
                          label="4 Wheelers"
                          name="vehicleCategory"
                          type="radio"
                          value="4 Wheelers"
                          onChange={() =>
                            setFieldValue("vehicleCategory", "4 Wheelers")
                          }
                        />
                        <BootstrapForm.Check
                          label="CV (Commercial Vehicle)"
                          name="vehicleCategory"
                          type="radio"
                          value="CV (Commercial Vehicle)"
                          onChange={() =>
                            setFieldValue(
                              "vehicleCategory",
                              "CV (Commercial Vehicle)"
                            )
                          }
                        />
                        <BootstrapForm.Check
                          label="FE (Farm Equipments)"
                          name="vehicleCategory"
                          type="radio"
                          value="FE (Farm Equipments)"
                          onChange={() =>
                            setFieldValue(
                              "vehicleCategory",
                              "FE (Farm Equipments)"
                            )
                          }
                        />
                        <BootstrapForm.Check
                          label="CE (Construction Equipments)"
                          name="vehicleCategory"
                          type="radio"
                          value="CE (Construction Equipments)"
                          onChange={() =>
                            setFieldValue(
                              "vehicleCategory",
                              "CE (Construction Equipments)"
                            )
                          }
                        />
                        <BootstrapForm.Check
                          label="PV"
                          name="vehicleCategory"
                          type="radio"
                          value="PV"
                          onChange={() =>
                            setFieldValue("vehicleCategory", "PV")
                          }
                        />
                        <BootstrapForm.Check
                          label="BV (Body Inspection)"
                          name="vehicleCategory"
                          type="radio"
                          value="BV"
                          onChange={() =>
                            setFieldValue("vehicleCategory", "BV")
                          }
                        />
                      </div>
                      <ErrorMessage
                        name="vehicleCategory"
                        component="div"
                        className="text-danger errormessage"
                      />
                    </BootstrapForm.Group>
                  </Col>
                  <div>
                    <h4>Vehicle Details</h4>
                  </div>
                  <Col md={6}>
                    <BootstrapForm.Group controlId="regNo" className="mb-2">
                      <BootstrapForm.Label className="mb-1">
                        Reg. No.<span className="text-danger">*</span>
                      </BootstrapForm.Label>
                      <Field
                        name="regNo"
                        type="text"
                        className="form-control"
                        placeholder="Enter Reg. No."
                      />
                      <ErrorMessage
                        name="regNo"
                        component="div"
                        className="text-danger errormessage"
                      />
                    </BootstrapForm.Group>
                  </Col>
                  {/* <Col md={6}>
                    <BootstrapForm.Group
                      controlId="prospectNo"
                      className="mb-2"
                    >
                      <BootstrapForm.Label className="mb-1">
                        Prospect No.
                      </BootstrapForm.Label>
                      <Field
                        name="prospectNo"
                        type="text"
                        className="form-control"
                        placeholder="Enter Prospect No."
                      />
                    </BootstrapForm.Group>
                  </Col> */}
                  <Col md={6}>
                    <BootstrapForm.Group controlId="vehicle" className="mb-2">
                      <BootstrapForm.Label className="mb-1">
                        Vehicle
                      </BootstrapForm.Label>
                      <Field
                        name="vehicle"
                        type="text"
                        className="form-control"
                        placeholder="Enter Make Model Variant"
                      />
                    </BootstrapForm.Group>
                  </Col>
                  <Col md={6}>
                    <BootstrapForm.Group
                      controlId="contactName"
                      className="mb-2"
                    >
                      <BootstrapForm.Label className="mb-1">
                        Contact / Customer Name
                        <span className="text-danger">*</span>
                      </BootstrapForm.Label>
                      <Field
                        name="contactName"
                        type="text"
                        className="form-control"
                        placeholder="Enter Contact Name"
                      />
                      <ErrorMessage
                        name="contactName"
                        component="div"
                        className="text-danger errormessage"
                      />
                    </BootstrapForm.Group>
                  </Col>
                  <Col md={6}>
                    <BootstrapForm.Group
                      controlId="contactMobile"
                      className="mb-2"
                    >
                      <BootstrapForm.Label className="mb-1">
                        Contact / Customer Mobile
                        <span className="text-danger">*</span>
                      </BootstrapForm.Label>
                      <Field
                        name="contactMobile"
                        type="text"
                        className="form-control"
                        placeholder="Enter Contact Mobile"
                      />
                      <ErrorMessage
                        name="contactMobile"
                        component="div"
                        className="text-danger errormessage"
                      />
                    </BootstrapForm.Group>
                  </Col>
                  <Col md={6}>
                    <BootstrapForm.Group controlId="extraKm" className="mb-2">
                      <BootstrapForm.Label className="mb-1">
                        Extra Km
                      </BootstrapForm.Label>
                      <Field
                        name="extraKm"
                        type="text"
                        className="form-control"
                        placeholder="Enter Extra Km"
                      />
                    </BootstrapForm.Group>
                  </Col>
                  <Col md={6}>
                    <BootstrapForm.Group controlId="state" className="mb-2">
                      <BootstrapForm.Label className="mb-1">
                        State<span className="text-danger">*</span>
                      </BootstrapForm.Label>
                      <MultiSelectDropdown
                        options={stateList}
                        value={selectedState}
                        onChange={(selectedOption) => {
                          setselectedState(selectedOption);
                          setFieldValue("state", selectedOption?.value || "");
                        }}
                        placeholder="Choose state"
                        isMulti={false}
                        isSearchable={true}
                        closeMenuOnSelect={true}
                        showControls={false}
                      />
                      <ErrorMessage
                        name="state"
                        component="div"
                        className="text-danger errormessage"
                      />
                    </BootstrapForm.Group>
                  </Col>
                  <Col md={6}>
                    <BootstrapForm.Group controlId="city" className="mb-2">
                      <BootstrapForm.Label className="mb-1">
                        City<span className="text-danger">*</span>
                      </BootstrapForm.Label>
                      <MultiSelectDropdown
                        options={leadCity}
                        value={selectedLeadCity}
                        onChange={(selectedOption) => {
                          setselectedLeadCity(selectedOption);
                          setFieldValue("city", selectedOption?.value || "");
                        }}
                        placeholder="Choose city"
                        isMulti={false}
                        isSearchable={true}
                        closeMenuOnSelect={true}
                        showControls={false}
                      />
                      <ErrorMessage
                        name="city"
                        component="div"
                        className="text-danger errormessage"
                      />
                    </BootstrapForm.Group>
                  </Col>
                  <Col md={6}>
                    <BootstrapForm.Group controlId="area" className="mb-2">
                      <BootstrapForm.Label className="mb-1">
                        Area<span className="text-danger">*</span>
                      </BootstrapForm.Label>
                      <MultiSelectDropdown
                        options={leadarea}
                        value={selectedArea}
                        onChange={(selectedOption) => {
                          setselectedArea(selectedOption);
                          setFieldValue("area", selectedOption?.value || "");
                        }}
                        placeholder="Choose area"
                        isMulti={false}
                        isSearchable={true}
                        closeMenuOnSelect={true}
                        showControls={false}
                      />
                      <ErrorMessage
                        name="area"
                        component="div"
                        className="text-danger errormessage"
                      />
                    </BootstrapForm.Group>
                  </Col>
                  <Col md={6}>
                    <BootstrapForm.Group controlId="street" className="mb-2">
                      <BootstrapForm.Label className="mb-1">
                        Street
                      </BootstrapForm.Label>
                      <Field
                        name="street"
                        type="text"
                        className="form-control"
                        placeholder="Enter street"
                      />
                    </BootstrapForm.Group>
                  </Col>
                  <Col md={6}>
                    <BootstrapForm.Group controlId="pincode" className="mb-2">
                      <BootstrapForm.Label className="mb-1">
                        Pin code<span className="text-danger">*</span>
                      </BootstrapForm.Label>
                      <Field
                        name="pincode"
                        type="text"
                        className="form-control"
                        placeholder="Enter Pin code"
                      />
                      <ErrorMessage
                        name="pincode"
                        component="div"
                        className="text-danger errormessage"
                      />
                    </BootstrapForm.Group>
                  </Col>
                  <Col md={6}>
                    <BootstrapForm.Group controlId="rcStatus" className="mb-2">
                      <BootstrapForm.Label className="mb-1">
                        RC status
                      </BootstrapForm.Label>
                      <Field
                        as="select"
                        name="rcStatus"
                        className="form-control selective-field"
                      >
                        <option value="">Choose RC status</option>
                        <option value="Original">Original</option>
                        <option value="Duplicate">Duplicate</option>
                      </Field>
                    </BootstrapForm.Group>
                  </Col>
                  <Col md={6}>
                    <BootstrapForm.Group
                      controlId="manufacturingDate"
                      className="mb-2"
                    >
                      <BootstrapForm.Label className="mb-1">
                        Manufacturing Month/Year
                      </BootstrapForm.Label>
                      <Field
                        name="manufacturingDate"
                        type="date"
                        className="form-control"
                      />
                    </BootstrapForm.Group>
                  </Col>
                  <Col md={6}>
                    <BootstrapForm.Group
                      controlId="registrationDate"
                      className="mb-2"
                    >
                      <BootstrapForm.Label className="mb-1">
                        Registration Month/Year
                      </BootstrapForm.Label>
                      <Field
                        name="registrationDate"
                        type="date"
                        className="form-control"
                      />
                    </BootstrapForm.Group>
                  </Col>
                  <Col md={6}>
                    <BootstrapForm.Group controlId="chassisNo" className="mb-2">
                      <BootstrapForm.Label className="mb-1">
                        Chassis No
                      </BootstrapForm.Label>
                      <Field
                        name="chassisNo"
                        type="text"
                        className="form-control"
                        placeholder="Enter Chassis No"
                      />
                    </BootstrapForm.Group>
                  </Col>
                  <Col md={6}>
                    <BootstrapForm.Group
                      controlId="noOfOwners"
                      className="mb-2"
                    >
                      <BootstrapForm.Label className="mb-1">
                        No of owners
                      </BootstrapForm.Label>
                      <Field
                        name="noOfOwners"
                        type="text"
                        className="form-control"
                        placeholder="Enter No of owners"
                      />
                    </BootstrapForm.Group>
                  </Col>
                  <div>
                    <h4>Executive Details</h4>
                  </div>
                  <Col md={6}>
                    <BootstrapForm.Group
                      controlId="executiveName"
                      className="mb-2"
                    >
                      <BootstrapForm.Label className="mb-1">
                        Executive Name<span className="text-danger">*</span>
                      </BootstrapForm.Label>
                      <Field
                        name="executiveName"
                        type="text"
                        className="form-control"
                        placeholder="Enter Executive Name"
                      />
                      <ErrorMessage
                        name="executiveName"
                        component="div"
                        className="text-danger errormessage"
                      />
                    </BootstrapForm.Group>
                  </Col>
                  <Col md={6}>
                    <BootstrapForm.Group
                      controlId="executiveMobile"
                      className="mb-2"
                    >
                      <BootstrapForm.Label className="mb-1">
                        Executive Mobile<span className="text-danger">*</span>
                      </BootstrapForm.Label>
                      <Field
                        name="executiveMobile"
                        type="text"
                        className="form-control"
                        placeholder="Enter Executive Mobile"
                      />
                      <ErrorMessage
                        name="executiveMobile"
                        component="div"
                        className="text-danger errormessage"
                      />
                    </BootstrapForm.Group>
                  </Col>
                  <Col md={6}>
                    <BootstrapForm.Group controlId="reportTo" className="mb-2">
                      <BootstrapForm.Label className="mb-1">
                        Report To<span className="text-danger">*</span>
                      </BootstrapForm.Label>
                      <Field
                        name="reportTo"
                        type="text"
                        className="form-control"
                        placeholder="Enter Report To"
                      />
                      <ErrorMessage
                        name="reportTo"
                        component="div"
                        className="text-danger errormessage"
                      />
                    </BootstrapForm.Group>
                  </Col>
                </Row>
                <div className="text-end">
                  <Button type="submit" variant="outline-primary mt-4">
                    Save
                  </Button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </Page>
  );
};

export default CreateLead;
