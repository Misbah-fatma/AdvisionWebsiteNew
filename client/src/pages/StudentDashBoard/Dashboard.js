import React, { useEffect, useState } from "react";
import Sidebar from './SideBar';
import axios from "axios";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  VStack,
  Grid,
  ChakraProvider,
  Center,
  Select,
  useToast,
} from '@chakra-ui/react';
import { Link } from "react-router-dom";

const Student = () => {
 
  const [userData, setUserData] = useState(null);
  const axiosInstance = axios.create({ baseURL: process.env.REACT_APP_API_URL });
  const userId = userData ? userData._id : null;
  const username = userData?.userName;
  const activity = userData?.role;
  const email = userData?.email;
  const [userDetails, setUserDetails] = useState(null);

  useEffect(() => {
    const userDataFromStorage = localStorage.getItem('user');
    console.log('Retrieved from storage:', userDataFromStorage);

    if (userDataFromStorage) {
      try {
        const parsedData = JSON.parse(userDataFromStorage);
        setUserData(parsedData);
      } catch (error) {
        console.error('Failed to parse user data:', error);
      }
    }
  }, []);

  return (
    <div>
      <div className="app-container app-theme-white body-tabs-shadow fixed-sidebar fixed-header" id="appContent">
        <div className="app-main">
          <Sidebar />
          <div className="col mt-4 app-content">
            <div className="app-main-inner">
              <div className="page-title-actions px-3 d-flex">
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a href="/">Dashboard</a></li>
                    <li className="breadcrumb-item active" aria-current="page">Details</li>
                  </ol>
                </nav>
              </div>
              <div className="row" id="deleteTableItem">
                <div className="col-md-12">
                  <div className="card mb-5">
                    <div className="card-body">
                      <Box overflowX="auto">
                        <table id="dataTable" className="table">
                          <thead>
                            <tr style={{ textAlign: 'center' }}>
                              <th><strong>Student</strong></th>
                              <th><strong>Email</strong></th>
                              <th style={{ width: '15%' }}><strong>Role</strong></th>
                              <th><strong>Last Activity</strong></th>
                              <th><strong>Status</strong></th>
                            </tr>
                          </thead>
                          <tbody style={{ textAlign: 'center' }}>
                            {userData ? (
                              <tr key={userData._id}>
                                <td className="tableProduct">
                                  <div className="listproduct-section">
                                    <div className="listproducts-image">
                                      <img src="http://admin.razinskills.com/storage/category/image/0NYHYf4srP01JPgdJwOCWNUC1GxRsdPzmA2fMffP.png" alt="Student" />
                                    </div>
                                    <div className="product-pera">
                                      <p className="priceDis">{userData.userName}</p>
                                    </div>
                                  </div>
                                </td>
                                <td className="tableCustomar">
                                  <span className="badge rounded-pill text-bg-success">{userData.email}</span>
                                </td>
                                <td className="tableId"><span></span> {userData.role}</td>
                                <td className="tableStatus">
                                  <div className="statusItem">
                                    <div></div>
                                    <div>
                                      <span>{userData.updatedAt}</span>
                                    </div>
                                  </div>
                                </td>
                                <td className="tableStatus">
                                  <div className="statusItem">
                                    <div className={`circleDot animatedCompleted ${userData.status === 'Active' ? 'greenDot' : ''}`}></div>
                                    <div className="statusText">
                                      <span className={`status${userData.status === 'Active' ? 'Active' : 'Pending'}`}>
                                        {userData.status === 'Pending' && (
                                          <div className="spinner-border text-info " role="status" style={{ width: '1rem', height: '1rem', textDecoration: 'none'}}></div>
                                        )}
                                        {userData.status}
                                      </span>
                                    </div>
                                  </div>
                                </td>
                              </tr>
                            ) : (
                              <Link to="/login">Login</Link>
                            )}
                          </tbody>
                        </table>
                      </Box>
                    </div>
                  </div>

                  {/* New Table for Extra Details */}
                  <div className="card mb-5">
                    <div className="card-body">
                      <Box overflowX="auto">
                        <table id="extraDetailsTable" className="table">
                          <thead>
                            <tr>
                              <th><strong>Address</strong></th>
                              <th><strong>Description</strong></th>
                              <th><strong>Links</strong></th>
                              <th style={{ width: '10%' }}><strong>Id Proof</strong></th>
                              <th><strong>Phone </strong></th>
                              <th><strong>School Name</strong></th>
                              <th><strong>Class</strong></th>
                              <th style={{ width: '9%' }}><strong>Status</strong></th>
                              <th><strong>Action</strong></th>
                            </tr>
                          </thead>
                          <tbody>
                            {userDetails && (
                              <tr key={userDetails._id}>
                                <td className="tableField">{userDetails.address.street}, {userDetails.address.city}, {userDetails.address.state}, {userDetails.address.zip}, {userDetails.address.country}</td>
                                <td className="tableValue">{userDetails.description}</td>
                                <td className="tableValue">{userDetails.links.join(', ')}</td>
                                <td className="tableValue">{userDetails.identityVerifications.join(', ')}</td>
                                <td className="tableValue">{userDetails.phoneNumber}</td>
                                <td className="tableValue">{userDetails.schoolName}</td>
                                <td className="tableValue">{userDetails.studentClass}</td>
                                <td className="tableStatus">
                                  <div className="statusItem">
                                    {userDetails.status === 'Active' && (
                                      <div className={`circleDot animatedCompleted greenDot`}></div>
                                    )}
                                    {userDetails.status === 'Pending' && (
                                      <div className="spinner-border text-info" role="status" style={{ width: '1rem', height: '1rem', textDecoration: 'none' }}></div>
                                    )}
                                    <div className="statusText">
                                      {userDetails.status === '' ? (
                                        <span className="statusChoose">Choose a school</span>
                                      ) : (
                                        <span className={`status${userDetails.status}`}>
                                          {userDetails.status}
                                        </span>
                                      )}
                                    </div>
                                  </div>
                                </td>
                                <td>
                                  <Button colorScheme="blue" size="sm">Edit</Button>
                                </td>
                              </tr>
                            )}
                          </tbody>
                        </table>
                      </Box>
                    </div>
                  </div>
                  {/* End of New Table for Extra Details */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Student;
