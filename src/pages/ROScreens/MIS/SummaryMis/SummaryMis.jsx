/* eslint-disable jsx-a11y/href-no-hash */
import Page from "../../../../components/Page";
import React from "react";
import { useEffect, useState } from "react";
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

const SummaryMis = () => {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [selectedClient, setselectedClient] = useState([]);
  const [selectedLead, setselectedLead] = useState([]);
  const [selectedVehilce, setselectedVehilce] = useState([]);
  const [selectedCategory, setselectedCategory] = useState([]);
  ;
  
   const datefilteroptions = [
     { value: "ro", label: "RO Valuator" },
     { value: "admin", label: "Admin" },
     { value: "client", label: "Client" },
     { value: "manager", label: "Manager" },
   ];
  
    const leadList = [
      { value: "ro", label: "Kumar" },
      { value: "admin", label: "Ashok" },
      { value: "client", label: "Naveen" },
      { value: "manager", label: "Praveen" }
     
    ];
      const vehilceType = [
        { value: "ro", label: "2 wheeler" },
        { value: "admin", label: "4 wheeler" },
        { value: "client", label: "10 wheeler" },
        { value: "manager", label: "6 wheeler" },
      ];
  
          const vehilceCategory = [
            { value: "ro", label: "2 wheeler" },
            { value: "admin", label: "4 wheeler" }
           
          ];
  
    const clientList = [
      { value: "ro", label: "RO Valuator" },
      { value: "admin", label: "Admin" },
      { value: "client", label: "Client" },
      { value: "manager", label: "Manager" },
    ];
  
 
  return (
    <Page
      title="Summary Mis"
      breadcrumbs={[{ name: "Mis" }, { name: "Summary Mis", active: true }]}
    >
      <div className="create_lead">
        <div>
          <Form>
            <div className="mt-4">
              <h5>Lead Download</h5>
            </div>
            <Row className="border-bottom">
              <Col className="mb-4 " xs={12} sm={12} md={6}>
                <Form.Group>
                  <Form.Label>
                    Date Range<span className="text-danger">*</span>
                  </Form.Label>
                  <Form.Control type="text" placeholder="Date Range" />
                </Form.Group>
              </Col>
              <Col className="mb-4" xs={12} sm={12} md={6}>
                <Form.Label>Client</Form.Label>
                <MultiSelectDropdown
                  options={clientList}
                  value={selectedClient}
                  onChange={setselectedClient}
                  placeholder="Select role types"
                  isMulti={true}
                  isSearchable={true}
                  closeMenuOnSelect={false}
                  showControls={true}
                />
              </Col>
              <Col className="mb-4" xs={12} sm={12} md={6}>
                <Form.Label>
                  Vehicle Category
                  <span className="text-danger">*</span>
                </Form.Label>
                <MultiSelectDropdown
                  options={vehilceCategory}
                  value={selectedCategory}
                  onChange={setselectedCategory}
                  placeholder="Select role types"
                  isMulti={true}
                  isSearchable={true}
                  closeMenuOnSelect={false}
                  showControls={true}
                />
              </Col>
              <Col className="mb-4" xs={12} sm={12} md={6}>
                <Form.Label>
                  Vehicle Type
                  <span className="text-danger">*</span>
                </Form.Label>
                <MultiSelectDropdown
                  options={vehilceType}
                  value={selectedVehilce}
                  onChange={setselectedVehilce}
                  placeholder="Select role types"
                  isMulti={true}
                  isSearchable={true}
                  closeMenuOnSelect={false}
                  showControls={true}
                />
              </Col>
              <Col className="mb-4" xs={12} sm={12} md={6}>
                <Form.Label>
                  Date Filter Based on
                  <span className="text-danger">*</span>
                </Form.Label>
                <MultiSelectDropdown
                  options={datefilteroptions}
                  value={selectedOptions}
                  onChange={setSelectedOptions}
                  placeholder="Select role types"
                  isMulti={false}
                  isSearchable={true}
                  closeMenuOnSelect={true}
                  showControls={false}
                />
              </Col>
              <Col className="mb-4" xs={12} sm={12} md={6}>
                <Form.Label>
                  Lead Status
                  <span className="text-danger">*</span>
                </Form.Label>
                <MultiSelectDropdown
                  options={leadList}
                  value={selectedLead}
                  onChange={setselectedLead}
                  placeholder="Select role types"
                  isMulti={true}
                  isSearchable={true}
                  closeMenuOnSelect={false}
                  showControls={true}
                />
              </Col>
            </Row>

            <div className="my-4 text-right">
              <Button className="text-white mx-2" variant="primary">
                Clear
              </Button>
              <Button className="btn-secondary text-white">
                Generate Excel
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </Page>
  );
};

export default SummaryMis;
