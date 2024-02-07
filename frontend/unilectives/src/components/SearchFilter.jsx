import React from 'react';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';

const SearchFilter = (props) => {
  return (
    <>
      <FormControl size='small' sx={{ mt: '1rem', mb: '3rem' }}>
        <InputLabel id='sortby-select-label'>Sort by</InputLabel>
        <Select
          labelId='sortby-select-label'
          id='sortBy'
          name='sortBy'
          label='Sort by'
          defaultValue=''
          sx={{ width: 200 }}
        >
          <MenuItem value={'descending'}>
            Reviews &#40;high to low&#41;
          </MenuItem>
          <MenuItem value={'ascending'}>Reviews &#40;low to high&#41;</MenuItem>
        </Select>
      </FormControl>
    </>
  );
};

export default SearchFilter;
