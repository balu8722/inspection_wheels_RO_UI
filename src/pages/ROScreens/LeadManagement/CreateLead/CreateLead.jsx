/* eslint-disable jsx-a11y/href-no-hash */
import Page from "../../../../components/Page";
import React, {useState} from "react";
import './CreateLead.scss'
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  Button,
  Card,
  CardBody,
  Col,
  Form,
  Row,
  Badge,
  FormGroup,
} from "react-bootstrap";
import MultiSelectDropdown from "../../../../components/MultiSelectDropdown/MultiSelectDropdown"; 


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
      title="Lead Details"
      breadcrumbs={[
        { name: "Lead Management", link: "/mytray" },
        { name: "New", active: true },
      ]}
    >
      <div className="create_lead">
        <div>
          <Form>
            <Row className="py-3 border-bottom">
              <Col xs={12} sm={12} md={6}>
                <Form.Group>
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
                </Form.Group>
              </Col>
              <Col xs={12} sm={12} md={6}>
                <Form.Group>
                  <Form.Label>
                    Client City<span className="text-danger">*</span>
                  </Form.Label>
                  <MultiSelectDropdown
                    options={cityList}
                    value={selectedCity}
                    onChange={setselectedCity}
                    placeholder="Select Client city"
                    isMulti={false}
                    isSearchable={true}
                    closeMenuOnSelect={true}
                    showControls={false}
                  />
               
                </Form.Group>
              </Col>
              <Col xs={12} sm={12} md={6}>
                <Form.Group>
                  <Form.Label>
                    Vehicle Type<span className="text-danger">*</span>
                  </Form.Label>
                  <div>
                    <Form.Check
                      label="Repo"
                      type="radio"
                      id="inline-radio-repo"
                      value="Repo"
                    
                    />
                    <Form.Check
                      label="Retail"
                      type="radio"
                      id="inline-radio-retail"
                      value="Retail"
                     
                    />
                    <Form.Check
                      label="B2C"
                      type="radio"
                      id="inline-radio-retail"
                      value="B2C"
                     
                    />
                    <Form.Check
                      label="Asset Verification"
                      type="radio"
                      id="inline-radio-retail"
                      value="Asset Verification"
                     
                    />
                  </div>
               
                </Form.Group>
              </Col>
              <Col xs={12} sm={12} md={6}>
                <label className="mb-2">
                  Vehicle Category<span className="text-danger">*</span>
                </label>
                <div>
                  <Form.Group>
                    <Form.Check
                      label="2 Wheelers"
                      name="group1"
                      className="mb-2"
                      type="radio"
                      id={`inline-radio-1`}
                      value="2 Wheelers"
                                        />
                    <Form.Check
                      label="3 Wheelers"
                      name="group1"
                      className="mb-2"
                      type="radio"
                      id={`inline-radio-1`}
                      value="3 Wheelers"
                    
                    />
                    <Form.Check
                      label="4 Wheelers"
                      name="group1"
                      className="mb-2"
                      type="radio"
                      id={`inline-radio-1`}
                      value="4 Wheelers"
                   
                    />
                    <Form.Check
                      label="CV (Commercial Vehicle)"
                      name="group1"
                      className="mb-2"
                      type="radio"
                      id={`inline-radio-1`}
                      value="CV (Commercial Vehicle)"
                     
                    />
                    <Form.Check
                      label="FE (Farm Equipments)"
                      name="group1"
                      className="mb-2"
                      type="radio"
                      id={`inline-radio-1`}
                      value="FE (Farm Equipments)"
                   
                    />
                    <Form.Check
                      label="CE (Construction Equipments)"
                      name="group1"
                      className="mb-2"
                      type="radio"
                      id={`inline-radio-1`}
                      value="CE (Construction Equipments)"
                    
                    />
                    <Form.Check
                      label="PV"
                      name="group1"
                      className="mb-2"
                      type="radio"
                      id={`inline-radio-1`}
                      value="PV"
                   
                    />
                    <Form.Check
                      label="BV (Body Inspection)"
                      name="group1"
                      className="mb-2"
                      type="radio"
                      id={`inline-radio-1`}
                      value="BV"
                    
                    />
                  
                  </Form.Group>
                </div>
              </Col>
            </Row>
            <div className="mt-4">
              <h5>Vehicle Details</h5>
            </div>
            <Row className="border-bottom">
              <Col className="mb-4 " xs={12} sm={12} md={4}>
                <Form.Group>
                  <Form.Label>
                    Reg. No.<span className="text-danger">*</span>
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Reg.No"
                   
                  />
                
                </Form.Group>
              </Col>
              <Col className="mb-4" xs={12} sm={12} md={4}>
                <Form.Label>Prospect No.</Form.Label>
                <Form.Control type="text" placeholder="Prospect No." />
              </Col>
              <Col className="mb-4" xs={12} sm={12} md={4}>
                <Form.Label>Vehicle</Form.Label>
                <Form.Control type="text" placeholder="Make Model Varient" />
              </Col>
              <Col className="mb-4" xs={12} sm={12} md={4}>
                <Form.Label>
                  Contact / Customer Name<span className="text-danger">*</span>
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Contact Name"
              
                />
              </Col>
              <Col className="mb-4" xs={12} sm={12} md={4}>
                <Form.Label>
                  Contact / Customer Mobile
                  <span className="text-danger">*</span>
                </Form.Label>
                <Form.Control type="text" placeholder="Enter Contact Name" />
              </Col>
              <Col className="mb-4" xs={12} sm={12} md={4}>
                <Form.Label>Extra Km</Form.Label>
                <Form.Control type="text" placeholder="Enter Extra Km" />
              </Col>
              <Col className="mb-4" xs={12} sm={12} md={4}>
                <Form.Label>
                  State<span className="text-danger">*</span>
                </Form.Label>
                <MultiSelectDropdown
                  options={stateList}
                  value={selectedState}
                  onChange={setselectedState}
                  placeholder="Choose state"
                  isMulti={false}
                  isSearchable={true}
                  closeMenuOnSelect={true}
                  showControls={false}
                />
              </Col>
              <Col className="mb-4" xs={12} sm={12} md={4}>
                <Form.Label>
                  City<span className="text-danger">*</span>
                </Form.Label>
                <MultiSelectDropdown
                  options={leadCity}
                  value={selectedLeadCity}
                  onChange={setselectedLeadCity}
                  placeholder="Choose state"
                  isMulti={false}
                  isSearchable={true}
                  closeMenuOnSelect={true}
                  showControls={false}
                />
              </Col>
              <Col className="mb-4" xs={12} sm={12} md={4}>
                <Form.Label>
                  Area<span className="text-danger">*</span>
                </Form.Label>
                <MultiSelectDropdown
                  options={leadarea}
                  value={selectedArea}
                  onChange={setselectedArea}
                  placeholder="Choose state"
                  isMulti={false}
                  isSearchable={true}
                  closeMenuOnSelect={true}
                  showControls={false}
                />
              </Col>
              <Col className="mb-4" xs={12} sm={12} md={4}>
                <Form.Label>Street</Form.Label>
                <Form.Control type="text" placeholder="Enter street" />
              </Col>
              <Col className="mb-4" xs={12} sm={12} md={4}>
                <Form.Label>
                  Pin code<span className="text-danger">*</span>
                </Form.Label>
                <Form.Control type="text" placeholder="Enter Pin code" />
              </Col>

              <Col className="mb-4" xs={12} sm={12} md={4}>
                <Form.Label>RC status</Form.Label>
                <Form.Select className="selective-field">
                  <option value="0">Choose RC status</option>
                  <option value="1">Original </option>
                  <option value="1">Duplicate </option>
                </Form.Select>
              </Col>
              <Col className="mb-4" xs={12} sm={12} md={4}>
                <Form.Label>Manufacturing Month/Year</Form.Label>
                <Form.Control type="date" placeholder="Enter Pin code" />
              </Col>
              <Col className="mb-4" xs={12} sm={12} md={4}>
                <Form.Label>Registration Month/Year</Form.Label>
                <Form.Control type="date" placeholder="Enter Pin code" />
              </Col>
              <Col className="mb-4" xs={12} sm={12} md={4}>
                <Form.Label>Chassis No</Form.Label>
                <Form.Control type="text" placeholder="Enter Chassis No" />
              </Col>
              <Col className="mb-4" xs={12} sm={12} md={4}>
                <Form.Label>No of owners</Form.Label>
                <Form.Control type="text" placeholder="Enter No of owners" />
              </Col>
            </Row>
            <div className="mt-4">
              <h5>Executive Details</h5>
            </div>
            <Row className="border-bottom">
              <Col className="mb-4 " xs={12} sm={12} md={4}>
                <Form.Label>
                  Executive Name<span className="text-danger">*</span>
                </Form.Label>
                <Form.Control type="text" placeholder="Enter Executive Name" />
              </Col>
              <Col className="mb-4 " xs={12} sm={12} md={4}>
                <Form.Label>
                  Executive Mobile<span className="text-danger">*</span>
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Executive Mobile"
                />
              </Col>
              <Col className="mb-4 " xs={12} sm={12} md={4}>
                <Form.Label>
                  Report To<span className="text-danger">*</span>
                </Form.Label>
                <Form.Control type="text" placeholder="Enter Email to send" />
              </Col>
            </Row>
            <div className="my-4 text-right">
              <Button className="text-white mx-2" variant="primary">
                Reset
              </Button>
              <Button className="btn-secondary text-white">
                Save
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </Page>
  );
};

export default CreateLead;
