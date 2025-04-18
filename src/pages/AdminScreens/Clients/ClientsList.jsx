import React, { useMemo, useState } from "react";
import Page from "../../../components/Page";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { Button, Card, CardBody, Col, Form, Row,Badge } from "react-bootstrap";
import { CommonTable } from "../../../components/Table/CommonTable";
import { Link, useNavigate } from "react-router-dom";
import { FaEdit, FaSync, FaTrash, FaTrashAlt, FaUndo } from "react-icons/fa";
import CommanModel from "../../../components/CommanModel/CommanModel";

const ClientsList = () => {
  const navigate = useNavigate();
  const [showModel, setShowModel] = useState(false);
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
                Cell: ({ row }) => {
                  const { original } = row;
                  const { isActive } = original;
                  console.log("isActive", isActive);
                  return(
                  <div className="d-flex justify-content-center gap-3">
                    {/* <div>
                      <Link to="/addnewro?id=1" className="text-primary"> <FaEdit /></Link>
                    </div> */}
                    <Button variant="transparent" className="p-0 m-0 border-0" size="sm" onClick={() => {
                      navigate("/addnewro?id=1")
                    }}>
                      <FaEdit title="Edit"  className="text-primary" />
                    </Button>
                    <Button variant="transparent" className="p-0 m-0 border-0" size="sm" onClick={() => {
                      setShowModel(true)
                    }}>
                      {isActive?<FaTrashAlt title="Delete" className="text-primary" />:<FaSync title="reactivate" className="text-primary" />}
                    </Button>
                  </div>
                )},
              },
        ], []
    );

    const _client_data=[
      { username: "Chola12", contactperson: "Lorem",company_name:"Chola", company_no: 8431604030, email: "test@gmail.com", phone: 7876787656,isActive:true},
      { username: "Bajaj12", contactperson: "John Doe",company_name:"Bajaj", company_no: 8431604031, email: "test2@gmail.com", phone: 5467587656,isActive:false},
    ]
    
  return (
    <>
      <Page className={"dashboard mt-3"} title={'Client List'} breadcrumbs={[{name:"Home", active:false},{name:"clients", active:true}]}>
        <div className="text-end mb-3">
            <Link to={"/addnewclient"} className="btn btn-outline-primary">Add Client</Link>
        </div>
        <CommonTable propColumns={columns} propData={_client_data} />
      </Page>
      <CommanModel 
        onClose={()=>setShowModel(false)}
        show={showModel}
        size="md"
        title="Delete Client"
        backdrop="static"
        buttontext="Delete"
        closebuttontext="Cancel"
        children={<>
        <div>
          <h5>Are you sure you want to delete this client?</h5>
          <div className="d-flex justify-content-end gap-3 mt-3">
            <Button variant="outline-primary" onClick={()=>setShowModel(false)}>Cancel</Button>
            <Button variant="outline-danger" onClick={()=>setShowModel(false)}>Delete</Button>
            </div>
        </div>
        </>}
      />
    </>
  );
};

export default ClientsList;
