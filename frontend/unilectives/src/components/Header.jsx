import React from 'react';
import Typography from '@mui/material/Typography';
import { useState } from 'react';

const Header = (props) => {
  const [color, setColor] = useState('primary.main');

  const changeColor = () => {
    if (color === 'secondary.main') setColor('primary.main');
    else setColor('secondary.main');
  };

  return (
    <>
      <Typography
        component={'h3'}
        variant='subtitle2'
        sx={{ fontWeight: '100' }}
      >
        DevSoc presents
      </Typography>
      <Typography
        component={'h1'}
        variant='h2'
        sx={{ color, cursor: 'pointer', userSelect: 'none' }}
        onClick={() => changeColor()}
      >
        unilectives
      </Typography>
      <Typography
        component={'h2'}
        variant='subtitle1'
        sx={{ fontWeight: '900', mb: '2rem' }}
      >
        Your one-stop shop for UNSW course and elective reviews.
      </Typography>
    </>
  );
};

export default Header;
