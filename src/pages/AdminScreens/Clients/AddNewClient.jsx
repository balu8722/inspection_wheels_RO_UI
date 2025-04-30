import React, { useEffect, useState } from 'react';
import {
  Formik,
  Form,
  Field,
  ErrorMessage
} from 'formik';
import * as Yup from 'yup';
import {
  Form as BootstrapForm,
  Button,
  Row,
  Col,
  OverlayTrigger,
  Tooltip,
  Card
} from 'react-bootstrap';
import { useDropzone } from 'react-dropzone';
import Page from '../../../components/Page';
import defaultAvatar from '../../../assets/img/avatar-placeholder.png';
import { PasswordShowHide } from '../../../components/PasswordShow/PasswordShowHide';
import MultiSelectDropdown from '../../../components/MultiSelectDropdown/MultiSelectDropdown';
import { useSelector } from 'react-redux';
import { getObjectsByIds, mapToValueLabel } from '../../../utils/commonFunctions';
import { CONFIG_URL } from '../../../api/api.config';
import { showNotification } from '../../../components/Notifications';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import { PostRequestHook } from '../../../api/Services';

const validationSchema = Yup.object({
  username: Yup.string().trim().required('Required'),
  company_name: Yup.string().trim().required('Required'),
  contact_person_name: Yup.string().trim().required('Required'),
  address: Yup.string().notRequired(),
  city: Yup.string().notRequired(),
  pincode: Yup.string().notRequired(),
  secondary_contact_no: Yup.string().notRequired(),
  email: Yup.string().email('Invalid email').required('Required'),
  state: Yup.string().notRequired(),
  area: Yup.string().notRequired(),
  contact_no: Yup.string().trim().required('Required'),
  password: Yup.string().trim().required('Required'),
  confirmPassword:Yup.string()
  .oneOf(
    [Yup.ref("password"), null],
    "Confirm password must match with new password"
  )
  .required("Required"),
  vehicletypes: Yup.array().of(Yup.object().shape({
        value: Yup.string().required(),
        label: Yup.string().required(),
    })).min(1, 'Required')
});

const clientFormInitialValues={
    username: '',
    company_name: '',
    contact_person_name:  "",
    address: '',
    city: '',
    pincode: '',
    secondary_contact_no: '',
    email: '',
    state: '',
    area: '',
    contact_no: '',
    vehicletypes: [],
    password:'Welcome@123',
    confirmPassword:'Welcome@123'
}

