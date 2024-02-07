import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import React from 'react';
import styled from '@mui/system/styled';

const StyledTextField = styled(TextField)`
  & label.Mui-focused {
    color: #9fa8da;
  }
  & .MuiOutlinedInput-root {
    &.Mui-focused fieldset {
      border-color: #9fa8da;
    }
    color: #9fa8da;
  }
`;

const SearchBar = (props) => {
  return (
    <>
      <StyledTextField
        id='search-bar'
        placeholder='Search for a course e.g. COMP1511'
        name='course'
        size='small'
        fullWidth
        sx={{
          fieldset: { borderColor: '#9fa8da' },
        }}
        InputProps={{
          startAdornment: (
            <InputAdornment position='start'>
              <SearchIcon sx={{ color: '#9fa8da' }} />
            </InputAdornment>
          ),
        }}
        focused
      />
    </>
  );
};

export default SearchBar;
