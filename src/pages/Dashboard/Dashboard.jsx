import Page from "../../components/Page";
import React from "react";
import "./Dashboard.scss";
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
import Badge from "react-bootstrap/Badge";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers, fetchPosts } from "../../redux/slices/usersSlice";
import { useNavigate } from "react-router-dom";
import PageSpinner from "../../components/PageSpinner";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Clientcount from "./ClientCount/ClientCount"
import Table from "../../components/Table/Table"

const Dashboard = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
      const { users, posts, loading, error } = useSelector((state) => state.users);
   useEffect(() => {
         dispatch(fetchUsers());
         dispatch(fetchPosts());
      }, [dispatch]);

      if (loading) return  <PageSpinner/>;
      if (error) return <p>Error: {error}</p>;
  return (
    // add title title="Dashboard"
    <div className="dashboard">
      <Page breadcrumbs={[{ name: "Dashboard", active: true }]}>
        <div>
          <h5>Welcome to John</h5>
        </div>
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
                <Table />
              </div>
            </Tab>
            <Tab eventKey="vehicle" title="Vehicle Type Count">
               <h5>Vehicle Type Count</h5>
              {/* <Table /> */}
            </Tab>
          </Tabs>
        </div>
      </Page>
    </div>
  );
};

export default Dashboard;
