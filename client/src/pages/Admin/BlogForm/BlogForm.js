import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
    Container,
    TextField,
    Button,
    MenuItem,
    Typography,
    Box,
    IconButton,
    Card,
    CardContent,
    Grid,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Accordion, AccordionSummary, AccordionDetails
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import MainSidebar from "../AdminDashboard/SidebarAdmin/SidebarAdmin";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const AddChannelForm = () => {

    const [channels, setChannels] = useState([]);
    const axiosInstance = axios.create({ baseURL: process.env.REACT_APP_API_URL });

    useEffect(() => {
        const fetchChannels = async () => {
            try {
                const response = await axiosInstance.get('/channelsAll');
                setChannels(response.data);
                console.log(response.data)
            } catch (error) {
                console.error('Error fetching channels:', error);
            }
        };

        fetchChannels();
    }, []);


    const [formData, setFormData] = useState({
        title: '',
        content: '',
        role: 'National',
        link: '',
        image: null,
        details: {
            title: '',
            text: '',
            cards: [{ icon: '', heading: '', description: '' }],
            features: '',
            overview: ''
        }
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleDetailsChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            details: {
                ...formData.details,
                [name]: value
            }
        });
    };

    const handleCardChange = (index, e) => {
        const { name, value } = e.target;
        const cards = [...formData.details.cards];
        cards[index][name] = value;
        setFormData({
            ...formData,
            details: {
                ...formData.details,
                cards
            }
        });
    };

    const handleAddCard = () => {
        setFormData({
            ...formData,
            details: {
                ...formData.details,
                cards: [...formData.details.cards, { icon: '', heading: '', description: '' }]
            }
        });
    };

    const handleFileChange = (e) => {
        setFormData({
            ...formData,
            image: e.target.files[0]
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = new FormData();

        data.append('title', formData.title);
        data.append('content', formData.content);
        data.append('role', formData.role);
        data.append('link', formData.link);
        data.append('image', formData.image);

        if (formData.details.title) {
            data.append('details[title]', formData.details.title);
            data.append('details[text]', formData.details.text);
            data.append('details[features]', formData.details.features);
            data.append('details[overview]', formData.details.overview);

            formData.details.cards.forEach((card, index) => {
                data.append(`details[cards][${index}][icon]`, card.icon);
                data.append(`details[cards][${index}][heading]`, card.heading);
                data.append(`details[cards][${index}][description]`, card.description);
            });
        }

        try {
            const response = await axiosInstance.post('/add-channel', data, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            console.log('Success:', response.data);
        } catch (error) {
            console.error('Error submitting the form:', error);
        }
    };
    const [selectedChannel, setSelectedChannel] = useState(null);

    const handleViewDetails = (channel) => {
        setSelectedChannel(channel);
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
                                            <Box component="form" onSubmit={handleSubmit} encType="multipart/form-data">
                                                <TextField
                                                    fullWidth
                                                    variant="outlined"
                                                    label="Title"
                                                    name="title"
                                                    value={formData.title}
                                                    onChange={handleInputChange}
                                                    margin="normal"
                                                    required
                                                />
                                                <TextField
                                                    fullWidth
                                                    variant="outlined"
                                                    label="Content"
                                                    name="content"
                                                    value={formData.content}
                                                    onChange={handleInputChange}
                                                    margin="normal"
                                                    multiline
                                                    rows={4}
                                                    required
                                                />
                                                <TextField
                                                    select
                                                    fullWidth
                                                    variant="outlined"
                                                    label="Role"
                                                    name="role"
                                                    value={formData.role}
                                                    onChange={handleInputChange}
                                                    margin="normal"
                                                    required
                                                >
                                                    <MenuItem value="National">National</MenuItem>
                                                    <MenuItem value="International">International</MenuItem>
                                                </TextField>
                                                <TextField
                                                    fullWidth
                                                    variant="outlined"
                                                    label="Link"
                                                    name="link"
                                                    value={formData.link}
                                                    onChange={handleInputChange}
                                                    margin="normal"
                                                />
                                                <Button
                                                    variant="contained"
                                                    component="label"
                                                    sx={{ marginTop: 2 }}
                                                >
                                                    Upload Image
                                                    <input
                                                        type="file"
                                                        hidden
                                                        name="image"
                                                        onChange={handleFileChange}
                                                        required
                                                    />
                                                </Button>

                                                <Typography variant="h5" component="h2" gutterBottom sx={{ marginTop: 4 }}>
                                                    Details
                                                </Typography>
                                                <TextField
                                                    fullWidth
                                                    variant="outlined"
                                                    label="Details Title"
                                                    name="title"
                                                    value={formData.details.title}
                                                    onChange={handleDetailsChange}
                                                    margin="normal"
                                                />
                                                <TextField
                                                    fullWidth
                                                    variant="outlined"
                                                    label="Text"
                                                    name="text"
                                                    value={formData.details.text}
                                                    onChange={handleDetailsChange}
                                                    margin="normal"
                                                    multiline
                                                    rows={3}
                                                />

                                                {formData.details.cards.map((card, index) => (
                                                    <Card key={index} variant="outlined" sx={{ marginTop: 3 }}>
                                                        <CardContent>
                                                            <Typography variant="h6" gutterBottom>
                                                                Card {index + 1}
                                                            </Typography>
                                                            <TextField
                                                                fullWidth
                                                                variant="outlined"
                                                                label="Icon"
                                                                name="icon"
                                                                value={card.icon}
                                                                onChange={(e) => handleCardChange(index, e)}
                                                                margin="normal"
                                                            />
                                                            <TextField
                                                                fullWidth
                                                                variant="outlined"
                                                                label="Heading"
                                                                name="heading"
                                                                value={card.heading}
                                                                onChange={(e) => handleCardChange(index, e)}
                                                                margin="normal"
                                                            />
                                                            <TextField
                                                                fullWidth
                                                                variant="outlined"
                                                                label="Description"
                                                                name="description"
                                                                value={card.description}
                                                                onChange={(e) => handleCardChange(index, e)}
                                                                margin="normal"
                                                                multiline
                                                                rows={2}
                                                            />
                                                        </CardContent>
                                                    </Card>
                                                ))}
                                                <IconButton
                                                    onClick={handleAddCard}
                                                    color="primary"
                                                    sx={{ marginTop: 2 }}
                                                >
                                                    <AddIcon /> Add Another Card
                                                </IconButton>

                                                <TextField
                                                    fullWidth
                                                    variant="outlined"
                                                    label="Features"
                                                    name="features"
                                                    value={formData.details.features}
                                                    onChange={handleDetailsChange}
                                                    margin="normal"
                                                />
                                                <TextField
                                                    fullWidth
                                                    variant="outlined"
                                                    label="Overview"
                                                    name="overview"
                                                    value={formData.details.overview}
                                                    onChange={handleDetailsChange}
                                                    margin="normal"
                                                    multiline
                                                    rows={3}
                                                />

                                                <Button
                                                    type="submit"
                                                    variant="contained"
                                                    color="primary"
                                                    sx={{ marginTop: 3 }}
                                                    fullWidth
                                                >
                                                    Submit
                                                </Button>
                                            </Box>
                                        </CardContent>
                                    </Card>
                                </Grid>
                                <TableContainer component={Paper} sx={{ marginTop: 3, marginBottom: 6 }}>
                                    <Typography variant="h6" gutterBottom sx={{ padding: 2 }} >
                                        Channels List
                                    </Typography>
                                    <Card>
                                        <CardContent>
    
                                            <TableContainer component={Paper} style={{ marginBottom: '20px' }}>
                                                <Table>
                                                    <TableHead>
                                                        <TableRow>
                                                            <TableCell>Title</TableCell>
                                                            <TableCell>Content</TableCell>
                                                            <TableCell>Role</TableCell>
                                                            <TableCell>Link</TableCell>
                                                            <TableCell>Image</TableCell>
                                                            <TableCell>Actions</TableCell>
                                                        </TableRow>
                                                    </TableHead>
                                                    <TableBody>
                                                        {channels.length > 0 ? (
                                                            channels.map((channel) => (
                                                                <TableRow key={channel._id}>
                                                                    <TableCell>{channel.title}</TableCell>
                                                                    <TableCell>{channel.content}</TableCell>
                                                                    <TableCell>{channel.role}</TableCell>
                                                                    <TableCell><a href={channel.link}>Go to Link</a></TableCell>
                                                                    <TableCell>
                                                                        {channel.image ? (
                                                                            <img src={channel.image} alt={channel.title} style={{ width: '100px', height: 'auto' }} />
                                                                        ) : (
                                                                            'No Image'
                                                                        )}
                                                                    </TableCell>
                                                                    <TableCell>
                                                                        <Button onClick={() => handleViewDetails(channel)}>View Details</Button>
                                                                    </TableCell>
                                                                </TableRow>
                                                            ))
                                                        ) : (
                                                            <TableRow>
                                                                <TableCell colSpan={8} align="center">
                                                                    No channels available.
                                                                </TableCell>
                                                            </TableRow>
                                                        )}
                                                    </TableBody>
                                                </Table>
                                            </TableContainer>

                                            {/* Channel Details Accordion */}
                                            {selectedChannel && (
                                                <Accordion defaultExpanded>
                                                    <AccordionSummary
                                                        expandIcon={<ExpandMoreIcon />}
                                                        aria-controls={`panel-${selectedChannel._id}-content`}
                                                        id={`panel-${selectedChannel._id}-header`}
                                                    >
                                                        <Typography variant="h6">Details for {selectedChannel.title}</Typography>
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
                                                                        <TableCell>{selectedChannel.details?.title || 'N/A'}</TableCell>
                                                                        <TableCell>{selectedChannel.details?.text || 'N/A'}</TableCell>
                                                                        <TableCell>{selectedChannel.details?.features || 'N/A'}</TableCell>
                                                                        <TableCell>{selectedChannel.details?.overview || 'N/A'}</TableCell>
                                                                        <TableCell>
                                                                            {selectedChannel.details?.cards?.length > 0 ? 'See below' : 'No Cards'}
                                                                        </TableCell>
                                                                    </TableRow>
                                                                </TableBody>
                                                            </Table>
                                                        </TableContainer>

                                                        {/* Card Details */}
                                                        {selectedChannel.details?.cards?.length > 0 && (
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
                                                                            {selectedChannel.details.cards.map((card, index) => (
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
                                </TableContainer>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddChannelForm;
