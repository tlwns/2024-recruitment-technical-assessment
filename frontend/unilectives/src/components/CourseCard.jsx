import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  Grid,
  Box,
  Rating,
} from '@mui/material';
import StarIcon from '@mui/icons-material/Star';

const CourseCard = (props) => {
  return (
    <>
      <Card
        sx={{
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <CardContent sx={{ flexGrow: 1 }}>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <Typography
              sx={{ mb: 0, fontWeight: '900' }}
              gutterBottom
              variant='h6'
              component='h2'
            >
              {props.code}
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <Rating
                name='rating'
                precision={0.1}
                value={props.rating}
                icon={<StarIcon sx={{ color: '#ce93d8' }} />}
                readOnly
              />
              <Typography
                component='legend'
                variant='caption'
                color='text.secondary'
              >
                {`${props.reviews} reviews`}
              </Typography>
            </Box>
          </Box>
          <Typography sx={{ mb: '2rem', display: 'block' }} variant='caption'>
            {props.name}
          </Typography>
          <Grid container>
            {props.terms.map((term) => (
              <Box
                key={term}
                sx={{
                  backgroundColor: '#bbdefb',
                  borderRadius: '1rem',
                  px: '0.5rem',
                  py: '0.2rem',
                  mr: '0.5rem',
                  mt: '0.2rem',
                }}
              >
                <Typography sx={{ fontSize: '0.8rem', fontWeight: '100' }}>
                  {term}
                </Typography>
              </Box>
            ))}
          </Grid>
        </CardContent>
      </Card>
    </>
  );
};

export default CourseCard;
