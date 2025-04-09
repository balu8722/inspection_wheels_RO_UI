/* eslint-disable jsx-a11y/href-no-hash */

import Page from "../../../components/Page";
// import Typography from "../components/Typography";
import React from "react";
import {
  Alert,
  Card,
  CardBody,
  CardHeader,
  Col,
  Row,
  UncontrolledAlert,
} from "reactstrap";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
// import { fetchUsers, fetchPosts } from "../../redux/slices/usersSlice";
import { useNavigate } from "react-router-dom";
import PageSpinner from "../../../components/PageSpinner";

const Roleads = () => {
  
  const { users, posts, loading, error } = useSelector((state) => state.users);
  
  return (
    <Page breadcrumbs={[{ name: "RO Leads", active: true }]}>
      <Row>
        <h5>Roleads</h5>
      </Row>
    </Page>
  );
};

export default Roleads;
