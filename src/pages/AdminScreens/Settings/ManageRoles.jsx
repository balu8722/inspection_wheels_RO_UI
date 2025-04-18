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
import MultiSelectDropdown from "../../../components/MultiSelectDropdown/MultiSelectDropdown";

const ManageRoles = () => {
    const [showModel, setShowModel] = useState(false);

    const handleClose = () => setShowModel(false);

    const handleAddRole = (newRole) => {
        console.log("New Role Added:", newRole);
        // Logic to add the new role can be implemented here
    };

    const columns = useMemo(
        () => [
            {
                Header: "Role Name",
                accessor: "rolename"
            },
            {
                Header: "Permissions",
                accessor: "permissions"
            },
            {
                Header: "Description",
                accessor: "description"
            },
            {
                Header: "Actions",
                accessor: "actions",
                disableSortBy: true,
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
            { rolename: "Admin", permissions: "Full Access", description: "Administrator with full access to the system" },
            { rolename: "Editor", permissions: "Edit Content", description: "Can edit content but has limited access to settings" },
            { rolename: "Viewer", permissions: "View Only", description: "Can only view content without making changes" },
            { rolename: "Manager", permissions: "Manage Teams", description: "Can manage teams and assign roles" },
        ];
    }, []);

    const validationSchema = Yup.object({
        rolename: Yup.string().required("Required"),
        permissions: Yup.array().of(
            Yup.object().shape({
                value: Yup.string().required(),
                label: Yup.string().required(),
            })
        ).required("Required"),
        description: Yup.string(),
    });

    const formik = useFormik({
        initialValues: {
            rolename: "",
            permissions: '',
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
                title={"Manage Roles"}
                breadcrumbs={[
                    { name: "Settings", active: false },
                    { name: "Manage Roles", active: true },
                ]}
            >
                <div className="text-end mb-3">
                    <Button variant="outline-primary" onClick={() => setShowModel(true)}>
                        Add Role
                    </Button>
                </div>
                <CommonTable propColumns={columns} propData={dummyData} />
            </Page>

            <CommanModel
                onClose={handleClose}
                show={showModel}
                title={"Add Role"}
                buttontext={"Save"}
                closebuttontext={"Close"}
                backdrop={"static"}
                children={
                    <Form className="px-3" onSubmit={formik.handleSubmit}>
                        <Form.Group className="mb-3" controlId="formGridRoleName">
                            <Form.Label>Role Name <span className="text-danger">*</span></Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter Role Name"
                                name="rolename"
                                value={formik.values.rolename}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                isInvalid={formik.touched.rolename && !!formik.errors.rolename}
                            />
                            <Form.Control.Feedback type="invalid" className="text-danger f-12">
                                {formik.errors.rolename}
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formGridPermissions">
                            <Form.Label>Permissions <span className="text-danger">*</span></Form.Label>
                            <MultiSelectDropdown
                                options={[
                                    { value: "Manage Clients", label: "Manage Clients" },
                                    { value: "Manage RO", label: "Manage RO" },
                                    { value: "Manage Valuators", label: "Manage Valuators" },
                                    { value: "Settings", label: "Settings" },
                                ]}
                                name="permissions"
                                value={formik.values.permissions}
                                onChange={(selected) =>
                                    formik.setFieldValue("permissions", selected)
                                }
                                onBlur={formik.handleBlur}
                                isInvalid={formik.touched.permissions && !!formik.errors.permissions}
                            />
                            {formik.touched.permissions && formik.errors.permissions && (
                                <div className="text-danger f-12">{formik.errors.permissions}</div>
                            )}
                        </Form.Group>

                        <Form.Group controlId="formGridDescription">
                            <Form.Label>Description</Form.Label>
                            <Form.Control
                                as="textarea"
                                name="description"
                                value={formik.values.description}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                isInvalid={formik.touched.description && !!formik.errors.description}
                            />
                            <Form.Control.Feedback type="invalid" className="text-danger">
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

export default ManageRoles;
