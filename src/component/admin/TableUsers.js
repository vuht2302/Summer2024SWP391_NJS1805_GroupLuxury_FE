import { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import { fetchAllUser } from "../../service/UserService";
const TableUsers = (props) => {
  const [listUsers, setListUsers] = useState([]);
  useEffect(() => {
    //Call Api
    getUsers();
  }, []);
  const getUsers = async () => {
    // hung ket qua
    let res = await fetchAllUser();
    if (res && res.data) {
      setListUsers(res.data);
    }
  };
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>ID</th>
          <th>Email</th>
          <th>First Name</th>
          <th>Last Name</th>
        </tr>
      </thead>
      <tbody>
        {listUsers &&
          listUsers.length > 0 &&
          listUsers.map((user, index) => {
            return (
              <tr key={`user-${index}`}>
                <td>{index + 1}</td>
                <td>{user.email}</td>
                <td>{user.last_name}</td>
                <td>{user.first_name}</td>
              </tr>
            );
          })}
      </tbody>
    </Table>
  );
};

export default TableUsers;
