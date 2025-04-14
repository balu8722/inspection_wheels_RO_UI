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

const VehicleCategory = () => {
const [showModel, setShowModel] = useState(false);

const handleClose = () => setShowModel(false);

const handleAddVehicleCategory = (newCategory) => {
    console.log("New Vehicle Category Added:", newCategory);
    // Logic to add the new vehicle category can be implemented here
};
      const columns = useMemo(
        () => [
            {
                Header: "Vehicle Category",
                accessor: "vehiclecategory"
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
            { vehiclecategory: "2 Wheelers", description: "Vehicles with two wheels, typically motorcycles or scooters" },
            { vehiclecategory: "3 Wheelers", description: "Vehicles with three wheels, often used for commercial purposes" },
            { vehiclecategory: "4 Wheelers", description: "Standard four-wheeled vehicles like cars and SUVs" },
            { vehiclecategory: "CV (Commercial Vehicle)", description: "Vehicles designed for transporting goods or passengers commercially" },
            { vehiclecategory: "FE (Farm Equipments)", description: "Vehicles and equipment used in agricultural operations" },
        ];
    }, []);
const validationSchema = Yup.object({
    vehicleCategory: Yup.string().required("Required"),
    description: Yup.string(),
});

const formik = useFormik({
    initialValues: {
        vehicleCategory: "",
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
            title={"Vehicle Category"}
            breadcrumbs={[
                { name: "Settings", active: false },
                { name: "Vehicle Category", active: true },
            ]}
        >
            <div className="text-end mb-3">
                <Button variant="outline-primary" onClick={() => setShowModel(true)}>
                    Add Vehicle Category
                </Button>
            </div>
            <CommonTable propColumns={columns} propData={dummyData} />
        </Page>

        <CommanModel
            onClose={handleClose}
            show={showModel}
            title={"Add Vehicle Category"}
            buttontext={"Save"}
            closebuttontext={"Close"}
            backdrop={"static"}
            children={
                <Form className="px-3" onSubmit={formik.handleSubmit}>
                    <Form.Group className="mb-3" controlId="formGridEmail">
                        <Form.Label>Vehicle Category <span className="text-danger">*</span></Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter Vehicle Category"
                            name="vehicleCategory"
                            value={formik.values.vehicleCategory}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            isInvalid={formik.touched.vehicleCategory && !!formik.errors.vehicleCategory}
                        />
                        <Form.Control.Feedback type="invalid">
                            {formik.errors.vehicleCategory}
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

export default VehicleCategory;
