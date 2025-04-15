
import React, { useState } from "react";
import  { useRef } from "react";
import "./LeadHistory.scss"

 
import {
  Form as BootstrapForm,
  Button,
  Row,
  Col,
  Table,
} from "react-bootstrap";



const LeadHistory = () => {
 

  return (
    <div className="lead_history">
      <div className="p-2">
        <Row>
          <Col md={6}>
            <h5>Customer Info</h5>
            <div className="mb-2">
              <div>
                <label className="fontsize-14">THIPPESHAPPA</label>
              </div>
              <div>
                <label className="fontsize-14">8497012638 </label>
              </div>
              <div>
                <label className="fontsize-14">HOLALKERE | CHITRADURGA</label>
              </div>
              <div>
                <label className="fontsize-14">Karnataka | 577526</label>
              </div>
            </div>
            <div>
              <h5>Executive Info</h5>
              <div>
                <label className="fontsize-14">RANGANTHA | 7353286216</label>
              </div>
            </div>
          </Col>
          <Col className="text-md-right" md={6}>
            <h5>Vehicle Info</h5>
            <div className="mb-2">
              <div>
                <label className="fontsize-14">THIPPESHAPPA</label>
              </div>

              <div>
                <label className="fontsize-14">Karnataka | 577526</label>
              </div>
            </div>
            <div>
              <h5>Client Info</h5>
              <div>
                <label className="fontsize-14">
                  CHOLAMANDALAM INVESTMENT AND FINANCE COMPANY
                </label>
              </div>
            </div>
          </Col>
        </Row>
        <div className="mt-3">
          <h5>Payment Details</h5>
          <div className="mb-4 tablescroll">
            <Table>
              <thead>
                <tr className="table-bg">
                  <th>Order ID</th>
                  <th>Bank Txn ID</th>
                  <th>Mode </th>
                  <th>Amount</th>
                  <th>Date & Time of Transaction</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>122</td>
                  <td>32142422</td>
                  <td>Card</td>
                  <td>3456</td>
                  <td>date</td>
                  <td>paid</td>
                </tr>
              </tbody>
            </Table>
          </div>
          <div className="mb-3">
            <div className="mb-4 tablescroll">
              <Table>
                <thead>
                  <tr className="table-bg">
                    <th>S.No.</th>
                    <th>Date & Time </th>
                    <th>Action</th>
                    <th>Remarks </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>122</td>
                    <td>12th sept</td>
                    <td>Assigned</td>
                    <td>Vehicle inspection</td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeadHistory;
