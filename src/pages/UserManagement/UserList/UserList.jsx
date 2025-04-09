/* eslint-disable jsx-a11y/href-no-hash */
import Page from "../../../components/Page";
import React from "react";

import Form from "react-bootstrap/Form";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const UserList = () => {
  return (
    <Page
      breadcrumbs={[
        { name: "User Management", link: "/mytray" },
        { name: "User List", active: true },
      ]}
    >
      <div>
        <div>Userlist</div>
      </div>
    </Page>
  );
};

export default UserList;
