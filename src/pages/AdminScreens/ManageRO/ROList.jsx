import React, { useEffect, useMemo, useState } from "react";
import Page from "../../../components/Page";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { Button, Card, CardBody, Col, Form, Row, Badge } from "react-bootstrap";
import { CommonTable } from "../../../components/Table/CommonTable";
import { Link } from "react-router-dom";
import { FaEdit } from "react-icons/fa";
import { MdMoreVert } from "react-icons/md";
import { Dropdown } from "react-bootstrap";
import { fetchSOList } from "../../../redux/slices/soSlice";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { CONFIG_URL } from "../../../api/api.config";
import { PostRequestHook } from "../../../api/Services";

const ROList = () => {
      const {getRequest}=PostRequestHook()
      const dispatch = useDispatch();
      const navigate = useNavigate();
      const [soList, setSOList] = useState([]);
      const [paginationData, setPaginantionData] = useState({});
      // const [rowsPerPage, setRowsPerPage] = useState(10);
      // const [pageNo, setPageNo] = useState(1);


  useEffect(()=>{
    getSOList(paginationData?.rowsPerPage||10,paginationData?.pageNo||1);
  },[])

    const getSOList=async (rowsperpage=10,pageNo=1)=>{
     const URL = CONFIG_URL.GET_RO_LIST.replace(":rowperpage",rowsperpage).replace(":pgno", pageNo);
      const response = await getRequest(URL);
      if(response.status==200){
        let {list,...rest}=response.data
        console.log("list",list)
         setSOList(list);
        setPaginantionData(rest)
      }else{
        showNotification("error",response?.response?.data?.message||response?.data?.message)
      }
      
    }

  const columns = useMemo(
    () => [
      {
        Header: "Username",
        accessor: "username",
      },
      {
        Header: "Emp. Name",
        accessor: "name",
      },
      {
        Header: "Emp. No.",
        accessor: "emp_id",
      },
      {
        Header: "Email",
        accessor: "email",
      },
      {
        Header: "Phone number",
        accessor: "contact_no",
      },
      {
        Header: "User status",
        accessor: "status",
        Cell: ({ row }) => {
          const isActive = row.original.status == "1";
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
        id: "actions",
        Cell: ({ row }) => {
          const isActive = row.original.status == "1";
          return (
            <Dropdown>
              <Dropdown.Toggle
                variant="light"
                className="p-1 border-0 shadow-none three_dots"
                id="dropdown-basic"
              >
                <MdMoreVert />
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item
                  className="fontsize-14"
                >
                 
                  <Link
                    className="dropdown-item"
                    to={`/addnewro?id=${row.original.id}`}
                  >
                    Edit
                  </Link>
                </Dropdown.Item>
                {isActive ? (
                  <Dropdown.Item
                    className="fontsize-14"
                  
                  >
                    Deactive
                  </Dropdown.Item>
                ) : (
                  <Dropdown.Item
                    className="fontsize-14"
                    // onClick={() => handleSelect("Decline Lead")}
                  >
                    Active
                  </Dropdown.Item>
                )}
              </Dropdown.Menu>
            </Dropdown>
          );
        },
      },
    ],
    []
  );
  const handlePagination = (pageno) => {
    getSOList(paginationData.rowsPerPage, pageno);
  };

  const handleManualSetPageSizeData = (pagesize) => {
    setPaginantionData({ ...paginationData, rowsPerPage: pagesize });
    getSOList(pagesize, 1);
  };
  return (
    <Page
      className={"dashboard mt-3"}
      title={"Sub Officers"}
      breadcrumbs={[
        { name: "Home", active: false },
        { name: "Sub Officers", active: true },
      ]}
    >
      <CommonTable
        propColumns={columns}
        propData={soList}
        isPagination={true}
        isManualPagination={true}
        manualPageSize={paginationData.rowsPerPage}
        manualSetPageSize={handleManualSetPageSizeData}
        paginationDetails={paginationData}
        gotoParticularPages={handlePagination}
        extraComponent={
          <>
            <Link to={"/addnewro"} className="btn btn-outline-primary">
              Add SO
            </Link>
          </>
        }
      />
      {/* )} */}
    </Page>
  );
};

export default ROList;
