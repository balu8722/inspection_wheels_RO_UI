import React, { useMemo, useState } from "react";
import Page from "../../components/Page";
import "./Dashboard.scss";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Clientcount from "./ClientCount/ClientCount"
// import Table from "../../components/Table/Table"
import { Button, Card, CardBody, Col, Form, Row,Badge } from "react-bootstrap";
import { CommonTable } from "../../components/Table/CommonTable";
import { useSelector } from "react-redux";

const Dashboard = () => {
  const {userdata}=useSelector(state=>state.users)
  let role=userdata?.role?userdata?.role:"";

      const currentDate = new Date();
      let _month= new Intl.DateTimeFormat('en-US', { month: 'long' }).format(currentDate)

      const [month, setMonth] = useState(_month);
      const [year, setYear] = useState(currentDate.getFullYear());

      const counts=[{count:1,status:"RO Lead",name:"Total RO-Leads",status_bgclass:"ro_lead"},
        {count:15,status:"Assigned",name:"Total Assigned",status_bgclass:"assigned"},
        {count:2,status:"Reassigned",name:"Total Reassigned",status_bgclass:"re-assigned"},
        {count:2,status:"RO Confirmation",name:"Total RO Confirmation",status_bgclass:"re-assigned"},
        {count:0,status:"QC",name:"Total QC",status_bgclass:"ro_lead"},
        {count:0,status:"QC Hold",name:"Total QC-Hold",status_bgclass:"assigned"},
        {count:115,status:"Inspection Completed",name:"Total Inspection Completed",status_bgclass:"ro_lead"},
        {count:6,status:"Reject",name:"Total Reject",status_bgclass:"rejected"},
        {count:142,status:"Total",name:"Total Leads",status_bgclass:"ro_lead"}
      ]

      const adminCounts=[
        {count:17,name:"Total Users",status_bgclass:"assigned"},
        {count:2,name:"TOTAL RO's",status_bgclass:"re-assigned"},
        {count:10,name:"TOTAL CLIENTS",status_bgclass:"ro_lead"},
        {count:5,name:"TOTAL VALUATOR",status_bgclass:"re-assigned"},
        {count:1,status:"RO Lead",name:"Total RO-Leads",status_bgclass:"ro_lead"},
        {count:15,status:"Assigned",name:"Total Assigned",status_bgclass:"assigned"},
        {count:2,status:"Reassigned",name:"Total Reassigned",status_bgclass:"re-assigned"},
        {count:2,status:"RO Confirmation",name:"Total RO Confirmation",status_bgclass:"re-assigned"},
        {count:0,status:"QC",name:"Total QC",status_bgclass:"ro_lead"},
        {count:0,status:"QC Hold",name:"Total QC-Hold",status_bgclass:"assigned"},
        {count:115,status:"Inspection Completed",name:"Total Inspection Completed",status_bgclass:"ro_lead"},
        {count:6,status:"Reject",name:"Total Reject",status_bgclass:"rejected"},
        {count:142,status:"Total",name:"Total Leads",status_bgclass:"ro_lead"}
      ]

    
    
      const handleFilter = () => {
        console.log(`Filtering for ${month}, ${year}`);
      };
    
      const months = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
      ];
    
      const currentYear = currentDate.getFullYear();
      const years = Array.from({ length: currentYear - 2010 + 1 }, (_, i) => currentYear - i);

      const columns = useMemo(
        () => [
            {
                Header: "Company",
                accessor: "company"
            },
            {
                Header: "Ro Lead",
                accessor: "rolead"
            },
            {
                Header: "Assigned",
                accessor: "assigned"
            },
            {
                Header: "Reassigned",
                accessor: "reassigned"
            },
            {
                Header: "RO Confirmation",
                accessor: "roconfirmation"
            },
            {
                Header: "QC",
                accessor: "qc"
            },
            {
                Header: "QC Hold",
                accessor: "qchold"
            },
            {
                Header: "Inspection Completed",
                accessor: "insecptioncompleted"
            },
            {
                Header: "Reject",
                accessor: "reject"
            },
            {
                Header: "Total",
                accessor: "total"
            },
        ], []
    );

    const _client_data=[
      { company: "Chola", rolead: 28, assigned: 23, reassigned: 67, roconfirmation: 22, qc: 12, qchold: 33, insecptioncompleted: 55, reject: 12, total: 102 },
      { company: "Bajaj", rolead: 22, assigned: 23, reassigned: 67, roconfirmation: 22, qc: 12, qchold: 33, insecptioncompleted: 55, reject: 12, total: 102 },
      { company: "ICICI", rolead: 35, assigned: 23, reassigned: 67, roconfirmation: 22, qc: 12, qchold: 33, insecptioncompleted: 55, reject: 12, total: 102 },
      { company: "Kormadana", rolead: 31, assigned: 23, reassigned: 67, roconfirmation: 22, qc: 12, qchold: 33, insecptioncompleted: 55, reject: 12, total: 102 },
      { company: "hdcf", rolead: 26, assigned: 23, reassigned: 67, roconfirmation: 22, qc: 12, qchold: 33, insecptioncompleted: 55, reject: 12, total: 102 },
      { company: "katnataka", rolead: 29, assigned: 23, reassigned: 67, roconfirmation: 22, qc: 12, qchold: 33, insecptioncompleted: 55, reject: 12, total: 102 },
      { company: "BOB", rolead: 40, assigned: 23, reassigned: 67, roconfirmation: 22, qc: 12, qchold: 33, insecptioncompleted: 55, reject: 12, total: 102 },
    ]

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
    
  return (
    // add title title="Dashboard"
    <div className="dashboard mt-3">
      <Page>
        <div>
          <h3 className="mb-3">Welcome to {role=="Admin"?"Admin":"RO"}</h3>
        </div>
        <div className="bg-white p-3 rounded">
          <Form>
            <Row className="align-items-end justify-content-end g-3">
              <Col xs={12} sm={4} md={3}>
                <Form.Label>Month</Form.Label>
                  <Form.Select value={month} onChange={(e) => setMonth(e.target.value)}>
                    {months.map((m) => (
                      <option key={m} value={m}>{m}</option>
                    ))}
                  </Form.Select>
              </Col>

              <Col xs={12} sm={4} md={3}>
                <Form.Label>Year</Form.Label>
                <Form.Select
                  value={year}
                  onChange={(e) => setYear(e.target.value)}
                >
                  {years.map((y) => (
                    <option key={y} value={y}>
                      {y}
                    </option>
                  ))}
                </Form.Select>
              </Col>

              <Col xs={12} sm={4} md={2}>
                <Button
                  className="w-100 text-white"
                  style={{ backgroundColor: "#5c6ac4", borderColor: "#5c6ac4" }}
                  onClick={handleFilter}
                >
                  Filter
                </Button>
              </Col>
            </Row>
          </Form>
        </div>
        <div className="py-2 mt-3">
          <h5>Dashboard</h5>
        </div>
        <Row>
          {(role=="Admin"?adminCounts:counts).map((item, i) => {
            return (
              <Col key={i} md={4} sm={6} xs={12} lg={3} className="mb-3">
                <Card inverse className="border-0 card_padding">
                 {item.status && <div className="text-end">
                    <Badge className={`font-weight-400 ${item.status_bgclass}`}>
                      {item.status}
                    </Badge>
                  </div>}
                  <div>
                    <h5 className="count text-black font_18">
                      <strong>{item.count}</strong>
                    </h5>
                  </div>

                  <CardBody className="d-flex p-0">
                    <div>
                      <p className="text-black mb-0">{item.name}</p>
                    </div>
                  </CardBody>
                </Card>
              </Col>
            );
          })}
        </Row>

        {role=="RO" &&<div className="tab_section mt-4 my-3">
          <Tabs defaultActiveKey="client" id="tab_component" className="mb-3">
            <Tab eventKey="client" title="Client Count">
              <div className="overflow-hor-scroll">
                {/* <Clientcount /> */}
                <h5>Client Count</h5>
                <CommonTable propColumns={columns} propData={_client_data} />
                {/* <Table /> */}
              </div>
            </Tab>
            <Tab eventKey="vehicle" title="Vehicle Type Count">
              <h5>Vehicle Type Count</h5>
              {/* <DataTable columns={vehiclecolumns} data={vehicledata} /> */}
              <CommonTable
                propColumns={vehiclecolumns}
                propData={vehicledata}
              />
            </Tab>
          </Tabs>
        </div>}
      </Page>
    </div>
  );
};

export default Dashboard;
