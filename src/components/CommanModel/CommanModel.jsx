import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./CommanModel.scss"
const CommanModel = ({
  show,
  onClose,
  // onSubmit,
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
      <Modal.Header className="border-0 py-3" closeButton>
        <Modal.Title>
          <h5>{title}</h5>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>{children}</Modal.Body>
      {/* <Modal.Footer>
        <Button
          className="text-white fontsize-14"
          variant="secondary"
          onClick={onClose}
        >
          {closebuttontext}
        </Button>
        <Button
          type="submit"
          className="text-white fontsize-14"
          variant="primary"
          onClick={onSubmit}
        >
          {buttontext}
        </Button>
      </Modal.Footer> */}
    </Modal>
  );
};

export default CommanModel;