const AddNewClient = () => {
    const {vehicleTypes}=useSelector((state)=>state.clients)
    const navigate=useNavigate();
    const [clientIdParams]=useSearchParams();
    const id = clientIdParams.get('id');
    
    const {postRequest,putRequest,getRequest}=PostRequestHook();
    
  const [uploadedImage, setUploadedImage] = useState(null);
  const [isEdit, setIsEdit] = useState(false);
  const [editDetails, setEditDetails] = useState({});
  const [formValues,setFormValues]=useState(clientFormInitialValues)

  const onDrop = acceptedFiles => {
    const reader = new FileReader();
    reader.onload = () => setUploadedImage(reader.result);
    reader.readAsDataURL(acceptedFiles[0]);
  };

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  useEffect(()=>{
    if(id){
        setIsEdit(true)
        getClientDetails(id)
    }
  },[id])

  

const getClientDetails=async (clientId)=>{
    let url=CONFIG_URL.GET_CLIENTS_DETAILS_BY_ID.replace(":clienId",clientId)
    const response=await getRequest(url)
    if(response.status==200){
        let formData=response.data
        let addedVehicleIds=formData.vehicletypes.split(",").map(item=>Number(item));
        let _addedVehicleTypes=mapToValueLabel(getObjectsByIds(vehicleTypes,addedVehicleIds),'id','name')
        setIsEdit(true)
        setEditDetails(formData)
        setFormValues({
            username:formData?.username|| '',
            company_name: formData?.company_name|| '',
            contact_person_name: formData?.contact_person_name|| "",
            address: formData?.address|| '',
            city: formData?.city|| '',
            pincode: formData?.pincode|| '',
            secondary_contact_no: formData?.secondary_contact_no|| '',
            email: formData?.email|| '',
            state:formData?.state||  '',
            area: formData?.area|| '',
            contact_no: formData?.contact_no|| '',
            vehicletypes:formData?.vehicletypes?_addedVehicleTypes: [],
            password:'Welcome@123',
            confirmPassword:'Welcome@123'
        })
    }else{
        setIsEdit(false)
        showNotification("error",response?.response?.data?.message||response?.data?.message)
    }

}

const handleAddUpdateClient=async (values,clearForm=()=>{})=>{
    console.log(values);
    let vehicleTypeIds=values.vehicletypes.map(item=>item.value)
    let data={...values,vehicletypes:vehicleTypeIds,email:values.email.trim(),contact_no:values.contact_no.toString().trim(),
        company_name:values.company_name.trim(),
        contact_person_name:values.contact_person_name.trim(),
        username:values.username.trim()}
         console.log("data",data)
         let {password,confirmPassword,username,...rest}=data;
        let response=isEdit? await putRequest(CONFIG_URL.UPDATE_CLIENT_BY_ID.replace(":clientId",id),rest) : await postRequest(CONFIG_URL.CREATE_CLIENT,data)
        if(response.status==200||response.status==201){
                clearForm()
                showNotification("success",response?.data?.message)
                navigate("/manageclient")
            }else{
                showNotification("error",response?.response?.data?.message||response?.data?.message)
            }
}

  return (
    <Page className={"dashboard mt-3"} title={`${isEdit?'Edit Client':'Add Client'}`} breadcrumbs={[{name:"Home", active:false},{name:`${isEdit?'Edit Client':'Add Client'}`, active:true}]}>
            
        <div className="bg-white p-3">
            <Formik
                initialValues={formValues}
                enableReinitialize={true}
                validationSchema={validationSchema}
                onSubmit={(values,{resetForm}) => {
                    handleAddUpdateClient(values,resetForm)
                }}
                >
                {({values,handleBlur,handleChange,errors,touched,setFieldValue}) => (
                    <Form>
                    <Row>
                        {isEdit &&<>
                        <Col md={6}>
                            <BootstrapForm.Group controlId="company_name" className='mb-2'>
                                <BootstrapForm.Label className='mb-1' >Company Id </BootstrapForm.Label>
                                <BootstrapForm.Control
                                    type="text"
                                    name="emp_id"
                                    value={editDetails?.emp_id||""}
                                    disabled
                                />
                            </BootstrapForm.Group>
                        </Col>
                        <Col md={6}>
                        <BootstrapForm.Group controlId="username" className='mb-2'>
                            <BootstrapForm.Label className='mb-1'>Username</BootstrapForm.Label>
                            <Field name="username" className="form-control" disabled />
                            <ErrorMessage name="username" component="div" className="text-danger small" />
                        </BootstrapForm.Group>
                        </Col>
                        </>}
                        <Col md={6}>
                        <BootstrapForm.Group controlId="company_name" className='mb-2'>
                            <BootstrapForm.Label className='mb-1'>Company Name <span className='text-danger'>*</span></BootstrapForm.Label>
                            <Field name="company_name" className="form-control" />
                            <ErrorMessage name="company_name" component="div" className="text-danger small" />
                        </BootstrapForm.Group>
                        </Col>
                        <Col md={6}>
                        <BootstrapForm.Group controlId="contact_person_name" className='mb-2'>
                            <BootstrapForm.Label className='mb-1'>Contact Person Name <span className='text-danger'>*</span></BootstrapForm.Label>
                            <Field name="contact_person_name" className="form-control" />
                            <ErrorMessage name="contact_person_name" component="div" className="text-danger small" />
                        </BootstrapForm.Group>
                        </Col>
                        <Col md={6}>

                        <BootstrapForm.Group controlId="email" className='mb-2'>
                            <BootstrapForm.Label className='mb-1'>Email <span className='text-danger'>*</span></BootstrapForm.Label>
                            <Field name="email" className="form-control" type="email" />
                            <ErrorMessage name="email" component="div" className="text-danger small" />
                        </BootstrapForm.Group>
                        </Col>
                        <Col md={6}>
                        <BootstrapForm.Group controlId="contact_no" className='mb-2'>
                            <BootstrapForm.Label className='mb-1'>Phone number <span className='text-danger'>*</span></BootstrapForm.Label>
                            <Field name="contact_no" className="form-control" />
                            <ErrorMessage name="contact_no" component="div" className="text-danger small" />
                        </BootstrapForm.Group>
                        </Col>
                        <Col md={6}>
                        <BootstrapForm.Group controlId="secondary_contact_no" className='mb-2'>
                            <BootstrapForm.Label className='mb-1'>Seconadry Phone number</BootstrapForm.Label>
                            <Field name="secondary_contact_no" className="form-control" />
                            <ErrorMessage name="secondary_contact_no" component="div" className="text-danger small" />
                        </BootstrapForm.Group>
                        </Col>
                        <Col md={6}>
                        <BootstrapForm.Group controlId="address" className='mb-2'>
                            <BootstrapForm.Label className='mb-1'>Address</BootstrapForm.Label>
                            <Field name="address" className="form-control" />
                            <ErrorMessage name="address" component="div" className="text-danger small" />
                        </BootstrapForm.Group>
                        </Col>
                        <Col md={6}>
                        <BootstrapForm.Group controlId="area" className='mb-2'>
                            <BootstrapForm.Label className='mb-1'>Area</BootstrapForm.Label>
                            <Field name="area" className="form-control" />
                            <ErrorMessage name="area" component="div" className="text-danger small" />
                        </BootstrapForm.Group>
                        </Col>
                        <Col md={6}>
                        <BootstrapForm.Group controlId="city" className='mb-2'>
                            <BootstrapForm.Label className='mb-1'>City</BootstrapForm.Label>
                            <Field name="city" className="form-control" />
                            <ErrorMessage name="city" component="div" className="text-danger small" />
                        </BootstrapForm.Group>
                        </Col>
                        <Col md={6}>
                            <BootstrapForm.Group controlId="state" className='mb-2'>
                                <BootstrapForm.Label className='mb-1'>State</BootstrapForm.Label>
                                <Field name="state" className="form-control" />
                                <ErrorMessage name="state" component="div" className="text-danger small" />
                            </BootstrapForm.Group>
                        </Col>
                        <Col md={6}>
                        <BootstrapForm.Group controlId="pincode" className='mb-2'>
                            <BootstrapForm.Label className='mb-1'>Pincode</BootstrapForm.Label>
                            <Field name="pincode" className="form-control" />
                            <ErrorMessage name="pincode" component="div" className="text-danger small" />
                        </BootstrapForm.Group>
                        </Col>
                        <Col md={6}>
                            <BootstrapForm.Group className="mb-3" controlId="formGridPermissions">
                                <BootstrapForm.Label>Vehicle Types <span className="text-danger">*</span></BootstrapForm.Label>
                                <MultiSelectDropdown
                                    options={mapToValueLabel(vehicleTypes,"id","name")}
                                    name="vehicletypes"
                                    value={values.vehicletypes}
                                    onChange={(selected) =>
                                        setFieldValue("vehicletypes", selected)
                                    }
                                    onBlur={handleBlur}
                                />
                                {touched.vehicletypes && errors.vehicletypes && (
                                    <div className="text-danger small">{errors.vehicletypes}</div>
                                )}
                            </BootstrapForm.Group>
                        </Col>
                    </Row>
                    <div className="mt-4 w-50">
                        <BootstrapForm.Label>Image Upload</BootstrapForm.Label>
                    <Card>
                        <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>Drag & drop or click to upload image</Tooltip>}
                        >
                        <div {...getRootProps()} style={{ textAlign: 'center', cursor: 'pointer' }}>
                            <input {...getInputProps()} />
                        
                            <img
                                src={uploadedImage?uploadedImage:defaultAvatar}
                                alt="Uploaded Preview"
                                style={{ width: 120, height: 120, borderRadius: '50%' }}
                            />
                        </div>
                        </OverlayTrigger>
                    </Card>
                    </div>
                   {!isEdit && <>
                    <h5 className='mt-4 mb-3'>Login Credentials</h5>
                    <Row>
                        <Col md={4}>
                        <BootstrapForm.Group controlId="username" className='mb-2'>
                            <BootstrapForm.Label className='mb-1'>Username <span className='text-danger'>*</span></BootstrapForm.Label>
                            <Field name="username" className="form-control">
                                {({ field, form }) => (
                                    <input
                                        {...field}
                                        className="form-control"
                                        onChange={(e) => {
                                        const trimmed = e.target.value.trim(); 
                                        form.setFieldValue('username', trimmed);
                                        }}
                                    />
                                )}
                            </Field>
                            <ErrorMessage name="username" component="div" className="text-danger small" />
                        </BootstrapForm.Group>
                        </Col>

                        <Col md={4}>
                        <PasswordShowHide
                                    name="password"
                                    input_label="Password"
                                    placeholder="Password"
                                    handleChange={(e)=>{
                                        let value=e.target.value.trim()
                                        setFieldValue("password",value)
                                    }}
                                    handleBlur={handleBlur}
                                    value={values.password}
                                    formikValidation={touched.password && errors.password ? (
                                        <>
                                            <span className="text-danger small">{errors.password}</span>
                                        </>
                                    ) : null}
                                />
                        </Col>
                        <Col md={4}>
                        <PasswordShowHide
                                    name="confirmPassword"
                                    input_label="Confirm Password"
                                    placeholder="Password"
                                    handleChange={handleChange}
                                    handleBlur={handleBlur}
                                    value={values.confirmPassword}
                                    formikValidation={touched.confirmPassword && errors.confirmPassword ? (
                                        <>
                                            <span className="text-danger small">{errors.confirmPassword}</span>
                                        </>
                                    ) : null}
                                />
                        </Col>
                    </Row>
                    </>}

                    <div className="text-end">
                        <Button type="submit" variant="outline-primary mt-4">{isEdit?"Update":"Save"}</Button>
                    </div>
                    </Form>
                )}
            </Formik>
        </div>
    </Page>
   
  );
};

export default AddNewClient;
