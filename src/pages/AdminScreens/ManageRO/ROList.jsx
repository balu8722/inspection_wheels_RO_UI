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
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

const ROList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { so, loading, error } = useSelector((state) => state.so);
  const [clientData, setClientData] = useState([]); // Local state for mapped data

  useEffect(() => {
    dispatch(fetchSOList()); // Fetch SO list
  }, [dispatch]);

  useEffect(() => {
    if (so?.data?.list) {
      // Map so.data.list to the desired structure
      const mappedData = so.data.list.map((item) => ({
        username: item.username,
        emp_name: item.emp_name,
        emp_no: item.emp_no,
        email: item.email,
        phone: item.phone,
        userstatus: item.userstatus,
      }));
      setClientData(mappedData); // Set the mapped data to local state
    }
  }, [so]);

  const columns = useMemo(
    () => [
      {
        Header: "Username",
        accessor: "username",
      },
      {
        Header: "Emp. Name",
        accessor: "emp_name",
      },
      {
        Header: "Emp. No.",
        accessor: "emp_no",
      },
      {
        Header: "Email",
        accessor: "email",
      },
      {
        Header: "Phone number",
        accessor: "phone",
      },
      {
        Header: "User status",
        accessor: "userstatus",
        Cell: ({ value }) => {

          console.log("value====",value);
          
          const status = value?.trim()?.toLowerCase(); // to handle extra spaces
          const isActive = status === "1";
          return (
            <button
              className={`btn btn-sm text-white ${isActive ? "btn-success" : "btn-danger"}`}
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
          const handleSelect = (action) => {
            console.log("actions", action);
          };

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
                  onClick={() => handleSelect("Lead Status")}
                >
                  <Link to="/addnewro?id=1"> Edit</Link>
                </Dropdown.Item>
                <Dropdown.Item
                  className="fontsize-14"
                  onClick={() => handleSelect("Allocate To Valuator")}
                >
                  Delete
                </Dropdown.Item>
                <Dropdown.Item
                  className="fontsize-14"
                  onClick={() => handleSelect("Decline Lead")}
                >
                  Active
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          );
        },
      },
    ],
    []
  );

  return (
    <Page
      className={"dashboard mt-3"}
      title={"Reasonal Officers"}
      breadcrumbs={[
        { name: "Home", active: false },
        { name: "SO", active: true },
      ]}
    >
      <div className="text-end mb-3">
        <Link to={"/addnewro"} className="btn btn-outline-primary">
          Add SO
        </Link>
      </div>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p className="text-danger">Error: {error}</p>
      ) : (
        <CommonTable propColumns={columns} propData={clientData} />
      )}
    </Page>
  );
};

export default ROList;
