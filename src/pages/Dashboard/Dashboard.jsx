import Page from "../../components/Page";
import React from "react";
import "./Dashboard.scss";
import { MdVisibility, MdEdit, MdDelete } from "react-icons/md";
// import {
//   Alert,
//   Card,
//   CardBody,
//   CardHeader,
//   Col,
//   Row,
//   UncontrolledAlert,
// } from "reactstrap";
import {
  Button,
  Card,
  CardBody,
  CardImg,
  CardImgOverlay,
  CardLink,
  CardText,
  CardTitle,
  Col,
  ListGroup,
  ListGroupItem,
  Row,
} from "reactstrap";
import Form from "react-bootstrap/Form";
import Badge from "react-bootstrap/Badge";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers, fetchPosts } from "../../redux/slices/usersSlice";
import { useNavigate } from "react-router-dom";
import PageSpinner from "../../components/PageSpinner";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Clientcount from "./ClientCount/ClientCount"
import DataTable from "../../components/DataTable/DataTable";

const Dashboard = () => {
   const data = React.useMemo(
     () => [
       {
         company: "Adani Capital Private Limited",
         rolead: 28,
         assigned: 23,
         reassigned: 67,
         roconfirmation: 23,
         qc: 22,
         qchold: 99,
         inspection: 33,
         reject: 78,
         total: 102,
       },
       {
         company: "AU Small Finance Bank LTD",
         rolead: 22,
         assigned: 23,
         reassigned: 67,
         roconfirmation: 23,
         qc: 22,
         qchold: 99,
         inspection: 33,
         reject: 78,
         total: 102,
       },
       {
         company: "Axis Bank Ltd",
         rolead: 22,
         assigned: 23,
         reassigned: 67,
         roconfirmation: 23,
         qc: 22,
         qchold: 99,
         inspection: 33,
         reject: 78,
         total: 102,
       },
       {
         company: "BANDHAN BANK LIMITED",
         rolead: 22,
         assigned: 23,
         reassigned: 67,
         roconfirmation: 23,
         qc: 22,
         qchold: 99,
         inspection: 33,
         reject: 78,
         total: 102,
       },
       {
         company: "Ceutics Businesses Private Limited",
         rolead: 22,
         assigned: 23,
         reassigned: 67,
         roconfirmation: 23,
         qc: 22,
         qchold: 99,
         inspection: 33,
         reject: 78,
         total: 102,
       },
       {
         company: "CHOLAMANDALAM INVESTMENT AND FINANCE COMPANY LIMITED",
         rolead: 22,
         assigned: 23,
         reassigned: 67,
         roconfirmation: 23,
         qc: 22,
         qchold: 99,
         inspection: 33,
         reject: 78,
         total: 102,
       },
       {
         company: "Deccan Finance Limited",
         rolead: 22,
         assigned: 23,
         reassigned: 67,
         roconfirmation: 23,
         qc: 22,
         qchold: 99,
         inspection: 33,
         reject: 78,
         total: 102,
       },
       {
         company: "Equitas Small Finance Bank Ltd",
         rolead: 22,
         assigned: 23,
         reassigned: 67,
         roconfirmation: 23,
         qc: 22,
         qchold: 99,
         inspection: 33,
         reject: 78,
         total: 102,
       },
       {
         company: "HDB Financial Services Limited",
         rolead: 22,
         assigned: 23,
         reassigned: 67,
         roconfirmation: 23,
         qc: 22,
         qchold: 99,
         inspection: 33,
         reject: 78,
         total: 102,
       },
     ],
     []
   );

  //  vehicle data starts
const vehicledata = React.useMemo(
  () => [
    {
      vehicletype: "Procurement	",
      rolead: 28,
      assigned: 23,
      reassigned: 67,
      roconfirmation: 23,
      qc: 22,
      qchold: 99,
      inspection: 33,
      reject: 78,
      total: 102,
    },
    {
      vehicletype: "Repo	",
      rolead: 28,
      assigned: 23,
      reassigned: 67,
      roconfirmation: 23,
      qc: 22,
      qchold: 99,
      inspection: 33,
      reject: 78,
      total: 102,
    },
    {
      vehicletype: "Retail	",
      rolead: 28,
      assigned: 23,
      reassigned: 67,
      roconfirmation: 23,
      qc: 22,
      qchold: 99,
      inspection: 33,
      reject: 78,
      total: 102,
    },
  ],
  []
);

  // vehicle data end

   const columns = React.useMemo(
     () => [
       {
         Header: "Company",
         accessor: "company",
       },
       {
         Header: "RO Lead",
         accessor: "rolead",
       },
       {
         Header: "Assigned",
         accessor: "assigned",
       },
       {
         Header: "Reassigned",
         accessor: "reassigned",
       },
       {
         Header: "RO Confirmation",
         accessor: "roconfirmation",
       },
       {
         Header: "QC",
         accessor: "qc",
       },
       {
         Header: "QC Hold",
         accessor: "qchold",
       },
       {
         Header: "Inspection Completed",
         accessor: "inspection",
       },
       {
         Header: "Reject",
         accessor: "reject",
       },
       {
         Header: "Total",
         accessor: "total",
       },
      //  {
      //    Header: "Actions",
      //    id: "actions",
      //    Cell: ({ row }) => (
      //      <div className="d-flex gap-2">
      //        <MdVisibility
      //          style={{ cursor: "pointer" }}
      //          onClick={() => alert(`Viewing ${row.original.company}`)}
      //        />
      //        <MdEdit
      //          style={{ cursor: "pointer" }}
      //          onClick={() => alert(`Editing ${row.original.company}`)}
      //        />
      //        <MdDelete
      //          style={{ cursor: "pointer" }}
      //          onClick={() => alert(`Deleting ${row.original.company}`)}
      //        />
      //      </div>
      //    ),
      //  },
     ],
     []
   );
  //  Vehicle type
  
const vehiclecolumns = React.useMemo(
  () => [
    {
      Header: "Vehicle Type",
      accessor: "vehicletype",
    },
    {
      Header: "RO Lead",
      accessor: "rolead",
    },
    {
      Header: "Assigned",
      accessor: "assigned",
    },
    {
      Header: "Reassigned",
      accessor: "reassigned",
    },
    {
      Header: "RO Confirmation",
      accessor: "roconfirmation",
    },
    {
      Header: "QC",
      accessor: "qc",
    },
    {
      Header: "QC Hold",
      accessor: "qchold",
    },
    {
      Header: "Inspection Completed",
      accessor: "inspection",
    },
    {
      Header: "Reject",
      accessor: "reject",
    },
    {
      Header: "Total",
      accessor: "total",
    },
  ],
  []
);
  // vehicle type
    const navigate = useNavigate();
    const dispatch = useDispatch();
      const { users, posts, loading, error } = useSelector((state) => state.users);
   useEffect(() => {
         dispatch(fetchUsers());
         dispatch(fetchPosts());
      }, [dispatch]);

      // if (loading) return  <PageSpinner/>;
      // if (error) return <p>Error: {error}</p>;
      
  return (
    // add title title="Dashboard"
    <div className="dashboard">
      <Page
        breadcrumbs={[{ name: "Dashboard", active: true }]}
     
      >
        <div>
          <h5>Welcome to John</h5>
        </div>
        <Col md={12} sm={12} xs={12} lg={12} className="mb-3">
          <Card inverse className="border-0 card_padding">
            <Row>
              <Col className="offset-md-3 align-self-center" md={4}>
                <Form.Select className="selective-field">
                  <option>Select Month</option>
                  <option value="1">Jan</option>
                  <option value="1">FEb</option>
                  <option value="1">March</option>
                  <option value="1">April</option>
                  <option value="1">May</option>
                  <option value="1">June</option>
                  <option value="1">July</option>
                  <option value="1">Aug</option>
                  <option value="1">Sept</option>
                  <option value="1">Oct</option>
                  <option value="1">Nov</option>
                  <option value="1">Dec</option>
                </Form.Select>
              </Col>
              <Col className="align-self-center" md={4}>
                <Form.Select className="selective-field">
                  <option>Select Year</option>
                  <option value="1">2025</option>
                  <option value="1">2024</option>
                  <option value="1">2023</option>
                  <option value="1">2023</option>
                  <option value="1">2021</option>
                  <option value="1">2020</option>
                  <option value="1">2019</option>
                  <option value="1">2018</option>
                  <option value="1">2017</option>
                  <option value="1">2016</option>
                  <option value="1">2015</option>
                </Form.Select>
              </Col>
              <Col className="text-right align-self-center" md={1}>
                <Button color="primary" className="text-white ">
                  Filter
                </Button>
              </Col>
            </Row>

            <div></div>
          </Card>
        </Col>
        <div className="py-2">
          <h6>Dashboard</h6>
        </div>
        <Row>
          <Col md={3} sm={6} xs={12} lg={3} className="mb-3">
            <Card inverse className="border-0 card_padding">
              <div>
                <h5 className="count text-black font_18">5</h5>
              </div>
              <div className="badge_position">
                <Badge className="font-weight-400 ro_lead">RO Lead</Badge>
              </div>
              <CardBody className="d-flex p-0">
                <div>
                  <p className="text-black">Total RO-Leads</p>
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col md={3} sm={6} xs={12} lg={3} className="mb-3">
            <Card inverse className="border-0 card_padding">
              <div>
                <h5 className="count text-black font_18">24</h5>
              </div>
              <div className="badge_position">
                <Badge className="font-weight-400 assigned">Assigned</Badge>
              </div>
              <CardBody className="d-flex p-0">
                <div>
                  <p className="text-black">Total Assigned</p>
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col md={3} sm={6} xs={12} lg={3} className="mb-3">
            <Card inverse className="border-0 card_padding">
              <div>
                <h5 className="count text-black font_18">3</h5>
              </div>
              <div className="badge_position">
                <Badge className="font-weight-400 re-assigned">
                  Reassigned
                </Badge>
              </div>
              <CardBody className="d-flex p-0">
                <div>
                  <p className="text-black"> Total Reassigned</p>
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col md={3} sm={6} xs={12} lg={3} className="mb-3">
            <Card inverse className="border-0 card_padding">
              <div>
                <h5 className="count text-black font_18">13</h5>
              </div>
              <div className="badge_position">
                <Badge className="font-weight-400 re-assigned">
                  RO Confirmation
                </Badge>
              </div>
              <CardBody className="d-flex p-0">
                <div>
                  <p className="text-black">Total RO Confirmation</p>
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col md={3} sm={6} xs={12} lg={3} className="mb-3">
            <Card inverse className="border-0 card_padding">
              <div>
                <h5 className="count text-black font_18">0</h5>
              </div>
              <div className="badge_position">
                <Badge className="font-weight-400 qc">QC</Badge>
              </div>
              <CardBody className="d-flex p-0">
                <div>
                  <p className="text-black">Total QC</p>
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col md={3} sm={6} xs={12} lg={3} className="mb-3">
            <Card inverse className="border-0 card_padding">
              <div>
                <h5 className="count text-black font_18">0</h5>
              </div>
              <div className="badge_position ">
                <Badge className="font-weight-400 assigned">QC hold</Badge>
              </div>
              <CardBody className="d-flex p-0">
                <div>
                  <p className="text-black">Total QC-Hold</p>
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col md={3} sm={6} xs={12} lg={3} className="mb-3">
            <Card inverse className="border-0 card_padding">
              <div>
                <h5 className="count text-black font_18">55</h5>
              </div>
              <div className="badge_position">
                <Badge className="font-weight-400 ro_lead">
                  Inspection Completed
                </Badge>
              </div>
              <CardBody className="d-flex p-0">
                <div>
                  <p className="text-black">Total Inspection Completed</p>
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col md={3} sm={6} xs={12} lg={3} className="mb-3">
            <Card inverse className="border-0 card_padding">
              <div>
                <h5 className="count text-black font_18">0</h5>
              </div>
              <div className="badge_position">
                <Badge className="font-weight-400 rejected">Rejected</Badge>
              </div>
              <CardBody className="d-flex p-0">
                <div>
                  <p className="text-black">Total Rejected</p>
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col md={3} sm={6} xs={12} lg={3} className="mb-3">
            <Card inverse className="border-0 card_padding">
              <div>
                <h5 className="count text-black font_18">1234</h5>
              </div>
              <div className="badge_position">
                <Badge className="font-weight-400 re-assigned">Total</Badge>
              </div>
              <CardBody className="d-flex p-0">
                <div>
                  <p className="text-black">Total Leads</p>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
        {/* <div>
          <h2>Users List</h2>
          {loading ? <p>Loading</p> : <p> {error}</p>}
          <ul>
            {users.map((user) => (
              <li key={user.id}>
                {user.name} - {user.email}
              </li>
            ))}
          </ul>
        </div> */}
        <div className="tab_section my-3">
          <Tabs
            defaultActiveKey="client"
            id="tab_component"
            className="mb-3  border-bottom-0 "
          >
            <Tab eventKey="client" title="Client Count">
              <div className="overflow-hor-scroll">
                {/* <Clientcount /> */}
                <h5>Client Count</h5>
                {/* <Table /> */}
                <DataTable columns={columns} data={data} />
              </div>
            </Tab>
            <Tab eventKey="vehicle" title="Vehicle Type Count">
              <h5>Vehicle Type Count</h5>
              <DataTable columns={vehiclecolumns} data={vehicledata} />
            </Tab>
          </Tabs>
        </div>
      </Page>
    </div>
  );
};

export default Dashboard;
