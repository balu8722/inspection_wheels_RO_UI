/* eslint-disable jsx-a11y/href-no-hash */
import Page from "../../../../components/Page";
import React from "react";
import { useEffect,  useState  } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Select from "react-select";
import MultiSelectDropdown from "../../../../components/MultiSelectDropdown/MultiSelectDropdown"; 
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

const RoMis = () => {
const [selectedOptions, setSelectedOptions] = useState([]);
const [selectedClient, setselectedClient] = useState([]);
const [selectedLead, setselectedLead] = useState([]);
const [selectedVehilce, setselectedVehilce] = useState([]);
const [selectedCategory, setselectedCategory] = useState([]);
;

 const datefilteroptions = [
   { value: "ro", label: "Lead created" },
   { value: "admin", label: "RO confirmation done" },
   { value: "client", label: "QC hold" },
   { value: "manager", label: "Inspection completed" },
 ];

  const leadList = [
    { value: "ro", label: "RO lead" },
    { value: "admin", label: "Assigned leads" },
    { value: "client", label: "Reassigned leads" },
    { value: "manager", label: "RO confirmation leads" },
    { value: "manager", label: "Approved leads" },
    { value: "manager", label: "Rejected lead" },
    { value: "manager", label: "Inspection completed leads" }
    
  ];
    const vehilceType = [
      { value: "retails", label: "Retail" },
      { value: "repo", label: "Repo" }
     
    ];

        const vehilceCategory = [
          { value: "ro", label: "2 wheeler" },
          { value: "admin", label: "4 wheeler" },
          { value: "admin", label: "commercial vehicles" },
          { value: "admin", label: "farm equipments" },
          { value: "admin", label: "construction equipments" },
        ];

  const clientList = [
    { value: "ro", label: "ICICI Bank" },
    { value: "admin", label: "Cholamandal" },
    { value: "client", label: "IDBI Bank" },
    { value: "manager", label: "HDFC Bank" },
  ];

  return (
    <Page
      title="Ro Mis"
      breadcrumbs={[{ name: "Mis" }, { name: "Ro Mis", active: true }]}
    >
      <div className="create_lead">
        <div>
          <Form >
            <div className="mt-4">
              <h5>Lead Download</h5>
            </div>
            <Row className="border-bottom">
              <Col className="mb-4 " xs={12} sm={12} md={6}>
                <Form.Group>
                  <Form.Label>
                    Date Range<span className="text-danger">*</span>
                  </Form.Label>
                  <Form.Control
                    type="date"
                    placeholder="Date Range"
                  />
               
                </Form.Group>
              </Col>
              <Col className="mb-4" xs={12} sm={12} md={6}>
                <Form.Label>Client</Form.Label>
                <MultiSelectDropdown
                  options={clientList}
                  value={selectedClient}
                  onChange={setselectedClient}
                  placeholder="Choose Company"
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
                  placeholder="Choose Vehicle Category"
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
                  placeholder="Choose Vehicle Type"
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
                  placeholder="Choose your required date field "
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
                  placeholder="Choose status"
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

export default RoMis;
