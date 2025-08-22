import React, { useState } from 'react';
import { Autocomplete } from '@react-google-maps/api';
import { AppBar, Toolbar, Typography, InputBase, Box } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import headerSx from './styles';

const Header = ({ onLoad, onPlaceChanged }) => {






  return (
    <AppBar position="static">
      <Toolbar sx={headerSx.toolbar}>
        <Typography variant="h5" sx={headerSx.title}>
          Travel Advisor
        </Typography>
        <Box sx={{ display: 'flex' }}>
          <Typography variant="h6" sx={headerSx.title}>
            Explore new places
          </Typography>
          <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
            <Box sx={headerSx.search}>
              <Box sx={headerSx.searchIcon}>
                <SearchIcon />
              </Box>
              <InputBase
                placeholder="Search…"
                sx={{
                  ...headerSx.inputRoot,
                  '& .MuiInputBase-input': headerSx.inputInput,
                }}
              />
            </Box>
          </Autocomplete>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;