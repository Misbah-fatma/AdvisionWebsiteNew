import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Box, Typography, Grid, Paper, Link } from '@mui/material';
import Navbar from './Navbar';
import Footer from "./Footer"


function ChannelDetails() {
  const [channels, setChannels] = useState([]);

  useEffect(() => {
    const fetchChannels = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/channels');
        setChannels(response.data);
      } catch (error) {
        console.error('Error fetching channels:', error);
      }
    };

    fetchChannels();
  }, []);

  return (
    <>
    <Navbar/>
    <Box sx={{ p: 4 }}>
      {channels.map((channel) => (
        <Paper elevation={3} sx={{ p: 3, mb: 4 }} key={channel._id}>
          <Grid container spacing={10}>
            <Grid item xs={12} sm={4} md={3}>
              <Box
                component="img"
                src={channel.channel_image || '/assets/img/bg6'}
                alt={channel.channel_name}
                sx={{ width: '100%', height: 'auto', borderRadius: 2 }}
              />
            </Grid>
            <Grid item xs={12} sm={8} md={9}>
              <Typography variant="h4" gutterBottom>
                {channel.channel_name}
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <Typography variant="h6">Channel Address:</Typography>
                  <Typography variant="body1">{channel.channel_address}</Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography variant="h6">Channel Email:</Typography>
                  <Typography variant="body1">{channel.channel_email}</Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography variant="h6">Channel Phone:</Typography>
                  <Typography variant="body1">{channel.channel_phone}</Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography variant="h6">Channel Info:</Typography>
                  <Typography variant="body1">{channel.channel_info}</Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography variant="h6">Contact Name:</Typography>
                  <Typography variant="body1">{channel.contact_name}</Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography variant="h6">Gender:</Typography>
                  <Typography variant="body1">{channel.gender}</Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography variant="h6">Contact Phone:</Typography>
                  <Typography variant="body1">{channel.contact_phone}</Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography variant="h6">Contact Email:</Typography>
                  <Typography variant="body1">{channel.contact_email}</Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="h6">Channel Address File:</Typography>
                  {channel.channel_address_file ? (
                    <Link
                      href={`http://localhost:5000/${channel.channel_address_file}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View File
                    </Link>
                  ) : (
                    <Typography variant="body1">No file uploaded</Typography>
                  )}
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      ))}
    </Box>
    <Footer/>
    </>
  );
}

export default ChannelDetails;
