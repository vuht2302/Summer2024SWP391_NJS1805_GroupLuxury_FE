import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { postCreateProduct } from "../../service/ProductService";
import { toast } from "react-toastify";
const ModalAddNew = (props) => {
  const { show, handleClose, handleUpdatetable } = props;
  const [name, setName] = useState("");
  const [job, setJob] = useState("");
  const handelSaveUser = async () => {
    let res = await postCreateProduct(name, job);
    if (res && res.id) {
      //success
      handleClose();
      setName(""); // sau khi thanh cong thi clear o input
      setJob("");
      toast.success("A Product is created success");
      handleUpdatetable({ first_name: name, id: res.id });
    } else {
      //error
      toast.error("Error !!");
    }
  };
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="body-add-new">
            <div class="form-group">
              <label className="form-label">Name</label>
              <input
                type="text"
                className="form-control"
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Job</label>
              <input
                type="text"
                className="form-control"
                value={job}
                onChange={(event) => setJob(event.target.value)}
              />
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={() => handelSaveUser()}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default ModalAddNew;
