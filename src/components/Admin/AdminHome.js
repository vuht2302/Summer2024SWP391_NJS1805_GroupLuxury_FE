import ListStaff from "./ListStaff";
import { Container } from "react-bootstrap";
import NavbarAdmin from "./NavbarAdmin";
import { ToastContainer, toast } from "react-toastify";
const AdminHome = (props) => {
  return (
    <>
      <div className="app-container">
        <NavbarAdmin />
        <Container>
          <ListStaff />
        </Container>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
};
export default AdminHome;
