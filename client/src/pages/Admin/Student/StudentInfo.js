import React, { useEffect, useState } from "react";
import MainSidebar from "../AdminDashboard/SidebarAdmin/SidebarAdmin";
import axios from "axios";
import { IconButton} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";


const StudentInfo = () => {

  const [data, setData] = useState([]);
  const axiosInstance = axios.create({baseURL : process.env.REACT_APP_API_URL})
  const userList = async () => {
    const user = await axiosInstance.get("/users/student",{
        headers:{
            "Authorization":"Bearer "+localStorage.getItem("auth_token")
        }
    })
    setData(user.data.studentInfo)
    //console.log(user.data.teacherInfo)
  };

  useEffect(() => {
    userList()
  }, []);
  return (
    <div>
      <div className="app-container app-theme-white body-tabs-shadow fixed-sidebar fixed-header" id="appContent">
        <div className="app-main">
          <MainSidebar />
          <div className="col mt-4 app-content">
            <div className="row px-3">
              <div className="page-title-actions px-3 d-flex">
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a href="#">Dashboard</a></li>
                    <li className="breadcrumb-item"><a href="#">Instructor</a></li>
                    <li className="breadcrumb-item active" aria-current="page">Create</li>
                  </ol>
                </nav>
              </div>
              <div className="row" id="deleteTableItem">
              <div className="col-md-12">
                <div className="card mb-5">
                  <div className="card-body">
                    <div className="table-responsive-lg">
                      <table id="dataTable" className="table">
                        <thead className="">
                          <tr>
                      
                            <th><strong>Name</strong></th>
                            <th><strong>Email</strong></th>
                            <th><strong>Role</strong></th>
                            <th><strong>Action</strong></th>
                          </tr>
                        </thead>
                        <tbody >
                          {data.map((items) => (
                            <tr key={items._id}>
                      
                              <td className="tableProduct">
                                <div className="listproduct-section">
                                  <div className="listproducts-image">
                                    <img src="http://admin.razinskills.com/storage/category/image/0NYHYf4srP01JPgdJwOCWNUC1GxRsdPzmA2fMffP.png" />
                                  </div>
                                  <div className="product-pera">
                                    <p className="priceDis">{items.userName}</p>
                                  </div>
                                </div>
                              </td>
                              <td className="tableCustomar">
                            {items.email}
                              </td>
                              <td className="tableCustomar">
                            {items.role}
                              </td>
                           
                              <td className="tableAction">
                                <div className="action-icon">
                                  <IconButton 
                                  // onClick={() => handleDeleteUser(items._id)}
                                  >
                                    <DeleteIcon style={{ color: "red" }} />
                                  </IconButton>
                                
                                </div>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
    </div>
    </div>
    </div>
    </div>
    </div>
  );
};

export default StudentInfo;
