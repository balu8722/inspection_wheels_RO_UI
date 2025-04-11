import React, { useMemo, useCallback } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { PasswordShowHide } from '../../components/PasswordShow/PasswordShowHide';

const ChangePassword = (props) => {
    
  const handleSubmit = (values)=> {
    console.log("values",values)
    // if(isLogin){
    //   dispatch(setIsAuth(
    //     {
    //       isAuth:true,
    //       data:{role:values.username=="admin@gmail.com"?"Admin":"RO"}
    //     }
    //   ))
    //   localStorage.setItem("isAuth",true)
    //   localStorage.setItem("role",values.username=="admin@gmail.com"?"Admin":"RO")
    //   navigate("/dashboards",{replace:true})
    // }else{
    //   alert("Reuest sent to the Admin")
    // }
  };


  const formik = useFormik({
    initialValues: {
      currentPassword: '',
      newPassword: '',
      confirmPassword: '',
    },
    validate: (values) => {
        let errors = {};
        if (!values.currentPassword) {
            errors.currentPassword = "Required";
        }
        if (!values.newPassword) {
            errors.newPassword = "Required";
        } 
        if (!values.confirmPassword || (values.confirmPassword != values.newPassword)) {
            errors.confirmPassword = "Must match with New Password";
        }

        return errors;
    },
    onSubmit: (values,{resetForm}) => {
      resetForm()
      handleSubmit(values)
    },
  });

  return (
    <>
    <div className="p-4 bg-white mx-2 my-4 my-md-5 mw-500 mx-auto rounded">
        <Form onSubmit={formik.handleSubmit}>
                                <PasswordShowHide
                                    name="currentPassword"
                                    input_label="Current Password *"
                                    lableClass="font_color"
                                    placeholder="Enter Current Password"
                                    handleChange={formik.handleChange}
                                    handleBlur={formik.handleBlur}
                                    value={formik.values.currentPassword}
                                    formikValidation={formik.touched.currentPassword && formik.errors.currentPassword ? (
                                        <>
                                            <span className="text-danger small">{formik.errors.currentPassword}</span>
                                        </>
                                    ) : null}
                                />
                                <PasswordShowHide
                                    name="newPassword"
                                    input_label="New Password *"
                                    lableClass="font_color"
                                    placeholder="Enter New Password"
                                    handleChange={formik.handleChange}
                                    handleBlur={formik.handleBlur}
                                    value={formik.values.newPassword}
                                    formikValidation={formik.touched.newPassword && formik.errors.newPassword ? (
                                        <>
                                            <span className="text-danger small">{formik.errors.newPassword}</span>
                                        </>
                                    ) : null}
                                />
                                <PasswordShowHide
                                    name="confirmPassword"
                                    input_label="Confirm Password *"
                                    lableClass="font_color"
                                    placeholder="Enter Confirm Password"
                                    handleChange={formik.handleChange}
                                    handleBlur={formik.handleBlur}
                                    value={formik.values.confirmPassword}
                                    formikValidation={formik.touched.confirmPassword && formik.errors.confirmPassword ? (
                                        <>
                                            <span className="text-danger small">{formik.errors.confirmPassword}</span>
                                        </>
                                    ) : null}
                                />
                                <div className="text-end mt-4">
                                    <Button  type="submit" variant="outline-primary">
                                        Update Password
                                    </Button>
                                </div>
        </Form>
    </div>  
    </>
  );
};

export default ChangePassword;
