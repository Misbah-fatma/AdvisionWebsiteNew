import React from 'react';
import { Card, CardContent, CardActions, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const BlogCard = ({ blog }) => {
    return (
        <Card sx={{ maxWidth: 345, mb: 2 }}>
            <CardContent>
                <Typography variant="h5" component="div">
                    {blog.heading}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {blog.description}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" component={Link} to={`/blog/${blog._id}`}>
                    Read More
                </Button>
            </CardActions>
        </Card>
    );
};

export default BlogCard;
