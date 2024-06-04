import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
const ModalConfirm = (props) => {
  const { show, handleClose, dataProductDelete } = props;
  const confirmDelete = () => {};
  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Delete A Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="body-add-new">
            Are you sure to delete this product
            <br />
            <b>email = {dataProductDelete.email} ?</b>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={() => confirmDelete()}>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default ModalConfirm;
