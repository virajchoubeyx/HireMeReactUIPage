import {Box, Card, Grid, TextField, Typography, InputAdornment, Button} from '@mui/material';
import axios from 'axios';
import React from 'react';
import { useEffect, useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import {Link} from 'react-router-dom';

const Feed = () =>{
    const [query, setQuery] = useState("");
    const [post, setPost] = useState();

    useEffect(
        // start here
        ()=>{
            const fetchPosts = async () => {
                const response = await axios.get('http://localhost:8080/posts/${query}');
                setPost(response.data);
            }; 
            // --------------------
            const fetchInitiatePosts = async () => {
                const response = await axios.get('http://localhost:8080/posts');
                console.log(response);
                setPost(response.data);
            };
            // ----------------------
            if (query.length === 0) fetchInitiatePosts();
            if (query.length > 2) fetchPosts();
            // --
        }, [query]
        // useEffect end
    );

    // -- console post
    console.log(post);
    // -- return statement --
    return (
        // return start
        <Grid container spacing={2} sx={{margin: '2%' }}>
            {/* it is comment */}
            <Grid item xs={12} sx={12} md={12} lg={12}>
                <Button sx={{margin:'1% 2%'}} variant='outlined'>
                    <Link to='/'>Back</Link>
                </Button>
                {/* -- */}
                <Box>
                    <TextField
                    InputProps={{
                        startAdornment:(
                            <InputAdornment position='start'>
                            <SearchIcon/>
                            </InputAdornment>
                        ),
                    }}
                    placeholder='Search...'
                    sx={{width:'75%', padding: '2% auto'}}
                    fullWidth
                    onChange={(e) => setQuery(e.target.value)}
                    />
                </Box>
            </Grid>
            {/* -- */}
            {post && post.map((p)=>{
                return(
                    <Grid key={p.id} item xs={12} md={6} lg={4}>
                        <Card sx={{padding:'3%', overflow:'hidden', width:'84%'}} >
                            <Typography variant="h5" sx={{fontSize:'2rem', fontWeight:'600'}}>
                                {p.profile}
                            </Typography>
                            {/* -- */}
                            <Typography sx={{ color: "#585858", marginTop:"2%" }} variant="body" >
                            Description: {p.desc}
                            </Typography>
                            <br/><br/>
                            {/* -- */}
                            <Typography variant="h6">
                                Years of Experience: {p.exp} years
                            </Typography>
                            {/* -- */}
                            <Typography gutterBottom  variant="body">Skills : </Typography>
                {p.techStack && p.techStack.map((s, i) => {
                  return (
                    <Typography variant="body" gutterBottom key={i}>
                      {s} .
                      {` `}
                    </Typography>
                  );
                })}
                            {/* -- */}
                        </Card>
                    </Grid>
                );
            })}
            {/* -- */}
        </Grid>
        // return end
    );
};

export default Feed;