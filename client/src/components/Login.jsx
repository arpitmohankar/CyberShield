import {React, useState} from 'react';
import { Link } from 'react-router-dom';
import { TextField, Button, Typography, Container, Box } from '@mui/material';
import { Google as GoogleIcon, GitHub as GitHubIcon } from '@mui/icons-material';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {
    e.preventDefault();
    // Implement login logic here
  };

  return (
    <Container maxWidth="sm">
      <Box className="mt-8 p-6 bg-gray-800 rounded-lg shadow-md">
        <Typography variant="h4" className="text-center mb-4">
          Login
        </Typography>
        <Box className="flex justify-center space-x-4 mb-4">
          <Button
            variant="contained"
            startIcon={<GoogleIcon />}
            className="bg-red-600 hover:bg-red-700"
          >
            Google
          </Button>
          <Button
            variant="contained"
            startIcon={<GitHubIcon />}
            className="bg-gray-700 hover:bg-gray-800"
          >
            GitHub
          </Button>
        </Box>
        <Typography variant="body2" className="text-center mb-4">
          Or
        </Typography>
        <form onSubmit={handleSubmit} className="space-y-4">
          <TextField
            fullWidth
            label="Email"
            variant="outlined"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <TextField
            fullWidth
            label="Password"
            variant="outlined"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            className="mt-4"
          >
            Log In
          </Button>
        </form>
        <Typography variant="body2" className="text-center mt-4">
          Don't have an account?{' '}
          <Link to="/signup" className="text-blue-400 hover:text-blue-300">
            Create Account
          </Link>
        </Typography>
      </Box>
    </Container>
  );
};

export default Login;