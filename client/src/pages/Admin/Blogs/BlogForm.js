import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import MainSidebar from "../AdminDashboard/SidebarAdmin/SidebarAdmin";
import {
    Container, TextField, Button, Card, CardContent, CardActions, Grid, Typography, Table, TableBody,
    TableCell, TableContainer, TableHead, TableRow, Paper,   Accordion, AccordionSummary, AccordionDetails
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const BlogForm = () => {
    const [formData, setFormData] = useState({
        heading: '',
        description: '',
        link: '',
        title: '',
        text: '',
        cards: [{ icon: '', heading: '', description: '' }],
        features: '',
        overview: ''
    });
    const [image, setImage] = useState(null);
    const [createdBlogId, setCreatedBlogId] = useState(null);
    const [blogs, setBlogs] = useState([]); // State to store the list of blogs
    const [selectedBlogDetails, setSelectedBlogDetails] = useState(null);
    const axiosInstance = axios.create({ baseURL: process.env.REACT_APP_API_URL });

    useEffect(() => {
        // Fetch blogs when the component loads
        const fetchBlogs = async () => {
            try {
                const response = await axiosInstance.get('/blogsall');
                setBlogs(response.data); // Assuming the response is an array of blogs
            } catch (error) {
                console.error('Error fetching blogs:', error);
            }
        };

        fetchBlogs();
    }, []);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleImageChange = (e) => {
        setImage(e.target.files[0]);
    };

    const handleCardChange = (index, e) => {
        const updatedCards = [...formData.cards];
        updatedCards[index][e.target.name] = e.target.value;
        setFormData({ ...formData, cards: updatedCards });
    };

    const addCard = () => {
        setFormData({ ...formData, cards: [...formData.cards, { icon: '', heading: '', description: '' }] });
    };

    const removeCard = (index) => {
        const updatedCards = [...formData.cards];
        updatedCards.splice(index, 1);
        setFormData({ ...formData, cards: updatedCards });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = new FormData();
        form.append('image', image);
        Object.keys(formData).forEach(key => {
            if (key === 'cards') {
                form.append('cards', JSON.stringify(formData[key]));
            } else {
                form.append(key, formData[key]);
            }
        });

        try {
            const response = await axiosInstance.post('/create', form, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            alert('Blog created successfully!');
            setCreatedBlogId(response.data.blog._id);
            setBlogs([...blogs, response.data.blog]); // Add the new blog to the list
        } catch (error) {
            console.error('Error creating blog:', error.response || error.message);
            alert(`Error creating blog: ${error.response?.data?.error || error.message}`);
        }
    };

    const handleViewDetails = (blog) => {
        setSelectedBlogDetails(blog);
    };

    return (
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
                        <div className="row">
                            <div className="col-md-12">
                                <Grid item xs={12}>
                                    <Card>
                                        <CardContent>
                                            <form onSubmit={handleSubmit}>
                                                {/* Form Fields */}
                                                <TextField
                                                    label="Heading"
                                                    name="heading"
                                                    value={formData.heading}
                                                    onChange={handleChange}
                                                    fullWidth
                                                    margin="normal"
                                                    required
                                                />
                                                <TextField
                                                    label="Description"
                                                    name="description"
                                                    value={formData.description}
                                                    onChange={handleChange}
                                                    fullWidth
                                                    margin="normal"
                                                    multiline
                                                    rows={4}
                                                    required
                                                />
                                                <TextField
                                                    label="Link"
                                                    name="link"
                                                    value={formData.link}
                                                    onChange={handleChange}
                                                    fullWidth
                                                    margin="normal"
                                                    required
                                                />
                                                <Button variant="contained" component="label" fullWidth margin="normal">
                                                    Upload Image
                                                    <input type="file" hidden onChange={handleImageChange} />
                                                </Button>
                                                <Typography variant="h6" className='mt-4'>Blog Content</Typography>
                                                <TextField
                                                    label="Title"
                                                    name="title"
                                                    value={formData.title}
                                                    onChange={handleChange}
                                                    fullWidth
                                                    margin="normal"
                                                    required
                                                />
                                                <TextField
                                                    label="Text"
                                                    name="text"
                                                    value={formData.text}
                                                    onChange={handleChange}
                                                    fullWidth
                                                    margin="normal"
                                                    multiline
                                                    rows={6}
                                                    required
                                                />
                                                <Typography variant="h6">Cards</Typography>
                                                {formData.cards.map((card, index) => (
                                                    <Card key={index} sx={{ marginBottom: 2 }}>
                                                        <CardContent>
                                                            <TextField
                                                                label="Icon URL"
                                                                name="icon"
                                                                value={card.icon}
                                                                onChange={(e) => handleCardChange(index, e)}
                                                                fullWidth
                                                                margin="normal"
                                                                required
                                                            />
                                                            <TextField
                                                                label="Card Heading"
                                                                name="heading"
                                                                value={card.heading}
                                                                onChange={(e) => handleCardChange(index, e)}
                                                                fullWidth
                                                                margin="normal"
                                                                required
                                                            />
                                                            <TextField
                                                                label="Card Description"
                                                                name="description"
                                                                value={card.description}
                                                                onChange={(e) => handleCardChange(index, e)}
                                                                fullWidth
                                                                margin="normal"
                                                                multiline
                                                                rows={2}
                                                                required
                                                            />
                                                        </CardContent>
                                                        <CardActions>
                                                            <Button color="error" onClick={() => removeCard(index)}>Remove Card</Button>
                                                        </CardActions>
                                                    </Card>
                                                ))}
                                                <Button variant="contained" onClick={addCard}>Add Card</Button>

                                                <TextField
                                                    label="Features"
                                                    name="features"
                                                    value={formData.features}
                                                    onChange={handleChange}
                                                    fullWidth
                                                    margin="normal"
                                                    multiline
                                                    rows={6}
                                                    required
                                                />

                                                <TextField
                                                    label="Overview"
                                                    name="overview"
                                                    value={formData.overview}
                                                    onChange={handleChange}
                                                    fullWidth
                                                    margin="normal"
                                                    multiline
                                                    rows={6}
                                                    required
                                                />

                                                <Button variant="contained" color="primary" type="submit" fullWidth sx={{ mt: 2 }}>
                                                    Create Blog
                                                </Button>

                                                {createdBlogId && (
                                                    <Link to={`/blog/${createdBlogId}`}>View Blog</Link>
                                                )}
                                            </form>
                                        </CardContent>
                                    </Card>
                                    <Grid item xs={12}>
            <Card>
                <CardContent>
                    <Typography variant="h6" className='mt-4'>Existing Blogs</Typography>
                    <TableContainer component={Paper} style={{ marginBottom: '20px' }}>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Blog Heading</TableCell>
                                    <TableCell>Description</TableCell>
                                    <TableCell>Link</TableCell>
                                    <TableCell>Image</TableCell>
                                    <TableCell>Actions</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {blogs.map(blog => (
                                    <TableRow key={blog._id}>
                                        <TableCell>{blog.heading}</TableCell>
                                        <TableCell>{blog.description}</TableCell>
                                        <TableCell>{blog.link}</TableCell>
                                        <TableCell>
                                            {blog.image ? (
                                                <img src={blog.image} alt={blog.heading} style={{ width: '100px', height: 'auto' }} />
                                            ) : (
                                                'No Image'
                                            )}
                                        </TableCell>
                                        <TableCell>
                                            <Button onClick={() => handleViewDetails(blog)}>View Details</Button>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>

                    {/* Blog Details Accordion */}
                    {selectedBlogDetails && (
                        <Accordion defaultExpanded>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls={`panel-${selectedBlogDetails._id}-content`}
                                id={`panel-${selectedBlogDetails._id}-header`}
                            >
                                <Typography variant="h6">Details for {selectedBlogDetails.heading}</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <TableContainer component={Paper} style={{ marginBottom: '20px' }}>
                                    <Table>
                                        <TableHead>
                                            <TableRow>
                                                <TableCell>Title</TableCell>
                                                <TableCell>Description</TableCell>
                                                <TableCell>Features</TableCell>
                                                <TableCell>Overview</TableCell>
                                                <TableCell>Cards</TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            <TableRow>
                                                <TableCell>{selectedBlogDetails.details?.title || 'N/A'}</TableCell>
                                                <TableCell>{selectedBlogDetails.details?.text || 'N/A'}</TableCell>
                                                <TableCell>{selectedBlogDetails.details?.features || 'N/A'}</TableCell>
                                                <TableCell>{selectedBlogDetails.details?.overview || 'N/A'}</TableCell>
                                                <TableCell>
                                                    {selectedBlogDetails.details?.cards?.length > 0 ? 'See below' : 'No Cards'}
                                                </TableCell>
                                            </TableRow>
                                        </TableBody>
                                    </Table>
                                </TableContainer>

                                {/* Card Details */}
                                {selectedBlogDetails.details?.cards?.length > 0 && (
                                    <>
                                        <Typography variant="h6" className='mt-4 text-center'>Card Details</Typography>
                                        <TableContainer component={Paper} style={{ marginBottom: '20px' }}>
                                            <Table>
                                                <TableHead>
                                                    <TableRow>
                                                        <TableCell>Card Icon</TableCell>
                                                        <TableCell>Card Heading</TableCell>
                                                        <TableCell>Card Description</TableCell>
                                                    </TableRow>
                                                </TableHead>
                                                <TableBody>
                                                    {selectedBlogDetails.details.cards.map((card, index) => (
                                                        <TableRow key={index}>
                                                            <TableCell>
                                                                <i className={card.icon} alt={`icon-${index}`} style={{ width: '30px', height: '30px' }} />
                                                            </TableCell>
                                                            <TableCell>{card.heading}</TableCell>
                                                            <TableCell>{card.description}</TableCell>
                                                        </TableRow>
                                                    ))}
                                                </TableBody>
                                            </Table>
                                        </TableContainer>
                                    </>
                                )}
                            </AccordionDetails>
                        </Accordion>
                    )}
                </CardContent>
            </Card>
        </Grid>
                                </Grid>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogForm;
