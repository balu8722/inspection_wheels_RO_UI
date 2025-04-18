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

const VehicleType = () => {
const [showModel, setShowModel] = useState(false);

const handleClose = () => setShowModel(false);


      const columns = useMemo(
        () => [
            {
                Header: "Vehicle Type",
                accessor: "vehicletype"
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
                    {/* <Link to="/addnewro?id=1"> <FaEdit /></Link> */}
                    <Button variant="transparent text-primary" size="sm" onClick={() => setShowModel(true)}>
                      <FaEdit />
                    </Button>
                    {/* <Button variant="transparent" size="sm" onClick={() => {}}>
                      <FaTrash />
                    </Button> */}
                  </div>
                ),
              },
        ], []
    );

    const dummyData = useMemo(() => {
        return [
            { vehicletype: "Retail", description: "A vehicle used for retail purposes" },
            { vehicletype: "Repo", description: "A repossessed vehicle" },
            // { vehicletype: "CANDO", description: "A vehicle used for construction and development operations" },
            // { vehicletype: "Asset verification", description: "A vehicle used for asset verification tasks" },
            // { vehicletype: "Refurb", description: "A refurbished vehicle" },
        ];
    }, []);
const validationSchema = Yup.object({
    vehicleType: Yup.string().required("Required"),
    description: Yup.string(),
});

const formik = useFormik({
    initialValues: {
        vehicleType: "",
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
            title={"Vehicle Type"}
            breadcrumbs={[
                { name: "Settings", active: false },
                { name: "Vehicle Type", active: true },
            ]}
        >
            <div className="text-end mb-3">
                <Button variant="outline-primary" onClick={() => setShowModel(true)}>
                    Add Vehicle Type
                </Button>
            </div>
            <CommonTable propColumns={columns} propData={dummyData} />
        </Page>

        <CommanModel
            onClose={handleClose}
            show={showModel}
            title={"Add Vehicle Type"}
            buttontext={"Save"}
            closebuttontext={"Close"}
            backdrop={"static"}
            children={
                <Form className="px-3" onSubmit={formik.handleSubmit}>
                    <Form.Group className="mb-3" controlId="formGridEmail">
                        <Form.Label>Vehicle Type <spna className="text-danger">*</spna></Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter Vehicle Type"
                            name="vehicleType"
                            value={formik.values.vehicleType}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            isInvalid={formik.touched.vehicleType && !!formik.errors.vehicleType}
                        />
                        <Form.Control.Feedback type="invalid">
                            {formik.errors.vehicleType}
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

export default VehicleType;
