import React, { useMemo, useState } from "react";
import Page from "../../../components/Page";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { Button, Card, CardBody, Col, Form, Row,Badge } from "react-bootstrap";
import { CommonTable } from "../../../components/Table/CommonTable";
import { Link } from "react-router-dom";
import { FaEdit } from "react-icons/fa";

const ROList = () => {
      const columns = useMemo(
        () => [
            {
                Header: "Username",
                accessor: "username"
            },
            {
                Header: "Emp. Name",
                accessor: "emp_name"
            },
            {
                Header: "Emp. No.",
                accessor: "emp_no"
            },
            {
                Header: "Email",
                accessor: "email"
            },
            {
                Header: "Phone number",
                accessor: "phone"
            },
            {
                Header: "Actions",
                accessor: "actions",
                disableSortBy:true,
                Cell: ({ row }) => (
                  <div className="d-flex justify-content-center gap-2">
                    <Link to="/addnewro?id=1"> <FaEdit /></Link>
                    {/* <Button variant="transparent" size="sm" onClick={() => {}}>
                      <FaEdit />
                    </Button> */}
                    {/* <Button variant="transparent" size="sm" onClick={() => {}}>
                      <FaTrash />
                    </Button> */}
                  </div>
                ),
              },
        ], []
    );

    const _client_data=[
      { username: "ajvaluesadmin", emp_name: "Lorem", emp_no: 8431604030, email: "test@gmail.com", phone: 7876787656},
      { username: "johndoe", emp_name: "John Doe", emp_no: 8431604031, email: "test2@gmail.com", phone: 5467587656},
    ]
    
  return (
      <Page className={"dashboard mt-3"} title={'Reasonal Officers'} breadcrumbs={[{name:"Home", active:false},{name:"RO", active:true}]}>
        <div className="text-end mb-3">
            <Link to={"/addnewro"} className="btn btn-outline-primary">Add RO</Link>
        </div>
        <CommonTable propColumns={columns} propData={_client_data} />
        {/* <div>
          <h3 className="mb-3">Welcome to Inspection Wheels</h3>
        </div> */}
        {/* <div className="bg-white p-3 rounded">
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
                <Form.Select value={year} onChange={(e) => setYear(e.target.value)}>
                  {years.map((y) => (
                    <option key={y} value={y}>{y}</option>
                  ))}
                </Form.Select>
              </Col>

              <Col xs={12} sm={4} md={2}>
                <Button 
                  className="w-100 text-white" 
                  style={{ backgroundColor: '#5c6ac4', borderColor: '#5c6ac4' }}
                  onClick={handleFilter}
                >
                  Filter
                </Button>
              </Col>
            </Row>
          </Form>
        </div> */}
        {/* <div className="py-2 mt-3">
          <h5>Dashboard</h5>
        </div> */}
        {/* <Row>
          {counts.map((item,i)=>{
            return  <Col md={4} sm={6} xs={12} lg={3} className="mb-3">
            <Card inverse className="border-0 card_padding">
            <div className="text-end">
                <Badge className={`font-weight-400 ${item.status_bgclass}`}>{item.status}</Badge>
              </div>
              <div>
                <h5 className="count text-black font_18"><strong>{item.count}</strong></h5>
              </div>
              
              <CardBody className="d-flex p-0">
                <div>
                  <p className="text-black mb-0">{item.name}</p>
                </div>
              </CardBody>
            </Card>
          </Col>
          })}
        </Row>
         */}
      </Page>
  );
};

export default ROList;
