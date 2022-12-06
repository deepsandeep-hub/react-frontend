import React from "react";
import data from "../data";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function AdminDashboard(props) {
    // const { userDeatils } = props;
    // console.log(userDeatils)
    const Dummydata = data.prodcts
   
  return (
   
    <div style={{height:'580px'}}>
      <h1>Admin Panel</h1>
      <div
        style={{
          height: "auto",
          width: "100%",
          display: "flex",
          gap: "10px",
          flexDirection: "column",
        }}
      >
        {/* <div
          style={{
            display: "flex",
            // height: "50px",
            // width: "100%",
            borderRadius: "8px",
            backgroundColor: "#f2d813",
            borderColor: "black",
            borderWidth: "4px",
            // justifyContent: "space-between",
            gap: "2px 120px"
          }}
        >
          <p className="p-tag-admin-list">Sl. No.</p>
          <p className="p-tag-admin-list">Plot Name</p>
          <p className="p-tag-admin-list">Plot Price /sq</p>
          <p className="p-tag-admin-list">Status</p>
          <p className="p-tag-admin-list">Name</p>
          <p className="p-tag-admin-list">Email</p>
        </div>
        {Dummydata && Dummydata.length > 0
          ? Dummydata.map((i) => {
            const userData = localStorage.getItem(`user-${i.id}`)
            console.log(userData)
            const user = userData && JSON.parse(userData)
              return (
                <div
                  style={{
                    display: "flex",
                    // height: "80px",
                    // width: "100%",
                    borderRadius: "8px",
                    backgroundColor: "#f23113",
                    borderColor: "black",
                    borderWidth: "4px",
                    // justifyContent: "space-between",
                    gap: "2px 120px"
                  }}
                >
                  <p className="p-tag-admin-list">{i.id}</p>
                  <p className="p-tag-admin-list">{i.name}</p>
                  <p className="p-tag-admin-list">{i.price}</p>
                  <p className="p-tag-admin-list">{i.bookingStatus}</p>
                  {user && <p className="p-tag-admin-list">{user.name}</p>}
                  {user && <p className="p-tag-admin-list">{user.email}</p>}
                </div>
              );
            })
          : "No data found"} */}
      </div>
      <div>
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell >Serial No.</TableCell>
            <TableCell align="right">Plot Name</TableCell>
            <TableCell align="right">Plot Price per Sqft</TableCell>
            <TableCell align="right">Status</TableCell>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">Email</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {Dummydata && Dummydata.length > 0 ?

        Dummydata.map((i) => {
          const userData = localStorage.getItem(`user-${i.id}`)
            console.log(userData)
            const user = userData && JSON.parse(userData)
            return(
          <TableRow
              key={i.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {i.id}
              </TableCell>
              <TableCell align="right">{i.name}</TableCell>
              <TableCell align="right">{i.price}</TableCell>
              <TableCell align="right">{i.bookingStatus}</TableCell>
              {user && <TableCell align="right">{user.name}</TableCell>}
              {user && <TableCell align="right">{user.email}</TableCell>}
            </TableRow>
            )
        }):"No data"}
        </TableBody>
      </Table>
    </TableContainer>
      </div>
    </div>
  );
}

export default AdminDashboard;
