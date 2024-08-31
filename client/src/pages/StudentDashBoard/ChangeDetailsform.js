import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  TextField,
  TextareaAutosize,
  Typography,
  Grid,
  Select,
  MenuItem,
  InputLabel,
  Snackbar,
  Alert,
} from '@mui/material';
import Sidebar from './SideBar';

function StudentDetails() {
  const [formData, setFormData] = useState({
    userName: '',
    email: '',
    address: {
      street: '',
      city: '',
      state: '',
      zip: '',
      country: '',
    },
    description: '',
    links: [''],
    identityVerifications: [''],
    phoneNumber: '',
    schoolId: '',
    schoolName: '',
    studentClass: '',
  });
  const [userData, setUserData] = useState(null);
  const [schools, setSchools] = useState([]);
  const [loading, setLoading] = useState(true);
  const [userDetails, setUserDetails] = useState(null);
  const [toast, setToast] = useState({ open: false, message: '', severity: '' });
  const axiosInstance = axios.create({ baseURL: process.env.REACT_APP_API_URL });

  useEffect(() => {
    const userDataFromStorage = localStorage.getItem('user');
    if (userDataFromStorage) {
      setUserData(JSON.parse(userDataFromStorage));
    }
  }, []);

  useEffect(() => {
    const fetchSchools = async () => {
      try {
        const response = await axiosInstance.get('/schoolRegistration/list');
        setSchools(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching schools:', error);
        setLoading(false);
      }
    };

    fetchSchools();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const nameArray = name.split('.');
    if (nameArray.length > 1) {
      const [parent, child] = nameArray;
      setFormData((prevFormData) => ({
        ...prevFormData,
        [parent]: {
          ...prevFormData[parent],
          [child]: value,
        },
      }));
    } else {
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value,
      }));
    }
  };

  const fetchUserDetails = async (userId) => {
    try {
      const response = await axiosInstance.get(`/auth/details/${userId}`);
      setUserDetails(response.data);
      setFormData(response.data);
    } catch (error) {
      console.error('Error fetching user details:', error);
    }
  };

  const handleLinkChange = (index, e) => {
    const newLinks = [...formData.links];
    newLinks[index] = e.target.value;
    setFormData({ ...formData, links: newLinks });
  };

  const addLinkField = () => {
    setFormData({ ...formData, links: [...formData.links, ''] });
  };

  const handleIdentityChange = (index, e) => {
    const newIdentities = [...formData.identityVerifications];
    newIdentities[index] = e.target.value;
    setFormData({ ...formData, identityVerifications: newIdentities });
  };

  const addIdentityField = () => {
    setFormData({
      ...formData,
      identityVerifications: [...formData.identityVerifications, ''],
    });
  };

  const handleSchoolChange = (e) => {
    const selectedSchool = schools.find((school) => school._id === e.target.value);
    setFormData({
      ...formData,
      schoolId: selectedSchool._id,
      schoolName: selectedSchool.school_name,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userId = userData._id; // Assuming userData contains the userId
      const { schoolId, schoolName } = formData;

      await axiosInstance.post('/auth/notify', {
        userId,
        schoolId,
        schoolName,
      });

      await axiosInstance.put(`/auth/details/${userId}`, formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      fetchUserDetails(userId);

      setToast({
        open: true,
        message: 'Request sent for approval.',
        severity: 'info',
      });
    } catch (error) {
      console.error('There was an error sending the request:', error);
      setToast({
        open: true,
        message: 'Error sending the request.',
        severity: 'error',
      });
    }
  };

  const handleCloseToast = () => {
    setToast({ ...toast, open: false });
  };

  return (
    <div>
      <div
        className="app-container app-theme-white body-tabs-shadow fixed-sidebar fixed-header bg-white"
        id="appContent"
      >
        <div className="app-main">
          <Sidebar />
          <div className="col mt-4">
            <div className="row">
              <Box
                p={6}
                borderRadius="8px"
                borderColor="grey.300"
                width="100%"
                bgcolor="background.paper"
              >
                <form onSubmit={handleSubmit}>
                  {userData ? (
                    <Grid container spacing={4}>
                      <Grid item xs={12} md={6}>
                        <FormControl fullWidth>
                          <TextField
                            label="User Name"
                            type="text"
                            name="userName"
                            value={userData.userName}
                            onChange={handleChange}
                            variant="outlined"
                          />
                        </FormControl>
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <FormControl fullWidth>
                          <TextField
                            label="Email"
                            type="email"
                            name="email"
                            value={userData.email}
                            onChange={handleChange}
                            variant="outlined"
                            InputProps={{
                              readOnly: true,
                            }}
                          />
                        </FormControl>
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <FormControl fullWidth>
                          <TextField
                            label="Street"
                            type="text"
                            name="address.street"
                            value={formData.address.street}
                            onChange={handleChange}
                            variant="outlined"
                          />
                        </FormControl>
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <FormControl fullWidth>
                          <TextField
                            label="City"
                            type="text"
                            name="address.city"
                            value={formData.address.city}
                            onChange={handleChange}
                            variant="outlined"
                          />
                        </FormControl>
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <FormControl fullWidth>
                          <TextField
                            label="State"
                            type="text"
                            name="address.state"
                            value={formData.address.state}
                            onChange={handleChange}
                            variant="outlined"
                          />
                        </FormControl>
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <FormControl fullWidth>
                          <TextField
                            label="ZIP"
                            type="text"
                            name="address.zip"
                            value={formData.address.zip}
                            onChange={handleChange}
                            variant="outlined"
                          />
                        </FormControl>
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <FormControl fullWidth>
                          <TextField
                            label="Country"
                            type="text"
                            name="address.country"
                            value={formData.address.country}
                            onChange={handleChange}
                            variant="outlined"
                          />
                        </FormControl>
                      </Grid>
                      <Grid item xs={12}>
                        <FormControl fullWidth>
                          <TextField
                            label="Description"
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            variant="outlined"
                            multiline
                            rows={4}
                          />
                        </FormControl>
                      </Grid>
                      <Grid item xs={12}>
                        <FormControl fullWidth>
                          <FormLabel>Links</FormLabel>
                          {formData.links.map((link, index) => (
                            <TextField
                              key={index}
                              type="text"
                              value={link}
                              onChange={(e) => handleLinkChange(index, e)}
                              variant="outlined"
                              margin="dense"
                            />
                          ))}
                          <Button
                            variant="contained"
                            color="primary"
                            onClick={addLinkField}
                            size="small"
                            style={{ marginTop: '8px' }}
                          >
                            Add Link
                          </Button>
                        </FormControl>
                      </Grid>
                      <Grid item xs={12}>
                        <FormControl fullWidth>
                          <FormLabel>Identity Verifications</FormLabel>
                          {formData.identityVerifications.map((identity, index) => (
                            <TextField
                              key={index}
                              type="text"
                              value={identity}
                              onChange={(e) => handleIdentityChange(index, e)}
                              variant="outlined"
                              margin="dense"
                            />
                          ))}
                          <Button
                            variant="contained"
                            color="primary"
                            onClick={addIdentityField}
                            size="small"
                            style={{ marginTop: '8px' }}
                          >
                            Add Identity
                          </Button>
                        </FormControl>
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <FormControl fullWidth>
                          <TextField
                            label="Phone Number"
                            type="text"
                            name="phoneNumber"
                            value={formData.phoneNumber}
                            onChange={handleChange}
                            variant="outlined"
                          />
                        </FormControl>
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <FormControl fullWidth variant="outlined">
                          <InputLabel id="school-label">School Name</InputLabel>
                          <Select
                            labelId="school-label"
                            label="School Name"
                            name="schoolId"
                            value={formData.schoolId}
                            onChange={handleSchoolChange}
                          >
                            <MenuItem value="">
                              <em>Select School</em>
                            </MenuItem>
                            {schools.map((school) => (
                              <MenuItem key={school._id} value={school._id}>
                                {school.school_name}
                              </MenuItem>
                            ))}
                          </Select>
                        </FormControl>
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <FormControl fullWidth variant="outlined">
                          <InputLabel id="class-label">Class</InputLabel>
                          <Select
                            labelId="class-label"
                            label="Class"
                            name="studentClass"
                            value={formData.studentClass}
                            onChange={handleChange}
                          >
                            <MenuItem value="">
                              <em>Select Class</em>
                            </MenuItem>
                            {[...Array(12).keys()].map((num) => (
                              <MenuItem key={num + 1} value={num + 1}>
                                {num + 1}
                              </MenuItem>
                            ))}
                          </Select>
                        </FormControl>
                      </Grid>
                      <Grid item xs={12}>
                        <Box display="flex" justifyContent="center">
                          <Button
                            variant="contained"
                            color="primary"
                            type="submit"
                            style={{ width: '300px' }}
                          >
                            Register
                          </Button>
                        </Box>
                      </Grid>
                    </Grid>
                  ) : (
                    <Typography variant="h6">Loading...</Typography>
                  )}
                </form>
              </Box>
            </div>
          </div>
        </div>
      </div>
      <Snackbar
        open={toast.open}
        autoHideDuration={5000}
        onClose={handleCloseToast}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert onClose={handleCloseToast} severity={toast.severity} sx={{ width: '100%' }}>
          {toast.message}
        </Alert>
      </Snackbar>
    </div>
  );
}

export default StudentDetails;
