import React, { useMemo, useState } from "react";
import Page from "../../../components/Page";
import { Button, Card, CardBody, Col, Form, Row,Badge } from "react-bootstrap";
import { CommonTable } from "../../../components/Table/CommonTable";
import { FaEdit, FaTrash } from "react-icons/fa";
import CommanModel from "../../../components/CommanModel/CommanModel";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { PostRequestHook } from "../../../api/Services";
import { CONFIG_URL } from "../../../api/api.config";
import { fetchVehicleCategory } from "../../../redux/slices/clientsSlice";
import { showNotification } from "../../../components/Notifications";

const VehicleCategory = () => {
    const dispatch=useDispatch()
    const {vehicleCategories}=useSelector((state)=> state.clients)
    const {postRequest,putRequest,deleteRequest}=PostRequestHook()

    const [showModel, setShowModel] = useState(false);
    const [deleteModelShow, setDeleteModelShow] = useState(false);
    const [editData, setEditData] = useState({});
    const [isEdit, setIsEdit] = useState(false);


    const handleClose = () => {
        setEditData({})
        setIsEdit(false)
        setShowModel(false)
        setDeleteModelShow(false)
    };


        const columns = useMemo(
            () => [
                {
                    Header: "Vehicle Category",
                    accessor: "name"
                },
                {
                    Header: "Short Code",
                    accessor: "short_code"
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
                        <Button variant="transparent" className="p-0 m-0" size="sm" onClick={() => handleEditCategory(row.original)}>
                        <FaEdit title="Edit" className=" text-primary" />
                        </Button>
                        <Button variant="transparent" className="p-0 m-0" size="sm" onClick={() => handleDeleteCategory(row.original)}>
                        <FaTrash title="Remove" className=" text-primary"/>
                        </Button>
                    </div>
                    ),
                },
            ], []
        );

        const handleEditCategory=(data)=>{
            setIsEdit(true)
            setEditData(data)
            setShowModel(true)
            formik.setValues({name: data?.name||"",
                short_code: data?.short_code||"",
                description: data?.description||"",})
        }
        const handleDeleteCategory=(data)=>{
            setEditData(data)
            setDeleteModelShow(true)
            setDeleteModelShow(true)
        }

    const validationSchema = Yup.object({
        name: Yup.string().required("Required"),
        short_code: Yup.string().required("Required"),
        description: Yup.string(),
    });

    const formik = useFormik({
        initialValues: {
            name: editData?.name||"",
            short_code: editData?.short_code||"",
            description: editData?.description||"",
        },
        validationSchema,
        onSubmit: (values,{resetForm}) => {
            // console.log('values',values)
            handleAddUpdateVehicleCategory(values,resetForm)
        },
    });

    const handleAddUpdateVehicleCategory=async (data,clearForm=()=>{})=>{
        let _data={...data}
        if(isEdit){
        delete _data.short_code
        }
        let response=isEdit?await putRequest(`${CONFIG_URL.UPDATE_VEHICLE_CATEGORY}${editData?.id}`,_data)
        : await postRequest(CONFIG_URL.CREATE_VEHICLE_CATEGORY,data)
        if(response.status==200||response.status==201){
                dispatch(fetchVehicleCategory());
                handleClose()
                clearForm()
                showNotification("success",response?.data?.message)
            }else{
                showNotification("error",response?.response?.data?.message||response?.data?.message)
            }
    }


    const handleDeleteVehicleCategory=async (data)=>{
        let response=await deleteRequest(`${CONFIG_URL.DELETE_VEHICLE_CATEGORY}${data?.id}`)
        if(response.status==200||response.status==201){
                dispatch(fetchVehicleCategory());
                handleClose()
                showNotification("success",response?.data?.message)
            }else{
                showNotification("error",response?.response?.data?.message||response?.data?.message)
            }
    }

    return (
        <>
            <Page
                className={"dashboard mt-3"}
                title={"Vehicle Category"}
                breadcrumbs={[
                    { name: "Settings", active: false },
                    { name: "Vehicle category", active: true },
                ]}
            >
                <div className="text-end mb-3">
                    <Button variant="outline-primary" onClick={() => setShowModel(true)}>
                        Add Vehicle Category
                    </Button>
                </div>
                <CommonTable propColumns={columns} propData={vehicleCategories} />
            </Page>

    {/*  edit model  */}
            <CommanModel
                onClose={handleClose}
                show={showModel}
                size="md"
                title={`${isEdit?"Edit":"Add"} Vehicle Category`}
                buttontext={`${isEdit?"Update":"Save"}`}
                closebuttontext={"Close"}
                backdrop={"static"}
                children={
                    <Form className="px-3" onSubmit={formik.handleSubmit}>
                        <Form.Group className="mb-3" controlId="formGridEmail">
                            <Form.Label>Vehicle Category <span className="text-danger">*</span></Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter Vehicle Category"
                                name="name"
                                value={formik.values.name}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                isInvalid={formik.touched.name && !!formik.errors.name}
                            />
                            <Form.Control.Feedback type="invalid">
                                {formik.errors.name}
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formGridshortcode">
                            <Form.Label>Short Code <spna className="text-danger">*</spna></Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter short code"
                                name="short_code"
                                value={formik.values.short_code}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                isInvalid={formik.touched.short_code && !!formik.errors.short_code}
                                disabled={isEdit}
                            />
                            <Form.Control.Feedback type="invalid">
                                {formik.errors.short_code}
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
                                {isEdit?"Update":"Submit"}
                            </Button>
                        </div>
                    </Form>
                }
            />

            {/* delete Model  */}
            <CommanModel
                onClose={handleClose}
                show={deleteModelShow}
                size="md"
                title={"Remove Vehicle Type"}
                buttontext={"Remove"}
                closebuttontext={"Close"}
                backdrop={"static"}
                children={
                    <>
                        <p>Are you sure to remove the Vehicle Category -- {editData.name}</p>
                        <div className="text-end mt-4">
                            <Button variant="outline-primary" type="button" onClick={()=>handleDeleteVehicleCategory(editData)}>
                                Submit
                            </Button>
                        </div>
                    </>
                }
            />
        </>
    );
};

export default VehicleCategory;
