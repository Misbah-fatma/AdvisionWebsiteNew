import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
    Button, TextField, Table, TableBody, TableCell, TableContainer,
    TableHead, TableRow, Paper, Avatar, Grid, Select, MenuItem,
    FormControl, IconButton, Dialog, DialogTitle, DialogContent, DialogActions, InputLabel
} from '@mui/material';
import { Edit as EditIcon, Delete as DeleteIcon } from '@mui/icons-material';
import MainSidebar from "../AdminDashboard/SidebarAdmin/SidebarAdmin";

const Blog = () => {
    const [blogs, setBlogs] = useState([]);
    const [blogTitle, setBlogTitle] = useState('');
    const [blogLink, setblogLink] = useState('');
    const [blogContent, setBlogContent] = useState('');
    const [blogImage, setBlogImage] = useState(null);
    const [blogRole, setBlogRole] = useState('National');
    const [editingBlog, setEditingBlog] = useState(null);
    const [openDialog, setOpenDialog] = useState(false);
    const [loading, setLoading] = useState(false);
    const [toast, setToast] = useState(false);
    const axiosInstance = axios.create({ baseURL: process.env.REACT_APP_API_URL })
    const fetchBlogs = async () => {
        try {
            const response = await axiosInstance.get('/blogs');
            setBlogs(response.data);
        } catch (error) {
            console.error('Error fetching blogs:', error);
        }
    };

    useEffect(() => {
        fetchBlogs();
    }, []);

    const createBlog = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('title', blogTitle);
        formData.append('content', blogContent);
        formData.append('image', blogImage);
        formData.append('role', blogRole);
        formData.append('link', blogLink);

        try {
            await axiosInstance.post('/blogs', formData, {
                headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
            });
            resetForm();
            fetchBlogs();
        } catch (error) {
            console.error('Error creating blog:', error);
        }
    };

    const updateBlog = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('title', blogTitle);
        formData.append('content', blogContent);
        formData.append('image', blogImage);
        formData.append('role', blogRole);

        try {
            await axiosInstance.put(`/blogs/${editingBlog._id}`, formData, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                    'Content-Type': 'multipart/form-data'
                }
            });
            resetForm();
            setOpenDialog(false);
            fetchBlogs();
        } catch (error) {
            console.error('Error updating blog:', error);
        }
    };

    const deleteBlog = async (id) => {
        try {
            await axiosInstance.delete(`/blogs/${id}`, {
                headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
            });
            fetchBlogs();
        } catch (error) {
            console.error('Error deleting blog:', error);
        }
    };

    const startEdit = (blog) => {
        setEditingBlog(blog);
        setBlogTitle(blog.title);
        setBlogContent(blog.content);
        setBlogImage(null);
        setBlogRole(blog.role);
        setOpenDialog(true); // Open dialog
    };

    const resetForm = () => {
        setBlogTitle('');
        setBlogContent('');
        setBlogImage(null);
        setBlogRole('National');
        setEditingBlog(null);
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
                            <div className="row" id="deleteTableItem">
                                <div className="col-md-12">
                                    <div className="main-card card d-flex h-100 flex-column">
                                        <div className="card-body">
                                            <form onSubmit={createBlog}>
                                                <div className="row">
                                                    <div className="col-4">
                                                        <div className="mb-3">
                                                            <label className="form-label">Title</label>
                                                            <input
                                                                name="Title"
                                                                value={blogTitle}
                                                                onChange={(e) => setBlogTitle(e.target.value)}
                                                                required
                                                                className="form-control"
                                                                placeholder="Enter Title"
                                                            />
                                                        </div>
                                                    </div>

                                                    <div className="col-4">
                                                        <div className="mb-3">
                                                            <label className="form-label">Content</label>
                                                            <input
                                                                type="text"
                                                                label="Content"
                                                                value={blogContent}
                                                                onChange={(e) => setBlogContent(e.target.value)}
                                                                required
                                                                className="form-control"
                                                                placeholder="Enter Content"
                                                            />
                                                        </div>
                                                    </div>

                                                    <div className="col-4">
                                                        <div className="mb-3">
                                                            <label className="form-label">Link</label>
                                                            <input
                                                                type="text"
                                                                label="link"
                                                                value={blogLink}
                                                                onChange={(e) => setblogLink(e.target.value)}
                                                                required
                                                                className="form-control"
                                                                placeholder="Enter Link"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col-4">
                                                        <div className="mb-3">
                                                            <label className="form-label">Assign Role</label>
                                                            <select
                                                                as="select"
                                                                value={blogRole}
                                                                onChange={(e) => setBlogRole(e.target.value)}
                                                                required
                                                                className="form-control"
                                                                style={{ height: '43px' }}
                                                            >
                                                                <option value="">Select </option>
                                                                <option value="National">National</option>
                                                                <option value="International">International</option>
                                                            </select>
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
                                                                 onChange={(e) => setBlogImage(e.target.files[0])}
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
                                                            <th>Title</th>
                                                            <th>Content</th>
                                                            <th>Image</th>
                                                            <th>Role</th>
                                                            <th>Link</th>
                                                            <th>Actions</th>
                                                        </tr>
                                                    </thead>

                                                    <tbody>
                                                        {blogs.map((blog) => (
                                                            <tr key={blog._id}>
                                                                <td className="tableCustomar">{blog.title}</td>
                                                                <td className="tableCustomar">{blog.content.substring(0, 50)}...</td>
                                                                <div className="listproduct-section">
                                                                    <div className="listproducts-image">
                                                                        <img
                                                                            style={{ height: "40px", width: "60px", objectFit: "contain" }}
                                                                            src={blog.image}
                                                                            alt=""
                                                                        />
                                                                    </div>

                                                                </div>
                                                                <td className="tableCustomar">{blog.role}</td>
                                                                <td className="tableCustomar">{blog.link}</td>

                                                                <td className="tableAction">
                                                                    <div className="action-icon">
                                                                        <IconButton
                                                                            onClick={() => startEdit(blog)}
                                                                        >
                                                                            <EditIcon color="primary"/>

                                                                        </IconButton>
                                                                        <IconButton
                                                                            color="error"
                                                                            onClick={() => deleteBlog(blog._id)}
                                                                        >
                                                                            <DeleteIcon />
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



            {/* Edit Blog Dialog */}
            <Dialog open={openDialog} onClose={() => setOpenDialog(false)} maxWidth="md" fullWidth>
  <DialogTitle>Edit Blog</DialogTitle>
  <DialogContent>
    <form onSubmit={updateBlog}>
      <Grid container spacing={3}>
        <Grid item xs={12} sx={{ mt: 2 }}>
          <TextField
            fullWidth
            label="Title"
            value={blogTitle}
            onChange={(e) => setBlogTitle(e.target.value)}
            required
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Content"
            value={blogContent}
            onChange={(e) => setBlogContent(e.target.value)}
            multiline
            rows={4}
            required
          />
        </Grid>
        <Grid item xs={12}>
          <FormControl fullWidth>
            <Select
              value={blogRole}
              onChange={(e) => setBlogRole(e.target.value)}
              required
            >
              <MenuItem value="National">National</MenuItem>
              <MenuItem value="International">International</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Upload Image"
            InputProps={{
              startAdornment: (
                <Button component="label">
                  Upload
                  <input type="file" hidden onChange={(e) => setBlogImage(e.target.files[0])} />
                </Button>
              ),
            }}
          />
        </Grid>
      </Grid>
      <DialogActions sx={{ mt: 2 }}>
        <Button onClick={() => setOpenDialog(false)} color="secondary">
          Cancel
        </Button>
        <Button type="submit" variant="contained" color="primary">
          Save Changes
        </Button>
      </DialogActions>
    </form>
  </DialogContent>
</Dialog>

        </div>
    );
};

export default Blog;
