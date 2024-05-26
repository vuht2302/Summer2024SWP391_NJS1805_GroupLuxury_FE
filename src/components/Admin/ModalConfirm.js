import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "react-toastify/dist/ReactToastify.css";
import { deleteUser } from "../../service/UserService";
import { toast } from "react-toastify";
const ModalConFirm = (props) => {
  const { show, handleClose, dataUserDelete, handleDeleteUserFormModal } =
    props;
  const confirmDelete = async () => {
    let res = await deleteUser(dataUserDelete.id);
    if (res && +res.statusCode === 204) {
      toast.success("Delete User Succeed!");
      handleClose();
      handleDeleteUserFormModal(dataUserDelete);
    } else {
      toast.error("Error Delete User");
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
          <Modal.Title>Delete A User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="body-add-new">
            <h5> Are you sure to delete this user?</h5>
            <h5> email = {dataUserDelete.email}</h5>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={confirmDelete}>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalConFirm;
