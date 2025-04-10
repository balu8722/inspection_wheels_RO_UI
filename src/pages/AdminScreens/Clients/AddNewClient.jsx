import React, { useState } from 'react';
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

const validationSchema = Yup.object({
  username: Yup.string().required('Required'),
  companyName: Yup.string().required('Required'),
  contactPerson: Yup.string().required('Required'),
  address: Yup.string(),
  city: Yup.string().required('Required'),
  pincode: Yup.string().required('Required'),
  callerId: Yup.string().required('Required'),
  companyId: Yup.string().required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  state: Yup.string().required('Required'),
  area: Yup.string().required('Required'),
  mobile: Yup.string().required('Required'),
  password: Yup.string().required('Required'),
  confirm_password: Yup.string().required('Required')
});

const AddNewClient = () => {
  const [uploadedImage, setUploadedImage] = useState(null);

  const onDrop = acceptedFiles => {
    const reader = new FileReader();
    reader.onload = () => setUploadedImage(reader.result);
    reader.readAsDataURL(acceptedFiles[0]);
  };

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <Page className={"dashboard mt-3"} title={'Add RO'} breadcrumbs={[{name:"Home", active:false},{name:"add RO", active:true}]}>
            
        <div className="bg-white p-3">
            <Formik
                initialValues={{
                    username: '',
                    companyName: '',
                    contactPerson:"",
                    address: '',
                    city: '',
                    pincode: '',
                    callerId: '',
                    companyId: '',
                    email: '',
                    state: '',
                    area: '',
                    mobile: ''
                }}
                validationSchema={validationSchema}
                onSubmit={(values) => {
                    console.log(values);
                }}
                >
                {() => (
                    <Form>
                    <Row>
                        <Col md={6}>
                        <BootstrapForm.Group controlId="companyName" className='mb-2'>
                            <BootstrapForm.Label className='mb-1'>Company Name <span className='text-danger'>*</span></BootstrapForm.Label>
                            <Field name="companyName" className="form-control" />
                            <ErrorMessage name="companyName" component="div" className="text-danger" />
                        </BootstrapForm.Group>

                        <BootstrapForm.Group controlId="contactPerson" className='mb-2'>
                            <BootstrapForm.Label className='mb-1'>Contact Person Name <span className='text-danger'>*</span></BootstrapForm.Label>
                            <Field name="contactPerson" className="form-control" />
                            <ErrorMessage name="contactPerson" component="div" className="text-danger" />
                        </BootstrapForm.Group>

                        <BootstrapForm.Group controlId="city" className='mb-2'>
                            <BootstrapForm.Label className='mb-1'>City <span className='text-danger'>*</span></BootstrapForm.Label>
                            <Field name="city" className="form-control" />
                            <ErrorMessage name="city" component="div" className="text-danger" />
                        </BootstrapForm.Group>

                        <BootstrapForm.Group controlId="pincode" className='mb-2'>
                            <BootstrapForm.Label className='mb-1'>Pincode <span className='text-danger'>*</span></BootstrapForm.Label>
                            <Field name="pincode" className="form-control" />
                            <ErrorMessage name="pincode" component="div" className="text-danger" />
                        </BootstrapForm.Group>

                        <BootstrapForm.Group controlId="callerId" className='mb-2'>
                            <BootstrapForm.Label className='mb-1'>Caller ID <span className='text-danger'>*</span></BootstrapForm.Label>
                            <Field name="callerId" className="form-control" />
                            <ErrorMessage name="callerId" component="div" className="text-danger" />
                        </BootstrapForm.Group>

                        <BootstrapForm.Group controlId="address" className='mb-2'>
                            <BootstrapForm.Label className='mb-1'>Address</BootstrapForm.Label>
                            <Field name="address" className="form-control" />
                            <ErrorMessage name="address" component="div" className="text-danger" />
                        </BootstrapForm.Group>
                        </Col>

                        <Col md={6}>
                        <BootstrapForm.Group controlId="companyId" className='mb-2'>
                            <BootstrapForm.Label className='mb-1'>Company Id <span className='text-danger'>*</span></BootstrapForm.Label>
                            <Field name="companyId" className="form-control" />
                            <ErrorMessage name="companyId" component="div" className="text-danger" />
                        </BootstrapForm.Group>

                        <BootstrapForm.Group controlId="email" className='mb-2'>
                            <BootstrapForm.Label className='mb-1'>Email <span className='text-danger'>*</span></BootstrapForm.Label>
                            <Field name="email" className="form-control" type="email" />
                            <ErrorMessage name="email" component="div" className="text-danger" />
                        </BootstrapForm.Group>

                        <BootstrapForm.Group controlId="state" className='mb-2'>
                            <BootstrapForm.Label className='mb-1'>State <span className='text-danger'>*</span></BootstrapForm.Label>
                            <Field name="state" className="form-control" />
                            <ErrorMessage name="state" component="div" className="text-danger" />
                        </BootstrapForm.Group>

                        <BootstrapForm.Group controlId="area" className='mb-2'>
                            <BootstrapForm.Label className='mb-1'>Area <span className='text-danger'>*</span></BootstrapForm.Label>
                            <Field name="area" className="form-control" />
                            <ErrorMessage name="area" component="div" className="text-danger" />
                        </BootstrapForm.Group>

                        <BootstrapForm.Group controlId="mobile" className='mb-2'>
                            <BootstrapForm.Label className='mb-1'>Mobile <span className='text-danger'>*</span></BootstrapForm.Label>
                            <Field name="mobile" className="form-control" />
                            <ErrorMessage name="mobile" component="div" className="text-danger" />
                        </BootstrapForm.Group>
                        </Col>
                    </Row>
                    <div className="mt-4">
                    <BootstrapForm.Label>Image Upload <span className='text-danger'>*</span></BootstrapForm.Label>
                    
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
                            {/* )
                            {uploadedImage ? ( : (
                            <p className="text-muted">Drag and drop or click to upload an image</p>
                            )} */}
                        </div>
                        </OverlayTrigger>
                    </Card>
                    </div>

                    <h5 className='mt-4 mb-3'>Login Credentials</h5>
                    <Row>
                        <Col md={4}>
                        <BootstrapForm.Group controlId="username" className='mb-2'>
                            <BootstrapForm.Label className='mb-1'>Username <span className='text-danger'>*</span></BootstrapForm.Label>
                            <Field name="username" className="form-control" />
                            <ErrorMessage name="username" component="div" className="text-danger" />
                        </BootstrapForm.Group>
                        </Col>

                        <Col md={4}>
                            <BootstrapForm.Group controlId="password" className='mb-2'>
                                <BootstrapForm.Label className='mb-1'>Password<span className='text-danger'>*</span></BootstrapForm.Label>
                                <Field name="password" className="form-control" type="password" />
                                <ErrorMessage name="password" component="div" className="text-danger" />
                            </BootstrapForm.Group>
                        </Col>
                        <Col md={4}>
                            <BootstrapForm.Group controlId="confirm_password" className='mb-2'>
                                <BootstrapForm.Label className='mb-1'>Confirm Password<span className='text-danger'>*</span></BootstrapForm.Label>
                                <Field name="confirm_password" className="form-control" type="password" />
                                <ErrorMessage name="confirm_password" component="div" className="text-danger" />
                            </BootstrapForm.Group>
                        </Col>
                    </Row>

                    <div className="text-end">
                        <Button type="submit" variant="outline-primary mt-4">Save</Button>
                    </div>
                    </Form>
                )}
            </Formik>
        </div>
    </Page>
   
  );
};

export default AddNewClient;
