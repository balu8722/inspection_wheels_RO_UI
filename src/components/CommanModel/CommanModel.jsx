import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./CommanModel.scss"
const CommanModel = ({
  show,
  onClose,
  size = "lg",
  title = "",
  children,
  buttontext = '',
  closebuttontext = '',
  backdrop = "static",
  keyboard = false,
}) => {
  return (
    <Modal
      className="comman_model"
      size={size}
      show={show}
      onHide={onClose}
      backdrop={backdrop}
      keyboard={keyboard}
    >
      <Modal.Header className="border-0 py-3" closeButton>
        <Modal.Title>
          <h5>{title}</h5>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>{children}</Modal.Body>
    </Modal>
  );
};

export default CommanModel;
