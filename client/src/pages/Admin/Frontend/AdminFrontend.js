import React, { useEffect, useState } from "react";
import MainSidebar from "../AdminDashboard/SidebarAdmin/SidebarAdmin";
import axios from "axios";
import { IconButton} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

const AdminCourseInfo = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [file, setFile] = useState(null);
  const [show, setShow] = useState(false);
  const [lgShow, setLgShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true)
  };

  const axiosInstance = axios.create({ baseURL: process.env.REACT_APP_API_URL })

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('name', name);
    formData.append('description', description);
    formData.append('img', file);

    axiosInstance.post('/post-front', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
      .then(response => console.log(response.data))
      .catch(error => console.error('Error:', error));
  };

  const [items, setItems] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosInstance.get('/');
        setItems(response.data);
      } catch (error) {
        console.error('Failed to fetch items: ' + error.message);
      }
    };

    fetchData();
  }, []);


  return (
    <>
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
                  <div className="main-card card d-flex h-100 flex-column">
                    <div className="card-body">
                      <h5 className="card-title py-2">Create New User</h5>
                      <form onSubmit={handleSubmit}>
                        <div className="row">
                          <div className="col-4">
                            <div className="mb-3">
                              <label className="form-label">Name</label>
                              <input
                                name="userName"
                                value={name} onChange={e => setName(e.target.value)}
                                required
                                className="form-control"
                                placeholder="Enter user name"
                              />
                            </div>
                          </div>

                          <div className="col-4">
                            <div className="mb-3">
                              <label className="form-label">Description</label>
                              <input
                                type="text"
                                name="email"
                                value={description}
                                onChange={e => setDescription(e.target.value)}
                                required
                                className="form-control"
                                placeholder="Enter user email"
                              />
                            </div>
                          </div>
                          <div className="col-4">
                            <div className="mb-3">
                              <label className="form-label"> Thumbnail</label>
                              <input
                                type="file"
                                className="form-control"
                                required
                                filename="img"
                                onChange={e => setFile(e.target.files[0])}
                                id="custom-file"
                                custom
                              />
                            </div>
                          </div>

                          <div className="col-12">
                            <button type="submit" className="btn bgBlue btn-dipBlue text-black">
                              {loading ? 'Creating...' : 'Create'}
                            </button>
                          </div>
                        </div>
                      </form>

                      {toast && <div className="alert alert-success mt-3">User created successfully!</div>}
                    </div>
                  </div>
                </div>
              </div>
           
            <div className="row mt-4" id="deleteTableItem">
              <div className="col-md-12">
                <div className="card mb-5">
                  <div className="card-body">
                    <div className="table-responsive-lg text-center">
                      <table id="dataTable" className="table">
                        <thead className="">
                          <tr>
                      
                            <th><strong>Name</strong></th>
                            <th><strong>Description</strong></th>
                            <th><strong>Image</strong></th>
                            <th><strong>Action</strong></th>
                          </tr>
                        </thead>
                        <tbody>
                          {items.map((items) => (
                            <tr key={items._id}>
                      
                              <td className="tableProduct">
                                <div className="listproduct-section">
                                  <div className="listproducts-image">
                                    <img src="http://admin.razinskills.com/storage/category/image/0NYHYf4srP01JPgdJwOCWNUC1GxRsdPzmA2fMffP.png" />
                                  </div>
                                  <div className="product-pera">
                                    <p className="priceDis">{items.name}</p>
                                  </div>
                                </div>
                              </td>
                              <td className="tableCustomar">
                            {items.description}
                              </td>
                              <td>
                                <div className="listproduct-section">
                                  <div className="listproducts-image">
                                    <img
                                      style={{ height: "40px", width: "60px", objectFit: "contain" }}
                                      src={items.pic}
                                      alt=""
                                    />
                                  </div>

                                </div>
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
    </>
  );
};

export default AdminCourseInfo;
