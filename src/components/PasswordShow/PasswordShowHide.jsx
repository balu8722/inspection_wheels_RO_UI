import React, { useState } from 'react'
// import { Images } from '../../utils/images';
import { Form } from 'react-bootstrap';
import { IoEyeOutline,IoEyeOffOutline } from "react-icons/io5";
import "./styles.scss"

export const PasswordShowHide = (props) => {
    const {
        input_label,
        type,
        placeholder,
        name,
        handleBlur,
        handleChange,
        value,
        lableClass,
        formikValidation,
        defaultValue,
        disabled, id
    } = props;
    const [isVisible, setVisible] = useState(false);

    const togglePassword = () => {
        setVisible(!isVisible)
    }

    return (
        <Form.Group className="mb-3 position-relative">
            <Form.Label className={lableClass}>{input_label}</Form.Label>
            <div className="position-relative">
            <Form.Control
                id={id}
                type={isVisible ? "text" : "password"}
                className="form-control"
                placeholder={placeholder}
                name={name}
                onBlur={handleBlur}
                onChange={handleChange}
                value={value}
                defaultValue={defaultValue}
                disabled={disabled}
            />
                {isVisible?<IoEyeOutline className='password_design' onClick={togglePassword}/>
                : <IoEyeOffOutline className='password_design'  onClick={togglePassword}/>}
            </div>
            {formikValidation}
        </Form.Group>
    )
}
