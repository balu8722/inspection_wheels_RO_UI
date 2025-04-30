import React, { useMemo, useState, useEffect } from "react";
import Page from "../../../components/Page";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { Button, Card, CardBody, Col, Form, Row,Badge } from "react-bootstrap";
import { CommonTable } from "../../../components/Table/CommonTable";
import { Link } from "react-router-dom";
import { FaEdit, FaSyncAlt, FaTrash } from "react-icons/fa";
import { Dropdown } from "react-bootstrap";
import { MdMoreVert } from "react-icons/md";
import { PostRequestHook } from "../../../api/Services";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { CONFIG_URL } from "../../../api/api.config";
import CommanModel from "../../../components/CommanModel/CommanModel";
import { showNotification } from "../../../components/Notifications";

const ValuatorList = () => {
       const { getRequest, putRequest, deleteRequest } = PostRequestHook();
       const dispatch = useDispatch();
       const navigate = useNavigate();
       const [paginationData, setPaginantionData] = useState({});
      const [valuatorList, setValuatorList] = useState([]);
        const [showModel, setShowModel] = useState(false);
        const [title, setitle] = useState(false);
        const [valuatorDetails, setValuatorDetails] = useState({})

    useEffect(()=>{
        getValuatorList(paginationData?.rowsPerPage||10,paginationData?.pageNo||1);
      },[])

    const getValuatorList = async (rowsperpage = 10, pageNo = 1) => {
      const URL = CONFIG_URL.GET_VALUATOR_LIST.replace(
        ":rowperpage",
        rowsperpage
      ).replace(":pgno", pageNo);
      const response = await getRequest(URL);
      if (response.status == 200) {
        let { list, ...rest } = response.data;
        // console.log("list", list);
        setValuatorList(list);
        setPaginantionData(rest);
      } else {
        showNotification(
          "error",
          response?.response?.data?.message || response?.data?.message
        );
      }
    };

    const columns = useMemo(
      () => [
        {
          Header: "Username",
          accessor: "username",
        },
        {
          Header: "Valuator Name",
          accessor: "name",
        },
        {
          Header: "Valuator Id",
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
            // console.log("");
            
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
            // console.log("==id=", row.original.id);
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
                          to={`/addnewvaluator?id=${row.original.id}`}
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
                        setValuatorDetails(row.original);
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
                        setValuatorDetails(row.original);
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
        getValuatorList(paginationData.rowsPerPage, pageno);
      };

      const handleManualSetPageSizeData = (pagesize) => {
        setPaginantionData({ ...paginationData, rowsPerPage: pagesize });
        getValuatorList(pagesize, 1);
      };

      // DEACTIVATE
      const handleActivationFunction = async (data) => {
        let url=data.status==1?CONFIG_URL.DEACTIVATE_VALUATOR_BY_ID:CONFIG_URL.ACTIVATE_VALUATOR_BY_ID;
        url=url.replace(":valuatorId",data?.id)
        const response =data.status==1? await deleteRequest(url):await putRequest(url);
        if (response.status === 200 || response.status === 200) {
          showNotification( "success", response?.data?.message);
          getValuatorList(
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
        title={"Valuators List"}
        breadcrumbs={[
          { name: "Home", active: false },
          { name: "valuators", active: true },
        ]}
      >
        <div className="text-end mb-3">
          <Link to={"/addnewvaluator"} className="btn btn-outline-primary">
            Add Valuator
          </Link>
        </div>
        <CommonTable
          propColumns={columns}
          propData={valuatorList}
          isPagination={true}
          isManualPagination={true}
          manualPageSize={paginationData.rowsPerPage}
          manualSetPageSize={handleManualSetPageSizeData}
          paginationDetails={paginationData}
          gotoParticularPages={handlePagination}
        />
      </Page>
      {/* MODAL */}
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
                    handleActivationFunction(valuatorDetails);
                    setShowModel(false); // close modal after API call
                  }}
                  variant={`${valuatorDetails?.status==1?"outline-danger":"outline-success"}`}
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

export default ValuatorList;
