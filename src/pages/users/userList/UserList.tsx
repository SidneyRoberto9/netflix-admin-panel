import './userList.css';

import { DataGrid } from '@material-ui/data-grid';
import { DeleteOutline, SupervisorAccountOutlined } from '@material-ui/icons';
import { UserContext } from 'context/userContext';
import { changeAdminUser, deleteUser, getUsers } from 'context/userContext/apiCalls';
import { User } from 'models/user.model';
import { useContext, useEffect } from 'react';

export default function UserList() {
  const { state, dispatch } = useContext(UserContext);

  useEffect(() => {
    getUsers(dispatch);
  }, [dispatch]);

  const handleDelete = (id: string) => {
    deleteUser(id, dispatch);
  };

  const handleChangeAdmin = (user: User) => {
    changeAdminUser(user, dispatch);
  };

  const columns = [
    { field: '_id', headerName: 'ID', width: 250 },
    {
      field: 'user',
      headerName: 'User',
      width: 250,
      renderCell: (params: any) => {
        return (
          <div className="userListUser">
            <img className="userListImg" src={params.row.profilePic} alt="" />
            {params.row.username}
          </div>
        );
      },
    },
    { field: 'email', headerName: 'Email', width: 250 },
    { field: 'isAdmin', headerName: 'IsAdmin', width: 130 },
    {
      field: 'action',
      headerName: 'Action',
      width: 150,
      renderCell: (params: any) => {
        return (
          <>
            <DeleteOutline
              className="userListDelete"
              onClick={() => handleDelete(params.row._id)}
            />
            <SupervisorAccountOutlined
              className="userListChange"
              onClick={() => handleChangeAdmin(params.row)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="userList">
      <DataGrid
        rows={state.users}
        disableSelectionOnClick
        columns={columns}
        pageSize={10}
        checkboxSelection
        getRowId={(r) => r._id}
      />
    </div>
  );
}
