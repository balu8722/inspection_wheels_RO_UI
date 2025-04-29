import React, { useEffect, useMemo, useState } from "react";
import Page from "../../../components/Page";
import { Button, Card, CardBody, Col, Form, Row,Badge } from "react-bootstrap";
import { CommonTable } from "../../../components/Table/CommonTable";
import { Link, useNavigate } from "react-router-dom";
import { FaEdit, FaSync, FaTrash, FaTrashAlt, FaUndo } from "react-icons/fa";
import CommanModel from "../../../components/CommanModel/CommanModel";
import { useDispatch } from "react-redux";
import { CONFIG_URL } from "../../../api/api.config";
import { PostRequestHook } from "../../../api/Services";
import { showNotification } from "../../../components/Notifications";

const ClientsList = () => {
  const navigate=useNavigate()
  const {getRequest}=PostRequestHook()
  const [showModel, setShowModel] = useState(false);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [pageNo, setPageNo] = useState(1);
  const [paginationData, setPaginantionData] = useState({});
  const [clientList, setClientList] = useState([]);


  useEffect(()=>{
    getClientList(rowsPerPage,pageNo)
  },[])

  const getClientList=async (rowsperpage=10,pageNo=1)=>{
   const URL = CONFIG_URL.GET_CLIENTS_LIST.replace(':rowperpage',rowsperpage).replace(':pgno',pageNo)
    const response = await getRequest(URL);
    if(response.status==200){
      let {list,...rest}=response.data
      console.log("list",list)
      setClientList(list)
      setPaginantionData(rest)
    }else{
      showNotification("error",response?.response?.data?.message||response?.data?.message)
    }
    
  }

    const columns = useMemo(
        () => [
            {
                Header: "Username",
                accessor: "username"
            },
            {
                Header: "Company Name",
                accessor: "company_name"
            },
            {
                Header: "Company Id",
                accessor: "emp_id"
            },
            {
                Header: "Contact Person",
                accessor: "contact_person_name"
            },
            {
                Header: "Email",
                accessor: "email"
            },
            {
                Header: "Phone number",
                accessor: "contact_no"
            },
            {
                Header: "Status",
                accessor: "status",
                Cell: ({ value }) => {
                  const isActive = value == 1;
                  return (
                    <button
                      className={`btn btn-sm text-white ${
                        isActive ? "btn-success" : "btn-danger"
                      }`}
                      disabled
                    >
                      {isActive ? "Active" : "Inactive"}
                    </button>
                  );
                },
            },
            {
                Header: "Actions",
                accessor: "actions",
                disableSortBy:true,
                Cell: ({ row }) => {
                  const { original } = row;
                  const { status } = original;
                  return(
                  <div className="d-flex justify-content-center gap-3">
                    <Button variant="transparent" className="p-0 m-0 border-0" size="sm" onClick={() => {
                      navigate("/addnewro?id=1")
                    }}>
                      <FaEdit title="Edit"  className="text-primary" />
                    </Button>
                    <Button variant="transparent" className="p-0 m-0 border-0" size="sm" onClick={() => {
                      setShowModel(true)
                    }}>
                      {status?<FaTrashAlt title="Delete" className="text-danger" />:<FaSync title="reactivate" className="text-primary" />}
                    </Button>
                  </div>
                )},
              },
        ], []
    );

    const handlePagination=(pageno)=>{
      getClientList(paginationData.rowsPerPage,pageno)
    }

    const handleManualSetPageSizeData=(pagesize)=>{
      setPaginantionData({...paginationData,rowsPerPage:pagesize})
      getClientList(pagesize,1)
    }
    
  return (
    <>
      <Page className={"dashboard mt-3"} title={'Client List'} breadcrumbs={[{name:"Home", active:false},{name:"clients", active:true}]}>
        
        <CommonTable propColumns={columns} propData={clientList} 
        isPagination={true}
        isManualPagination={true}
        manualPageSize={paginationData.rowsPerPage}
        manualSetPageSize={handleManualSetPageSizeData}
        paginationDetails={paginationData} gotoParticularPages={handlePagination}
        extraComponent={<>
            <Link to={"/addnewclient"} className="btn btn-outline-primary">Add Client</Link>
        </>} />
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
