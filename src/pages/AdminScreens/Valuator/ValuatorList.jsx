import React, { useMemo, useState } from "react";
import Page from "../../../components/Page";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { Button, Card, CardBody, Col, Form, Row,Badge } from "react-bootstrap";
import { CommonTable } from "../../../components/Table/CommonTable";
import { Link } from "react-router-dom";
import { FaEdit } from "react-icons/fa";

const ValuatorList = () => {
    const columns = useMemo(
            () => [
                {
                    Header: "Username",
                    accessor: "username"
                },
                {
                    Header: "Valuator Name",
                    accessor: "emp_name"
                },
                {
                    Header: "Valuator Id",
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
      <Page className={"dashboard mt-3"} title={'Valuators List'} breadcrumbs={[{name:"Home", active:false},{name:"valuators", active:true}]}>
        <div className="text-end mb-3">
            <Link to={"/addnewvaluator"} className="btn btn-outline-primary">Add Valuator</Link>
        </div>
        <CommonTable propColumns={columns} propData={_client_data} />
      </Page>
  );
};

export default ValuatorList;
