import React, { useEffect, useMemo, useState } from "react";
import Page from "../../../components/Page";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { Button, Card, CardBody, Col, Form, Row, Badge } from "react-bootstrap";
import { CommonTable } from "../../../components/Table/CommonTable";
import { Link } from "react-router-dom";
import { FaEdit, FaSyncAlt, FaTrash } from "react-icons/fa";
import { MdMoreVert } from "react-icons/md";
import { Dropdown } from "react-bootstrap";
import { fetchSOList } from "../../../redux/slices/soSlice";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { CONFIG_URL } from "../../../api/api.config";
import { PostRequestHook } from "../../../api/Services";
import CommanModel from "../../../components/CommanModel/CommanModel";
import { showNotification } from "../../../components/Notifications";

const ROList = () => {
        const { getRequest, putRequest, deleteRequest } = PostRequestHook();
      const dispatch = useDispatch();
      const navigate = useNavigate();
       const [showModel, setShowModel] = useState(false);
      const [soList, setSOList] = useState([]);
      const [paginationData, setPaginantionData] = useState({});
       const [soDetails, setSODetails] = useState({})
       const [title, setitle] = useState(false);
     
  useEffect(()=>{
    getSOList(paginationData?.rowsPerPage||10,paginationData?.pageNo||1);
  },[])

    const getSOList=async (rowsperpage=10,pageNo=1)=>{
     const URL = CONFIG_URL.GET_RO_LIST.replace(":rowperpage",rowsperpage).replace(":pgno", pageNo);
      const response = await getRequest(URL);
      if(response.status==200){
        let {list,...rest}=response.data
        //  console.log("list",list)
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
                <Dropdown.Item className="fontsize-14 menu-option">
                  {isActive ? (
                    <>
                      <Link
                        className="dropdown-item"
                        to={`/addnewro?id=${row.original.id}`}
                      >
                        <FaEdit className="text-primary" /> Edit
                      </Link>
                    </>
                  ) : null}
                </Dropdown.Item>
                {isActive ? (
                  <Dropdown.Item
                    className="fontsize-14"
                    onClick={() => {
                      setShowModel(true);
                      setitle("Deactivate ");
                      setSODetails(row.original);
                    }}
                  >
                    <FaTrash className="text-secondary" /> Deactivate
                  </Dropdown.Item>
                ) : (
                  <Dropdown.Item
                    className="fontsize-14"
                    onClick={() => {
                      setShowModel(true);
                      setitle("Activate ");
                      setSODetails(row.original);
                    }}
                  >
                    <FaSyncAlt className="text-success" /> Active
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

  // 

   const handleActivationFunction = async (data) => {
          let url=data.status==1?CONFIG_URL.DEACTIVATE_SO_BY_ID:CONFIG_URL.ACTIVATE_SO_BY_ID;
          url = url.replace(":soId", data?.id);
          const response =data.status==1? await deleteRequest(url):await putRequest(url);
          if (response.status === 200 || response.status === 200) {
            showNotification( "success", response?.data?.message);
            getSOList(
              paginationData?.rowsPerPage || 10,
              paginationData?.pageNo || 1
            );
          } else {
            showNotification(
              "error",
              response?.response?.data?.message || response?.data?.message
            );
          }
        };
  return (
    <>
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
      <CommanModel
        onClose={() => setShowModel(false)}
        show={showModel}
        size="md"
        title={title + "Valuator"}
        backdrop="static"
        children={
          <>
            <div>
              <h6>Are you sure you want to {title} this valuator?</h6>
              <div className="d-flex justify-content-end gap-3 mt-3">
                <Button
                  variant="outline-primary"
                  onClick={() => setShowModel(false)}
                >
                  Cancel
                </Button>
                <Button
                  onClick={() => {
                    handleActivationFunction(soDetails);
                    setShowModel(false); // close modal after API call
                  }}
                  variant={`${
                    soDetails?.status == 1
                      ? "outline-danger"
                      : "outline-success"
                  }`}
                >
                  {title}
                </Button>
              </div>
            </div>
          </>
        }
      />
    </>
  );
};

export default ROList;
