import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { deleteProduct } from "../../service/ProductService";
import { toast } from "react-toastify";
const ModalConfirm = (props) => {
  const { show, handleClose, dataProductDelete, handleDeleteProductFormModal } =
    props;
  const confirmDelete = async () => {
    let res = await deleteProduct(dataProductDelete.id);
    if (res && +res.statusCode === 204) {
      toast.success("Delete Product Succeed");
      handleClose();
      handleDeleteProductFormModal(dataProductDelete);
    } else {
      toast.error("Error Delete Product");
    }
  };
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
