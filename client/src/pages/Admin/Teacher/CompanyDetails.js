import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  Box,
  Link,
  IconButton,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Button,
  Typography
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import MainSidebar from "../AdminDashboard/SidebarAdmin/SidebarAdmin";
import 'bootstrap/dist/css/bootstrap.min.css';

const CompanyDetails = () => {
  const [channels, setChannels] = useState([]);
  const [selectedChannel, setSelectedChannel] = useState(null);
  const [isEditDialogOpen, setEditDialogOpen] = useState(false);
  const axiosInstance = axios.create({ baseURL: process.env.REACT_APP_API_URL })

  useEffect(() => {
    const fetchChannels = async () => {
      try {
        const response = await axiosInstance.get('/channels');
        setChannels(response.data);
      } catch (error) {
        console.error('Error fetching channels:', error);
      }
    };

    fetchChannels();
  }, []);

  const handleEditClick = (channel) => {
    setSelectedChannel(channel);
    setEditDialogOpen(true);
  };

  const handleDeleteClick = async (channelId) => {
    try {
      await axiosInstance.delete(`/channels/${channelId}`);
      setChannels(channels.filter((channel) => channel._id !== channelId));
    } catch (error) {
      console.error('Error deleting channel:', error);
    }
  };

  const handleEditSave = async () => {
    try {
      await axiosInstance.put(`/channels/${selectedChannel._id}`, selectedChannel);
      setChannels(channels.map((channel) =>
        channel._id === selectedChannel._id ? selectedChannel : channel
      ));
      setEditDialogOpen(false);
    } catch (error) {
      console.error('Error updating channel:', error);
    }
  };

  const handleEditChange = (e) => {
    setSelectedChannel({ ...selectedChannel, [e.target.name]: e.target.value });
  };

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
              <div className="row mt-2" id="deleteTableItem">              
                <div className="col-md-12">
                <div className="card mb-5">
                <div className="card-body">
                  <Box sx={{ width: '100%', overflow: 'scroll' }}>
                  <div className="table-responsive-lg text-center">
                  <table id="dataTable" className="table">
    <thead>
      <tr className='text-center'>
        <th>Image</th>
        <th>Name</th>
        <th>Address</th>
        <th>Email</th>
        <th>Phone</th>
        <th>Info</th>
        <th>Contact Name</th>
        <th>Contact Phone</th>
        <th>Contact Email</th>
        <th>Address File</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {channels.map((channel) => (
        <tr key={channel._id} className="align-middle">
          <td className="text-center">
            <img
              src={channel.channel_image || '/assets/img/bg6.jpg'}
              alt={channel.channel_name}
              style={{ width: 80, height: 'auto', borderRadius: '5px' }}
            />
          </td>
          <td className="text-justified">{channel.channel_name}</td>
          <td className="text-justified">{channel.channel_address}</td>
          <td className="text-justified">{channel.channel_email}</td>
          <td className="text-justified">{channel.channel_phone}</td>
          <td className="text-justified">{channel.channel_info}</td>
          <td className="text-justified">{channel.contact_name}</td>
          <td className="text-justified">{channel.contact_phone}</td>
          <td className="text-justified">{channel.contact_email}</td>
          <td className="text-justified">
            {channel.channel_address_file ? (
              <Link
                href={`process.env.REACT_APP_API_URL${channel.channel_address_file}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                View File
              </Link>
            ) : (
              <Typography variant="body2">No file uploaded</Typography>
            )}
          </td>
          <td className="text-center">
            <IconButton onClick={() => handleEditClick(channel)}>
              <EditIcon color="primary" />
            </IconButton>
            <IconButton onClick={() => handleDeleteClick(channel._id)}>
              <DeleteIcon color="secondary" />
            </IconButton>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>


                  </Box>
                  </div>
                  </div>
                </div>
              </div>
             
            </div>

          </div>
          
        </div>
      </div>


      {/* Edit Dialog */}
      {selectedChannel && (
        <Dialog open={isEditDialogOpen} onClose={() => setEditDialogOpen(false)}>
          <DialogTitle>Edit Channel</DialogTitle>
          <DialogContent>
            <TextField
              margin="dense"
              name="channel_name"
              label="Channel Name"
              value={selectedChannel.channel_name || ''}
              onChange={handleEditChange}
              fullWidth
            />
            <TextField
              margin="dense"
              name="channel_address"
              label="Channel Address"
              value={selectedChannel.channel_address || ''}
              onChange={handleEditChange}
              fullWidth
            />
            <TextField
              margin="dense"
              name="channel_email"
              label="Channel Email"
              value={selectedChannel.channel_email || ''}
              onChange={handleEditChange}
              fullWidth
            />
            <TextField
              margin="dense"
              name="channel_phone"
              label="Channel Phone"
              value={selectedChannel.channel_phone || ''}
              onChange={handleEditChange}
              fullWidth
            />
            <TextField
              margin="dense"
              name="channel_info"
              label="Channel Info"
              value={selectedChannel.channel_info || ''}
              onChange={handleEditChange}
              fullWidth
            />
            <TextField
              margin="dense"
              name="contact_name"
              label="Contact Name"
              value={selectedChannel.contact_name || ''}
              onChange={handleEditChange}
              fullWidth
            />
            <TextField
              margin="dense"
              name="contact_phone"
              label="Contact Phone"
              value={selectedChannel.contact_phone || ''}
              onChange={handleEditChange}
              fullWidth
            />
            <TextField
              margin="dense"
              name="contact_email"
              label="Contact Email"
              value={selectedChannel.contact_email || ''}
              onChange={handleEditChange}
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setEditDialogOpen(false)}>Cancel</Button>
            <Button onClick={handleEditSave} color="primary">Save</Button>
          </DialogActions>
        </Dialog>
      )}
    </div>
  );
};

export default CompanyDetails;
