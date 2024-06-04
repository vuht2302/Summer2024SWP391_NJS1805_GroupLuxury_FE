import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { postCreateProduct } from "../../service/ProductService";
import { toast } from "react-toastify";
const ModalEditProduct = (props) => {
  const { show, handleClose, dataProductEdit } = props;
  const [name, setName] = useState("");
  const [job, setJob] = useState("");
  const handleEditProduct = () => {};
  useEffect(() => {
    if (show) {
      // check khi nao modal mo len ms chay
      setName(dataProductEdit.first_name);
    }
  }, [dataProductEdit]); // chay khi co su thay doi cua dataproduct

  console.table(">> Check props ", dataProductEdit);
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit A Product</Modal.Title>
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
          <Button variant="primary" onClick={() => handleEditProduct()}>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default ModalEditProduct;
