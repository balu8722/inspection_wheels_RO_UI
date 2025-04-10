import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./CommanModel.scss"
const CommanModel = ({
  show,
  onClose,
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
      size="lg"
      show={show}
      onHide={onClose}
      backdrop={backdrop}
      keyboard={keyboard}
    >
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{children}</Modal.Body>
      <Modal.Footer>
        <Button
          className="text-white fontsize-14"
          variant="secondary"
          onClick={onClose}
        >
          {closebuttontext}
        </Button>
        <Button className="text-white fontsize-14" variant="primary">
          {buttontext}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CommanModel;
