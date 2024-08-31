import React, { useState } from 'react';
import axios from 'axios';
import {
  Grid, TextField, Button, Typography, MenuItem, Box, Container,
} from '@mui/material';
import styled from '@emotion/styled';

const FormContainer = styled(Box)`
  padding: 16px;
  background-color: #fff;
  border-radius: 8px;
  max-width: 900px;
  margin: auto;
`;

const SectionHeader = styled(Typography)`
  color: #9c27b0;
  margin-bottom: 8px;
`;

const FormControl = styled('div')`
  margin-bottom: 16px;
  width: 100%;
`;

const SubmitButton = styled(Button)`
  background-color: #2196f3;
  margin-top: 16px;
  color: #fff;
  &:hover {
    background-color: #1976d2;
  }
`;

const Label = styled('label')`
  margin-bottom: 4px;
  display: block;
  font-weight: bold;
`;

const SmallTextField = styled(TextField)`
  & .MuiInputBase-input {
    padding: 8px 14px;
  }
`;

const FileInput = styled('input')`
  margin-top: 8px;
  width: 100%;
`;

function ChannelForm() {
  const [channelInfo, setChannelInfo] = useState({
    channel_name: '',
    channel_address: '',
    channel_email: '',
    channel_phone: '',
    channel_info: '',
    contact_name: '',
    gender: '',
    contact_phone: '',
    contact_email: '',
    contact_password: '',
  });
  const [channelAddressFile, setChannelAddressFile] = useState(null); // State for the document file
  const [channelImageFile, setChannelImageFile] = useState(null); // State for the image file

  const handleChange = (e) => {
    setChannelInfo({
      ...channelInfo,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileChange = (e) => {
    setChannelAddressFile(e.target.files[0]); // Set the selected document file
  };

  const handleImageChange = (e) => {
    setChannelImageFile(e.target.files[0]); // Set the selected image file
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('channel_name', channelInfo.channel_name);
    formData.append('channel_address', channelInfo.channel_address);
    formData.append('channel_email', channelInfo.channel_email);
    formData.append('channel_phone', channelInfo.channel_phone);
    formData.append('channel_info', channelInfo.channel_info);
    formData.append('contact_name', channelInfo.contact_name);
    formData.append('gender', channelInfo.gender);
    formData.append('contact_phone', channelInfo.contact_phone);
    formData.append('contact_email', channelInfo.contact_email);
    formData.append('contact_password', channelInfo.contact_password);
    formData.append('channel_address_file', channelAddressFile); // Append the document file
    formData.append('channel_image_file', channelImageFile); // Append the image file

    try {
      const response = await axios.post('http://localhost:5000/api/channel', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      alert('Channel information submitted successfully!');
      setChannelInfo({
        channel_name: '',
        channel_address: '',
        channel_email: '',
        channel_phone: '',
        channel_info: '',
        contact_name: '',
        gender: '',
        contact_phone: '',
        contact_email: '',
        contact_password: '',
      });
      setChannelAddressFile(null); // Clear the document file input
      setChannelImageFile(null); // Clear the image file input
    } catch (error) {
      console.error('Error submitting channel info:', error);
    }
  };

  return (
    
    <Container maxWidth="lg">
      <FormContainer component="form" onSubmit={handleSubmit}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <SectionHeader variant="subtitle1">RESELLER INFO</SectionHeader>
            <FormControl>
              <Label htmlFor="channel_name">Name</Label>
              <SmallTextField
                fullWidth
                id="channel_name"
                name="channel_name"
                value={channelInfo.channel_name}
                onChange={handleChange}
                required
                variant="outlined"
              />
            </FormControl>
            <FormControl>
              <Label htmlFor="channel_address">Address</Label>
              <SmallTextField
                fullWidth
                id="channel_address"
                name="channel_address"
                value={channelInfo.channel_address}
                onChange={handleChange}
                variant="outlined"
              />
            </FormControl>
            <FormControl>
              <Label htmlFor="channel_email">Email</Label>
              <SmallTextField
                fullWidth
                id="channel_email"
                name="channel_email"
                value={channelInfo.channel_email}
                onChange={handleChange}
                variant="outlined"
              />
            </FormControl>
            <FormControl>
              <Label htmlFor="channel_phone">Phone Number</Label>
              <SmallTextField
                fullWidth
                id="channel_phone"
                name="channel_phone"
                value={channelInfo.channel_phone}
                onChange={handleChange}
                variant="outlined"
              />
            </FormControl>
            <FormControl>
              <Label htmlFor="channel_info">Details</Label>
              <SmallTextField
                fullWidth
                id="channel_info"
                name="channel_info"
                value={channelInfo.channel_info}
                onChange={handleChange}
                variant="outlined"
                multiline
                rows={3}
              />
            </FormControl>
          </Grid>
          <Grid item xs={12} md={6}>
            <SectionHeader variant="subtitle1">CONTACT PERSON</SectionHeader>
            <FormControl>
              <Label htmlFor="contact_name">Name</Label>
              <SmallTextField
                fullWidth
                id="contact_name"
                name="contact_name"
                value={channelInfo.contact_name}
                onChange={handleChange}
                variant="outlined"
              />
            </FormControl>
            <FormControl>
              <Label htmlFor="contact_phone">Phone Number</Label>
              <SmallTextField
                fullWidth
                id="contact_phone"
                name="contact_phone"
                value={channelInfo.contact_phone}
                onChange={handleChange}
                variant="outlined"
              />
            </FormControl>
            <FormControl>
              <Label htmlFor="channel_address_file">Verify (Upload Document)</Label>
              <FileInput
                id="channel_address_file"
                type="file"
                name="channel_address_file"
                onChange={handleFileChange}
              />
            </FormControl>
            <FormControl>
              <Label htmlFor="contact_email">Email</Label>
              <SmallTextField
                fullWidth
                id="contact_email"
                name="contact_email"
                value={channelInfo.contact_email}
                onChange={handleChange}
                variant="outlined"
              />
            </FormControl>
            <FormControl>
              <Label htmlFor="contact_password">Password</Label>
              <SmallTextField
                fullWidth
                id="contact_password"
                name="contact_password"
                type="password"
                value={channelInfo.contact_password}
                onChange={handleChange}
                variant="outlined"
              />
            </FormControl>


            <FormControl>
              <Label htmlFor="channel_image_file">Upload Channel Image</Label>
              <FileInput
                id="channel_image_file"
                type="file"
                name="channel_image_file"
                onChange={handleImageChange}
              />
            </FormControl>
          </Grid>
          {/* Rest of the form remains unchanged */}
        </Grid>
        <SubmitButton type="submit" variant="contained">
          Submit
        </SubmitButton>
      </FormContainer>
    </Container>
  );
}

export default ChannelForm;
