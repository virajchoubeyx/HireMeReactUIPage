import React from "react";
import { Typography, Button, Container, Box } from "@mui/material";
import { Link } from "react-router-dom";
import "../App.css";  // Ensure this path is correct

const Main = () => {
  return (
    <Container className="container">
      <Box className="header">
        <Typography variant="h2" gutterBottom>
          Welcome to HireMe!
        </Typography>
      </Box>
      <Box className="subheader">
        <Typography variant="h5" gutterBottom>
          Your one-stop platform to connect with top talent or land your dream job.
        </Typography>
      </Box>
      <Box className="paragraph">
        <Typography variant="body1" paragraph>
          At HireMe, we believe in simplifying the hiring process for both employers and job seekers.
          Whether you are looking to hire the best talent or searching for your next career opportunity,
          we've got you covered. Our platform offers a seamless experience to make hiring and job hunting
          as effortless as possible.
        </Typography>
        <Typography variant="body1" paragraph>
          Employers can post job listings, manage applications, and find the perfect candidates to help
          their business grow. Job seekers can browse through a wide range of job opportunities, apply
          with ease, and connect with potential employers.
        </Typography>
      </Box>
      <Typography sx={{ margin: "5%" }} variant="h3" align="center">
        Get Hired or Hire People for Free!
      </Typography>
      <div>
        <ul className="ul">
          <li>
            <Button sx={{ margin: "2% 3%" }} variant="outlined">
              <Link to="/employer/dashboard">
                Hire Talent
              </Link>
            </Button>
          </li>
          <li>
            <Button sx={{ margin: "2% 3%" }} variant="outlined">
              <Link to="/employee/feed">
                Get Job Now
              </Link>
            </Button>
          </li>
        </ul>
      </div>
    </Container>
  );
};

export default Main;
