/* eslint-disable jsx-a11y/href-no-hash */
import Page from "../../../components/Page";
import React from "react";

import Form from "react-bootstrap/Form";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const CreateLead = () => {
  
  return (
    <Page
      breadcrumbs={[
        { name: "Lead Management", link: "/mytray" },
        { name: "Create Lead", active: true },
      ]}
    >
      <div>
        <div>
        Lead create
        </div>
      </div>
    </Page>
  );
};

export default CreateLead;
