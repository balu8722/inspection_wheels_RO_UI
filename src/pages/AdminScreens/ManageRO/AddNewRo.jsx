import React, { useState, useEffect } from "react";
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
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useDropzone } from 'react-dropzone';
import Page from '../../../components/Page';
import defaultAvatar from '../../../assets/img/avatar-placeholder.png';
import { CONFIG_URL } from "../../../api/api.config";
import  { showNotification } from "../../../components/Notifications";
import { PostRequestHook } from '../../../api/Services';
import Loader from '../../../components/Loader/Loader';

const AddNewRO = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const Soid = queryParams.get("id");

  const [uploadedImage, setUploadedImage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [initialValues, setInitialValues] = useState({
    username: "",
    name: "",
    address: "",
    city: "",
    pincode: "",
    secondary_contact_no: "",
    email: "",
    state: "",
    area: "",
    mobile: "",
    password: "",
    confirm_password: "",
    gender: null,
    dob: null,
  });

  const { postRequest, getRequest, putRequest } = PostRequestHook();
  const navigate = useNavigate();

  const onDrop = (acceptedFiles) => {
    const reader = new FileReader();
    reader.onload = () => setUploadedImage(reader.result);
    reader.readAsDataURL(acceptedFiles[0]);
  };

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  const validationSchema = Yup.object({
    username: Yup.string().required("Required"),
    name: Yup.string().required("Required"),
    address: Yup.string(),
    city: Yup.string().required("Required"),
    pincode: Yup.string().required("Required"),
    secondary_contact_no: Yup.string(),
    email: Yup.string().email("Invalid email").required("Required"),
    state: Yup.string().required("Required"),
    area: Yup.string().required("Required"),
    mobile: Yup.string().required("Required"),
    ...(Soid
      ? {} // No password validation for editing
      : {
          password: Yup.string().required("Required"),
          confirm_password: Yup.string()
            .required("Required")
            .oneOf([Yup.ref("password"), null], "Passwords must match"),
        }),
  });

  const handleSubmit = async (values) => {
    setIsLoading(true);
    let payload = {
      name: values.name,
      city: values.city,
      email: values.email,
      pincode: values.pincode,
      state: values.state,
      secondary_contact_no: String(values.secondary_contact_no) || null,
      area: values.area || null,
      address: values.address,
      contact_no: String(values.mobile),
      profile_image: uploadedImage || null,
      username: values.username,
      gender: null, // Explicitly set gender to null
      dob: null, // Explicitly set dob to null
      ...(Soid
        ? {}
        : {
            password: values.password,
            confirmPassword: values.confirm_password,
          }),
    };

    try {
      let response;
      if (Soid) {
       console.log("=======>",payload);
        delete payload.username;
        response = await putRequest(`${CONFIG_URL.UPDATE_SO_BY_ID}/${Soid}`,payload);
      } else {
        response = await postRequest(CONFIG_URL.CREATE_SO, payload);
      }

      if (response.status === 200 || response.status === 201) {
        showNotification("success", response.data.message);
        navigate("/managero");
      } else {
        showNotification(
          "error",
          response?.response?.data?.message ||
            response?.data?.message ||
            "An unexpected error occurred"
        );
      }
    } catch (error) {
      showNotification("error", "Failed to submit the form.");
    } finally {
      setIsLoading(false);
    }
  };

  const fetchingdata = async () => {
    if (Soid) {
      setIsLoading(true);
      try {
        const response = await getRequest(`${CONFIG_URL.GET_SO_BY_ID}/${Soid}`);
        if (response.status === 200) {
          const data = response.data;
          setInitialValues({
            username: data.username,
            emp_id: data.emp_id,
            name: data.name,
            address: data.address,
            city: data.city,
            pincode: data.pincode,
            secondary_contact_no: data.secondary_contact_no,
            email: data.email,
            state: data.state,
            area: data.area,
            mobile: data.contact_no,
            password: "",
            confirm_password: "",
            gender: null,
            dob: null,
          });
          setUploadedImage(data.profile_image || null);
        }
      } catch (error) {
        // showNotification("error", "Failed to fetch data for editing.");
      } finally {
        setIsLoading(false);
      }
    }
  };

  useEffect(() => {
    if (Soid) {
      fetchingdata();
    }
  }, [Soid]);

  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isLoading]);

  return (
    <Page
      className={"dashboard mt-3"}
      title={Soid ? "Edit SO" : "Add SO"}
      breadcrumbs={[
        { name: "Home", active: false },
        { name: Soid ? "Edit SO" : "Add SO", active: true },
      ]}
    >
      <div className="bg-white p-3">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            handleSubmit(values);
          }}
          enableReinitialize
        >
          {() => (
            <Form>
              <Row>
                {isLoading && <Loader />}
                <Col md={6}>
                  {Soid ? (
                    <BootstrapForm.Group controlId="username" className="mb-2">
                      <BootstrapForm.Label className="mb-1">
                        Username <span className="text-danger">*</span>
                      </BootstrapForm.Label>
                      <Field
                        name="username"
                        className="form-control"
                        disabled={Boolean(Soid)}
                      />
                      <ErrorMessage
                        name="username"
                        component="div"
                        className="text-danger"
                      />
                    </BootstrapForm.Group>
                  ) : null}
                </Col>
                <Col md={6}>
                  {Soid ? (
                    <BootstrapForm.Group controlId="emp_id" className="mb-2">
                      <BootstrapForm.Label className="mb-1">
                        Emp. No <span className="text-danger">*</span>
                      </BootstrapForm.Label>
                      <Field name="emp_id" className="form-control" disabled />
                    </BootstrapForm.Group>
                  ) : null}
                </Col>
                <Col md={6}>
                  <BootstrapForm.Group controlId="name" className="mb-2">
                    <BootstrapForm.Label className="mb-1">
                      Employe Name <span className="text-danger">*</span>
                    </BootstrapForm.Label>
                    <Field name="name" className="form-control" />
                    <ErrorMessage
                      name="name"
                      component="div"
                      className="text-danger"
                    />
                  </BootstrapForm.Group>
                </Col>
                <Col md={6}>
                  <BootstrapForm.Group controlId="email" className="mb-2">
                    <BootstrapForm.Label className="mb-1">
                      Email <span className="text-danger">*</span>
                    </BootstrapForm.Label>
                    <Field name="email" className="form-control" type="email" />
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="text-danger"
                    />
                  </BootstrapForm.Group>
                </Col>
                <Col md={6}>
                  <BootstrapForm.Group controlId="mobile" className="mb-2">
                    <BootstrapForm.Label className="mb-1">
                      Phone number <span className="text-danger">*</span>
                    </BootstrapForm.Label>
                    <Field name="mobile" className="form-control" />
                    <ErrorMessage
                      name="mobile"
                      component="div"
                      className="text-danger"
                    />
                  </BootstrapForm.Group>
                </Col>

                <Col md={6}>
                  <BootstrapForm.Group
                    controlId="secondary_contact_no"
                    className="mb-2"
                  >
                    <BootstrapForm.Label className="mb-1">
                      Secondary Phone number{" "}
                      {/* <span className="text-danger">*</span> */}
                    </BootstrapForm.Label>
                    <Field
                      name="secondary_contact_no"
                      className="form-control"
                    />
                    {/* <ErrorMessage
                      name="secondary_contact_no"
                      component="div"
                      className="text-danger"
                    /> */}
                  </BootstrapForm.Group>
                </Col>
                <Col md={6}>
                  <BootstrapForm.Group controlId="address" className="mb-2">
                    <BootstrapForm.Label className="mb-1">
                      Address
                    </BootstrapForm.Label>
                    <Field name="address" className="form-control" />
                    <ErrorMessage
                      name="address"
                      component="div"
                      className="text-danger"
                    />
                  </BootstrapForm.Group>
                </Col>
                <Col md={6}>
                  <BootstrapForm.Group controlId="city" className="mb-2">
                    <BootstrapForm.Label className="mb-1">
                      City <span className="text-danger">*</span>
                    </BootstrapForm.Label>
                    <Field name="city" className="form-control" />
                    <ErrorMessage
                      name="city"
                      component="div"
                      className="text-danger"
                    />
                  </BootstrapForm.Group>
                </Col>
                <Col md={6}>
                  <BootstrapForm.Group controlId="area" className="mb-2">
                    <BootstrapForm.Label className="mb-1">
                      Area <span className="text-danger">*</span>
                    </BootstrapForm.Label>
                    <Field name="area" className="form-control" />
                    <ErrorMessage
                      name="area"
                      component="div"
                      className="text-danger"
                    />
                  </BootstrapForm.Group>
                </Col>
                <Col md={6}>
                  <BootstrapForm.Group controlId="state" className="mb-2">
                    <BootstrapForm.Label className="mb-1">
                      State <span className="text-danger">*</span>
                    </BootstrapForm.Label>
                    <Field name="state" className="form-control" />
                    <ErrorMessage
                      name="state"
                      component="div"
                      className="text-danger"
                    />
                  </BootstrapForm.Group>
                </Col>
                <Col md={6}>
                  <BootstrapForm.Group controlId="pincode" className="mb-2">
                    <BootstrapForm.Label className="mb-1">
                      Pincode <span className="text-danger">*</span>
                    </BootstrapForm.Label>
                    <Field name="pincode" className="form-control" />
                    <ErrorMessage
                      name="pincode"
                      component="div"
                      className="text-danger"
                    />
                  </BootstrapForm.Group>
                </Col>
                {/* <Col md={6}></Col>
                <Col md={6}>
                  {Soid ? (
                    <BootstrapForm.Group controlId="emp_id" className="mb-2">
                      <BootstrapForm.Label className="mb-1">
                        Emp. No <span className="text-danger">*</span>
                      </BootstrapForm.Label>
                      <Field name="emp_id" className="form-control" disabled />
                    </BootstrapForm.Group>
                  ) : null}
                </Col> */}
              </Row>
              <Col md={6}>
                <div className="mt-4">
                  <BootstrapForm.Label>
                    Image Upload <span className="text-danger">*</span>
                  </BootstrapForm.Label>

                  <Card>
                    <OverlayTrigger
                      placement="top"
                      overlay={
                        <Tooltip>Drag & drop or click to upload image</Tooltip>
                      }
                    >
                      <div
                        {...getRootProps()}
                        style={{ textAlign: "center", cursor: "pointer" }}
                      >
                        <input {...getInputProps()} />

                        <img
                          src={uploadedImage ? uploadedImage : defaultAvatar}
                          alt="Uploaded Preview"
                          style={{
                            width: 120,
                            height: 120,
                            borderRadius: "50%",
                          }}
                        />
                      </div>
                    </OverlayTrigger>
                  </Card>
                </div>
              </Col>

              {Soid ? null : (
                <>
                  <h5 className="mt-4 mb-3">Login Credentials</h5>
                  <Row>
                    <Col md={4}>
                      <BootstrapForm.Group
                        controlId="username"
                        className="mb-2"
                      >
                        <BootstrapForm.Label className="mb-1">
                          Username <span className="text-danger">*</span>
                        </BootstrapForm.Label>
                        <Field
                          name="username"
                          className="form-control"
                          disabled={Boolean(Soid)}
                        />
                        <ErrorMessage
                          name="username"
                          component="div"
                          className="text-danger"
                        />
                      </BootstrapForm.Group>
                    </Col>

                    <Col md={4}>
                      <BootstrapForm.Group
                        controlId="password"
                        className="mb-2"
                      >
                        <BootstrapForm.Label className="mb-1">
                          Password<span className="text-danger">*</span>
                        </BootstrapForm.Label>
                        <Field
                          name="password"
                          className="form-control"
                          type="password"
                        />
                        <ErrorMessage
                          name="password"
                          component="div"
                          className="text-danger"
                        />
                      </BootstrapForm.Group>
                    </Col>
                    <Col md={4}>
                      <BootstrapForm.Group
                        controlId="confirm_password"
                        className="mb-2"
                      >
                        <BootstrapForm.Label className="mb-1">
                          Confirm Password<span className="text-danger">*</span>
                        </BootstrapForm.Label>
                        <Field
                          name="confirm_password"
                          className="form-control"
                          type="password"
                        />
                        <ErrorMessage
                          name="confirm_password"
                          component="div"
                          className="text-danger"
                        />
                      </BootstrapForm.Group>
                    </Col>
                  </Row>
                </>
              )}

              <div className="text-end">
                <Button type="submit" variant="outline-primary mt-4">
                  {Soid ? "Update" : "Save"}
                </Button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </Page>
  );
};

export default AddNewRO;
