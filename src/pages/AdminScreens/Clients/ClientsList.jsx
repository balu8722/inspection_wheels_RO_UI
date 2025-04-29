import React, { useEffect, useMemo, useState } from "react";
import Page from "../../../components/Page";
import { Button } from "react-bootstrap";
import { CommonTable } from "../../../components/Table/CommonTable";
import { Link, useNavigate } from "react-router-dom";
import { FaEdit, FaSync,  FaTrashAlt } from "react-icons/fa";
import CommanModel from "../../../components/CommanModel/CommanModel";
import { CONFIG_URL } from "../../../api/api.config";
import { PostRequestHook } from "../../../api/Services";
import { showNotification } from "../../../components/Notifications";

const ClientsList = () => {
  const navigate=useNavigate()
  const {getRequest,deleteRequest,putRequest}=PostRequestHook()
  const [showModel, setShowModel] = useState(false);
  const [paginationData, setPaginantionData] = useState({});
  const [clientList, setClientList] = useState([]);
  const [deleteData, setDeleteData] = useState({});


  useEffect(()=>{
    getClientList(paginationData?.rowsPerPage||10,paginationData?.pageNo||1)
  },[])

  
  // table columns
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
                    {status==1 &&<Button variant="transparent" className="p-0 m-0 border-0" size="sm" onClick={() => {
                      navigate(`/addnewclient?id=${original.id}`)
                    }}>
                      <FaEdit title="Edit"  className="text-primary" />
                    </Button>}
                    <Button variant="transparent" className="p-0 m-0 border-0" size="sm" onClick={() => {
                      setDeleteData(original)
                      setShowModel(true)
                    }}>
                      {status?<FaTrashAlt title="Deactivate" className="text-danger" />:<FaSync title="Reactivate" className="text-success" />}
                    </Button>
                  </div>
                )},
              },
        ], []
    );

    let _data=[
      {
          "id": 9,
          "contact_person_name": "Chola manager",
          "emp_id": "IWCLT00007",
          "email": "chola@gmail.com",
          "contact_no": 7887877823,
          "secondary_contact_no": null,
          "username": "cholafinance",
          "lastPasswordUpdated": "2025-04-29T14:37:12.000Z",
          "pincode": null,
          "state": null,
          "city": null,
          "area": null,
          "address": null,
          "profile_image": null,
          "gender": null,
          "dob": null,
          "vehicletypes": "4",
          "createdBy": "1",
          "updatedBy": null,
          "createdAt": "2025-04-29T14:37:12.000Z",
          "updatedAt": null,
          "status": 1,
          "company_name": "chola finance"
      },
      {
          "id": 8,
          "contact_person_name": "Dinga Mehta",
          "emp_id": "IWCLT00006",
          "email": "dinga3@dingdong.com",
          "contact_no": 7123456789,
          "secondary_contact_no": null,
          "username": "dingi2finance",
          "lastPasswordUpdated": "2025-04-29T07:06:33.000Z",
          "pincode": "380015",
          "state": "Gujarat",
          "city": "Ahmedabad",
          "area": "22/B Industrial Park",
          "address": "MG Road",
          "profile_image": null,
          "gender": null,
          "dob": null,
          "vehicletypes": "2",
          "createdBy": "4",
          "updatedBy": null,
          "createdAt": "2025-04-29T07:06:33.000Z",
          "updatedAt": null,
          "status": 1,
          "company_name": "   "
      },
      {
          "id": 7,
          "contact_person_name": "Dinga Mehta",
          "emp_id": "IWCLT00005",
          "email": "prajwalg497@gmail.com",
          "contact_no": 8432123212,
          "secondary_contact_no": null,
          "username": "dingtyufinance",
          "lastPasswordUpdated": "2025-04-29T07:04:17.000Z",
          "pincode": "380015",
          "state": "Gujarat",
          "city": "Ahmedabad",
          "area": "22/B Industrial Park",
          "address": "MG Road",
          "profile_image": null,
          "gender": null,
          "dob": null,
          "vehicletypes": "2",
          "createdBy": "1",
          "updatedBy": "4",
          "createdAt": "2025-04-29T07:04:17.000Z",
          "updatedAt": "2025-04-29T08:36:03.000Z",
          "status": 1,
          "company_name": "Pingpong Finance Ltd."
      },
      {
          "id": 6,
          "contact_person_name": "Manga Mehta",
          "emp_id": "IWCLT00004",
          "email": "pajjugarasangi@gmail.com",
          "contact_no": 8123456489,
          "secondary_contact_no": null,
          "username": "dingi1finance",
          "lastPasswordUpdated": "2025-04-29T06:49:11.000Z",
          "pincode": "380015",
          "state": "Gujarat",
          "city": "Ahmedabad",
          "area": "22/B Industrial Park",
          "address": "MG Road",
          "profile_image": null,
          "gender": null,
          "dob": null,
          "vehicletypes": "2",
          "createdBy": "4",
          "updatedBy": "1",
          "createdAt": "2025-04-29T06:49:11.000Z",
          "updatedAt": "2025-04-29T15:04:07.000Z",
          "status": 0,
          "company_name": "Pingpong Finance Ltd."
      },
      {
          "id": 5,
          "contact_person_name": "Dinga Mehta",
          "emp_id": "IWCLT00003",
          "email": "dinga1@dingdong.com",
          "contact_no": 8123456789,
          "secondary_contact_no": null,
          "username": "dingifinance",
          "lastPasswordUpdated": "2025-04-29T06:44:32.000Z",
          "pincode": null,
          "state": null,
          "city": null,
          "area": null,
          "address": null,
          "profile_image": null,
          "gender": null,
          "dob": null,
          "vehicletypes": "2",
          "createdBy": "4",
          "updatedBy": null,
          "createdAt": "2025-04-29T06:44:32.000Z",
          "updatedAt": null,
          "status": 1,
          "company_name": "   "
      },
      {
          "id": 4,
          "contact_person_name": "Manga Mehta",
          "emp_id": "IWCLT00002",
          "email": "pajjugaraangi@gmail.com",
          "contact_no": 8123436789,
          "secondary_contact_no": null,
          "username": "dingafinance",
          "lastPasswordUpdated": "2025-04-29T06:33:04.000Z",
          "pincode": "380015",
          "state": "Gujarat",
          "city": "Ahmedabad",
          "area": "22/B Industrial Park",
          "address": "MG Road",
          "profile_image": null,
          "gender": null,
          "dob": null,
          "vehicletypes": "4",
          "createdBy": "4",
          "updatedBy": "1",
          "createdAt": "2025-04-29T06:33:04.000Z",
          "updatedAt": "2025-04-29T15:09:39.000Z",
          "status": 1,
          "company_name": "Dingadong finance Ltd."
      },
      {
          "id": 1,
          "contact_person_name": "BaluFinance",
          "emp_id": "IWCLT00001",
          "email": "balakrishnasrg@gmail.com",
          "contact_no": 8798789874,
          "secondary_contact_no": null,
          "username": "balufinance",
          "lastPasswordUpdated": "2025-04-25T07:30:45.000Z",
          "pincode": null,
          "state": null,
          "city": null,
          "area": null,
          "address": null,
          "profile_image": null,
          "gender": null,
          "dob": null,
          "vehicletypes": "2",
          "createdBy": "1",
          "updatedBy": null,
          "createdAt": "2025-04-25T07:30:45.000Z",
          "updatedAt": null,
          "status": 1,
          "company_name": null
      },
      {
        "id": 9,
        "contact_person_name": "Chola manager",
        "emp_id": "IWCLT00007",
        "email": "chola@gmail.com",
        "contact_no": 7887877823,
        "secondary_contact_no": null,
        "username": "cholafinance",
        "lastPasswordUpdated": "2025-04-29T14:37:12.000Z",
        "pincode": null,
        "state": null,
        "city": null,
        "area": null,
        "address": null,
        "profile_image": null,
        "gender": null,
        "dob": null,
        "vehicletypes": "4",
        "createdBy": "1",
        "updatedBy": null,
        "createdAt": "2025-04-29T14:37:12.000Z",
        "updatedAt": null,
        "status": 1,
        "company_name": "chola finance"
    },
    {
        "id": 8,
        "contact_person_name": "Dinga Mehta",
        "emp_id": "IWCLT00006",
        "email": "dinga3@dingdong.com",
        "contact_no": 7123456789,
        "secondary_contact_no": null,
        "username": "dingi2finance",
        "lastPasswordUpdated": "2025-04-29T07:06:33.000Z",
        "pincode": "380015",
        "state": "Gujarat",
        "city": "Ahmedabad",
        "area": "22/B Industrial Park",
        "address": "MG Road",
        "profile_image": null,
        "gender": null,
        "dob": null,
        "vehicletypes": "2",
        "createdBy": "4",
        "updatedBy": null,
        "createdAt": "2025-04-29T07:06:33.000Z",
        "updatedAt": null,
        "status": 1,
        "company_name": "   "
    },
    {
        "id": 7,
        "contact_person_name": "Dinga Mehta",
        "emp_id": "IWCLT00005",
        "email": "prajwalg497@gmail.com",
        "contact_no": 8432123212,
        "secondary_contact_no": null,
        "username": "dingtyufinance",
        "lastPasswordUpdated": "2025-04-29T07:04:17.000Z",
        "pincode": "380015",
        "state": "Gujarat",
        "city": "Ahmedabad",
        "area": "22/B Industrial Park",
        "address": "MG Road",
        "profile_image": null,
        "gender": null,
        "dob": null,
        "vehicletypes": "2",
        "createdBy": "1",
        "updatedBy": "4",
        "createdAt": "2025-04-29T07:04:17.000Z",
        "updatedAt": "2025-04-29T08:36:03.000Z",
        "status": 1,
        "company_name": "Pingpong Finance Ltd."
    },
    {
        "id": 6,
        "contact_person_name": "Manga Mehta",
        "emp_id": "IWCLT00004",
        "email": "pajjugarasangi@gmail.com",
        "contact_no": 8123456489,
        "secondary_contact_no": null,
        "username": "dingi1finance",
        "lastPasswordUpdated": "2025-04-29T06:49:11.000Z",
        "pincode": "380015",
        "state": "Gujarat",
        "city": "Ahmedabad",
        "area": "22/B Industrial Park",
        "address": "MG Road",
        "profile_image": null,
        "gender": null,
        "dob": null,
        "vehicletypes": "2",
        "createdBy": "4",
        "updatedBy": "1",
        "createdAt": "2025-04-29T06:49:11.000Z",
        "updatedAt": "2025-04-29T15:04:07.000Z",
        "status": 0,
        "company_name": "Pingpong Finance Ltd."
    },
    {
        "id": 5,
        "contact_person_name": "Dinga Mehta",
        "emp_id": "IWCLT00003",
        "email": "dinga1@dingdong.com",
        "contact_no": 8123456789,
        "secondary_contact_no": null,
        "username": "dingifinance",
        "lastPasswordUpdated": "2025-04-29T06:44:32.000Z",
        "pincode": null,
        "state": null,
        "city": null,
        "area": null,
        "address": null,
        "profile_image": null,
        "gender": null,
        "dob": null,
        "vehicletypes": "2",
        "createdBy": "4",
        "updatedBy": null,
        "createdAt": "2025-04-29T06:44:32.000Z",
        "updatedAt": null,
        "status": 1,
        "company_name": "   "
    },
    {
        "id": 4,
        "contact_person_name": "Manga Mehta",
        "emp_id": "IWCLT00002",
        "email": "pajjugaraangi@gmail.com",
        "contact_no": 8123436789,
        "secondary_contact_no": null,
        "username": "dingafinance",
        "lastPasswordUpdated": "2025-04-29T06:33:04.000Z",
        "pincode": "380015",
        "state": "Gujarat",
        "city": "Ahmedabad",
        "area": "22/B Industrial Park",
        "address": "MG Road",
        "profile_image": null,
        "gender": null,
        "dob": null,
        "vehicletypes": "4",
        "createdBy": "4",
        "updatedBy": "1",
        "createdAt": "2025-04-29T06:33:04.000Z",
        "updatedAt": "2025-04-29T15:09:39.000Z",
        "status": 1,
        "company_name": "Dingadong finance Ltd."
    },
    {
        "id": 1,
        "contact_person_name": "BaluFinance",
        "emp_id": "IWCLT00001",
        "email": "balakrishnasrg@gmail.com",
        "contact_no": 8798789874,
        "secondary_contact_no": null,
        "username": "balufinance",
        "lastPasswordUpdated": "2025-04-25T07:30:45.000Z",
        "pincode": null,
        "state": null,
        "city": null,
        "area": null,
        "address": null,
        "profile_image": null,
        "gender": null,
        "dob": null,
        "vehicletypes": "2",
        "createdBy": "1",
        "updatedBy": null,
        "createdAt": "2025-04-25T07:30:45.000Z",
        "updatedAt": null,
        "status": 1,
        "company_name": null
    },
    {
      "id": 9,
      "contact_person_name": "Chola manager",
      "emp_id": "IWCLT00007",
      "email": "chola@gmail.com",
      "contact_no": 7887877823,
      "secondary_contact_no": null,
      "username": "cholafinance",
      "lastPasswordUpdated": "2025-04-29T14:37:12.000Z",
      "pincode": null,
      "state": null,
      "city": null,
      "area": null,
      "address": null,
      "profile_image": null,
      "gender": null,
      "dob": null,
      "vehicletypes": "4",
      "createdBy": "1",
      "updatedBy": null,
      "createdAt": "2025-04-29T14:37:12.000Z",
      "updatedAt": null,
      "status": 1,
      "company_name": "chola finance"
  },
  {
      "id": 8,
      "contact_person_name": "Dinga Mehta",
      "emp_id": "IWCLT00006",
      "email": "dinga3@dingdong.com",
      "contact_no": 7123456789,
      "secondary_contact_no": null,
      "username": "dingi2finance",
      "lastPasswordUpdated": "2025-04-29T07:06:33.000Z",
      "pincode": "380015",
      "state": "Gujarat",
      "city": "Ahmedabad",
      "area": "22/B Industrial Park",
      "address": "MG Road",
      "profile_image": null,
      "gender": null,
      "dob": null,
      "vehicletypes": "2",
      "createdBy": "4",
      "updatedBy": null,
      "createdAt": "2025-04-29T07:06:33.000Z",
      "updatedAt": null,
      "status": 1,
      "company_name": "   "
  },
  {
      "id": 7,
      "contact_person_name": "Dinga Mehta",
      "emp_id": "IWCLT00005",
      "email": "prajwalg497@gmail.com",
      "contact_no": 8432123212,
      "secondary_contact_no": null,
      "username": "dingtyufinance",
      "lastPasswordUpdated": "2025-04-29T07:04:17.000Z",
      "pincode": "380015",
      "state": "Gujarat",
      "city": "Ahmedabad",
      "area": "22/B Industrial Park",
      "address": "MG Road",
      "profile_image": null,
      "gender": null,
      "dob": null,
      "vehicletypes": "2",
      "createdBy": "1",
      "updatedBy": "4",
      "createdAt": "2025-04-29T07:04:17.000Z",
      "updatedAt": "2025-04-29T08:36:03.000Z",
      "status": 1,
      "company_name": "Pingpong Finance Ltd."
  },
  {
      "id": 6,
      "contact_person_name": "Manga Mehta",
      "emp_id": "IWCLT00004",
      "email": "pajjugarasangi@gmail.com",
      "contact_no": 8123456489,
      "secondary_contact_no": null,
      "username": "dingi1finance",
      "lastPasswordUpdated": "2025-04-29T06:49:11.000Z",
      "pincode": "380015",
      "state": "Gujarat",
      "city": "Ahmedabad",
      "area": "22/B Industrial Park",
      "address": "MG Road",
      "profile_image": null,
      "gender": null,
      "dob": null,
      "vehicletypes": "2",
      "createdBy": "4",
      "updatedBy": "1",
      "createdAt": "2025-04-29T06:49:11.000Z",
      "updatedAt": "2025-04-29T15:04:07.000Z",
      "status": 0,
      "company_name": "Pingpong Finance Ltd."
  },
  {
      "id": 5,
      "contact_person_name": "Dinga Mehta",
      "emp_id": "IWCLT00003",
      "email": "dinga1@dingdong.com",
      "contact_no": 8123456789,
      "secondary_contact_no": null,
      "username": "dingifinance",
      "lastPasswordUpdated": "2025-04-29T06:44:32.000Z",
      "pincode": null,
      "state": null,
      "city": null,
      "area": null,
      "address": null,
      "profile_image": null,
      "gender": null,
      "dob": null,
      "vehicletypes": "2",
      "createdBy": "4",
      "updatedBy": null,
      "createdAt": "2025-04-29T06:44:32.000Z",
      "updatedAt": null,
      "status": 1,
      "company_name": "   "
  },
  {
      "id": 4,
      "contact_person_name": "Manga Mehta",
      "emp_id": "IWCLT00002",
      "email": "pajjugaraangi@gmail.com",
      "contact_no": 8123436789,
      "secondary_contact_no": null,
      "username": "dingafinance",
      "lastPasswordUpdated": "2025-04-29T06:33:04.000Z",
      "pincode": "380015",
      "state": "Gujarat",
      "city": "Ahmedabad",
      "area": "22/B Industrial Park",
      "address": "MG Road",
      "profile_image": null,
      "gender": null,
      "dob": null,
      "vehicletypes": "4",
      "createdBy": "4",
      "updatedBy": "1",
      "createdAt": "2025-04-29T06:33:04.000Z",
      "updatedAt": "2025-04-29T15:09:39.000Z",
      "status": 1,
      "company_name": "Dingadong finance Ltd."
  },
  {
      "id": 1,
      "contact_person_name": "BaluFinance",
      "emp_id": "IWCLT00001",
      "email": "balakrishnasrg@gmail.com",
      "contact_no": 8798789874,
      "secondary_contact_no": null,
      "username": "balufinance",
      "lastPasswordUpdated": "2025-04-25T07:30:45.000Z",
      "pincode": null,
      "state": null,
      "city": null,
      "area": null,
      "address": null,
      "profile_image": null,
      "gender": null,
      "dob": null,
      "vehicletypes": "2",
      "createdBy": "1",
      "updatedBy": null,
      "createdAt": "2025-04-25T07:30:45.000Z",
      "updatedAt": null,
      "status": 1,
      "company_name": null
  },
  {
    "id": 9,
    "contact_person_name": "Chola manager",
    "emp_id": "IWCLT00007",
    "email": "chola@gmail.com",
    "contact_no": 7887877823,
    "secondary_contact_no": null,
    "username": "cholafinance",
    "lastPasswordUpdated": "2025-04-29T14:37:12.000Z",
    "pincode": null,
    "state": null,
    "city": null,
    "area": null,
    "address": null,
    "profile_image": null,
    "gender": null,
    "dob": null,
    "vehicletypes": "4",
    "createdBy": "1",
    "updatedBy": null,
    "createdAt": "2025-04-29T14:37:12.000Z",
    "updatedAt": null,
    "status": 1,
    "company_name": "chola finance"
},
{
    "id": 8,
    "contact_person_name": "Dinga Mehta",
    "emp_id": "IWCLT00006",
    "email": "dinga3@dingdong.com",
    "contact_no": 7123456789,
    "secondary_contact_no": null,
    "username": "dingi2finance",
    "lastPasswordUpdated": "2025-04-29T07:06:33.000Z",
    "pincode": "380015",
    "state": "Gujarat",
    "city": "Ahmedabad",
    "area": "22/B Industrial Park",
    "address": "MG Road",
    "profile_image": null,
    "gender": null,
    "dob": null,
    "vehicletypes": "2",
    "createdBy": "4",
    "updatedBy": null,
    "createdAt": "2025-04-29T07:06:33.000Z",
    "updatedAt": null,
    "status": 1,
    "company_name": "   "
},
{
    "id": 7,
    "contact_person_name": "Dinga Mehta",
    "emp_id": "IWCLT00005",
    "email": "prajwalg497@gmail.com",
    "contact_no": 8432123212,
    "secondary_contact_no": null,
    "username": "dingtyufinance",
    "lastPasswordUpdated": "2025-04-29T07:04:17.000Z",
    "pincode": "380015",
    "state": "Gujarat",
    "city": "Ahmedabad",
    "area": "22/B Industrial Park",
    "address": "MG Road",
    "profile_image": null,
    "gender": null,
    "dob": null,
    "vehicletypes": "2",
    "createdBy": "1",
    "updatedBy": "4",
    "createdAt": "2025-04-29T07:04:17.000Z",
    "updatedAt": "2025-04-29T08:36:03.000Z",
    "status": 1,
    "company_name": "Pingpong Finance Ltd."
},
{
    "id": 6,
    "contact_person_name": "Manga Mehta",
    "emp_id": "IWCLT00004",
    "email": "pajjugarasangi@gmail.com",
    "contact_no": 8123456489,
    "secondary_contact_no": null,
    "username": "dingi1finance",
    "lastPasswordUpdated": "2025-04-29T06:49:11.000Z",
    "pincode": "380015",
    "state": "Gujarat",
    "city": "Ahmedabad",
    "area": "22/B Industrial Park",
    "address": "MG Road",
    "profile_image": null,
    "gender": null,
    "dob": null,
    "vehicletypes": "2",
    "createdBy": "4",
    "updatedBy": "1",
    "createdAt": "2025-04-29T06:49:11.000Z",
    "updatedAt": "2025-04-29T15:04:07.000Z",
    "status": 0,
    "company_name": "Pingpong Finance Ltd."
},
{
    "id": 5,
    "contact_person_name": "Dinga Mehta",
    "emp_id": "IWCLT00003",
    "email": "dinga1@dingdong.com",
    "contact_no": 8123456789,
    "secondary_contact_no": null,
    "username": "dingifinance",
    "lastPasswordUpdated": "2025-04-29T06:44:32.000Z",
    "pincode": null,
    "state": null,
    "city": null,
    "area": null,
    "address": null,
    "profile_image": null,
    "gender": null,
    "dob": null,
    "vehicletypes": "2",
    "createdBy": "4",
    "updatedBy": null,
    "createdAt": "2025-04-29T06:44:32.000Z",
    "updatedAt": null,
    "status": 1,
    "company_name": "   "
},
{
    "id": 4,
    "contact_person_name": "Manga Mehta",
    "emp_id": "IWCLT00002",
    "email": "pajjugaraangi@gmail.com",
    "contact_no": 8123436789,
    "secondary_contact_no": null,
    "username": "dingafinance",
    "lastPasswordUpdated": "2025-04-29T06:33:04.000Z",
    "pincode": "380015",
    "state": "Gujarat",
    "city": "Ahmedabad",
    "area": "22/B Industrial Park",
    "address": "MG Road",
    "profile_image": null,
    "gender": null,
    "dob": null,
    "vehicletypes": "4",
    "createdBy": "4",
    "updatedBy": "1",
    "createdAt": "2025-04-29T06:33:04.000Z",
    "updatedAt": "2025-04-29T15:09:39.000Z",
    "status": 1,
    "company_name": "Dingadong finance Ltd."
},
{
    "id": 1,
    "contact_person_name": "BaluFinance",
    "emp_id": "IWCLT00001",
    "email": "balakrishnasrg@gmail.com",
    "contact_no": 8798789874,
    "secondary_contact_no": null,
    "username": "balufinance",
    "lastPasswordUpdated": "2025-04-25T07:30:45.000Z",
    "pincode": null,
    "state": null,
    "city": null,
    "area": null,
    "address": null,
    "profile_image": null,
    "gender": null,
    "dob": null,
    "vehicletypes": "2",
    "createdBy": "1",
    "updatedBy": null,
    "createdAt": "2025-04-25T07:30:45.000Z",
    "updatedAt": null,
    "status": 1,
    "company_name": null
}
  ]

    // get clients list
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

   // for pagination
    const handlePagination=(pageno)=>{
      getClientList(paginationData.rowsPerPage,pageno)
    }

    // for the pageSize handling
    const handleManualSetPageSizeData=(pagesize)=>{
      setPaginantionData({...paginationData,rowsPerPage:pagesize})
      getClientList(pagesize,1)
    }

    // activate pr deactivate client
    const handleActivationFunction=async (data)=>{
      let URL =data.status==1? CONFIG_URL.DEACTIVATE_CLIENT_BY_ID.replace(':clientId',data.id)
        : CONFIG_URL.ACTIVATE_CLIENT_BY_ID.replace(':clientId',data.id)
      URL = URL.replace(':clientId',data.id)
      const response =data.status==1?await deleteRequest(URL): await putRequest(URL);
      if(response.status==200){
        setShowModel(false)
        setDeleteData({})
        getClientList(paginationData.rowsPerPage,paginationData.pageNo)
        showNotification("succes",response?.data?.message)
      }else{
        showNotification("error",response?.response?.data?.message||response?.data?.message)
      }
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
        onClose={()=>{
          setShowModel(false)
          setDeleteData({})
        }}
        show={showModel}
        size="md"
        title={`${deleteData?.status==1?"Deactivate":"Activate"} Client`}
        backdrop="static"
        buttontext="Delete"
        closebuttontext="Cancel"
        children={<>
        <div>
          <p>Are you sure you want to {deleteData?.status==1?"Deactivate":"Activate"} client - <strong>{deleteData.company_name}</strong>?</p>
          <div className="d-flex justify-content-end gap-3 mt-4">
            <Button variant="outline-primary" onClick={()=>{
              setShowModel(false)
              setDeleteData({})
            }}>Cancel</Button>
            <Button variant={`${deleteData?.status==1?"outline-danger":"outline-success"}`} onClick={()=>handleActivationFunction(deleteData)}>{deleteData?.status==1?"Deactivate":"Activate"}</Button>
            </div>
        </div>
        </>}
      />
    </>
  );
};

export default ClientsList;
