import React, { useMemo, useState } from "react";
import Page from "../../../components/Page";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { Button, Card, CardBody, Col, Form, Row,Badge } from "react-bootstrap";
import { CommonTable } from "../../../components/Table/CommonTable";
import { Link } from "react-router-dom";
import { FaEdit } from "react-icons/fa";

const ClientsList = () => {
      const columns = useMemo(
        () => [
            {
                Header: "Username",
                accessor: "username"
            },
            {
                Header: "Comapny Name",
                accessor: "company_name"
            },
            {
                Header: "Company Id",
                accessor: "company_no"
            },
            {
                Header: "Contact Person",
                accessor: "contactperson"
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
      { username: "Chola12", contactperson: "Lorem",company_name:"Chola", company_no: 8431604030, email: "test@gmail.com", phone: 7876787656},
      { username: "Bajaj12", contactperson: "John Doe",company_name:"Bajaj", company_no: 8431604031, email: "test2@gmail.com", phone: 5467587656},
    ]
    
  return (
      <Page className={"dashboard mt-3"} title={'Client List'} breadcrumbs={[{name:"Home", active:false},{name:"clients", active:true}]}>
        <div className="text-end mb-3">
            <Link to={"/addnewclient"} className="btn btn-outline-primary">Add Client</Link>
        </div>
        <CommonTable propColumns={columns} propData={_client_data} />
      </Page>
  );
};

export default ClientsList;
