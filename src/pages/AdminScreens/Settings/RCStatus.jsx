import React, { useMemo, useState } from "react";
import Page from "../../../components/Page";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { Button, Card, CardBody, Col, Form, Row,Badge } from "react-bootstrap";
import { CommonTable } from "../../../components/Table/CommonTable";
import { Link } from "react-router-dom";
import { FaEdit } from "react-icons/fa";
import CommanModel from "../../../components/CommanModel/CommanModel";
import { useFormik } from "formik";
import * as Yup from "yup";

const RCStatus = () => {
const [showModel, setShowModel] = useState(false);

const handleClose = () => setShowModel(false);

const handleAddRCStatus = (newStatus) => {
    console.log("New RC Status Added:", newStatus);
    // Logic to add the new RC status can be implemented here
};
      const columns = useMemo(
        () => [
            {
                Header: "RC Status",
                accessor: "rcstatus"
            },
            {
                Header: "Description",
                accessor: "description"
            },
            {
                Header: "Actions",
                accessor: "actions",
                disableSortBy:true,
                Cell: ({ row }) => (
                  <div className="d-flex justify-content-center gap-2">
                    <Button variant="transparent text-primary" size="sm" onClick={() => setShowModel(true)}>
                      <FaEdit />
                    </Button>
                  </div>
                ),
              },
        ], []
    );

    const dummyData = useMemo(() => {
        return [
            { rcstatus: "Active", description: "RC is currently active and valid" },
            { rcstatus: "Expired", description: "RC has expired and needs renewal" },
            { rcstatus: "Pending", description: "RC is pending approval or processing" },
            { rcstatus: "Suspended", description: "RC is temporarily suspended" },
            { rcstatus: "Cancelled", description: "RC has been permanently cancelled" },
        ];
    }, []);
const validationSchema = Yup.object({
    rcStatus: Yup.string().required("Required"),
    description: Yup.string(),
});

const formik = useFormik({
    initialValues: {
        rcStatus: "",
        description: "",
    },
    validationSchema,
    onSubmit: (values) => {
        console.log("Form Submitted", values);
        setShowModel(false);
    },
});

return (
    <>
        <Page
            className={"dashboard mt-3"}
            title={"RC Status"}
            breadcrumbs={[
                { name: "Settings", active: false },
                { name: "RC Status", active: true },
            ]}
        >
            <div className="text-end mb-3">
                <Button variant="outline-primary" onClick={() => setShowModel(true)}>
                    Add RC Status
                </Button>
            </div>
            <CommonTable propColumns={columns} propData={dummyData} />
        </Page>

        <CommanModel
            onClose={handleClose}
            show={showModel}
            title={"Add RC Status"}
            buttontext={"Save"}
            closebuttontext={"Close"}
            backdrop={"static"}
            children={
                <Form className="px-3" onSubmit={formik.handleSubmit}>
                    <Form.Group className="mb-3" controlId="formGridEmail">
                        <Form.Label>RC Status <span className="text-danger">*</span></Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter RC Status"
                            name="rcStatus"
                            value={formik.values.rcStatus}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            isInvalid={formik.touched.rcStatus && !!formik.errors.rcStatus}
                        />
                        <Form.Control.Feedback type="invalid">
                            {formik.errors.rcStatus}
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group controlId="formGridPassword">
                        <Form.Label>Description</Form.Label>
                        <Form.Control
                            as="textarea"
                            name="description"
                            value={formik.values.description}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            isInvalid={formik.touched.description && !!formik.errors.description}
                        />
                        <Form.Control.Feedback type="invalid">
                            {formik.errors.description}
                        </Form.Control.Feedback>
                    </Form.Group>
                    <div className="text-end mt-4">
                        <Button variant="outline-primary" type="submit">
                            Submit
                        </Button>
                    </div>
                </Form>
            }
        />
    </>
);
};

export default RCStatus;
