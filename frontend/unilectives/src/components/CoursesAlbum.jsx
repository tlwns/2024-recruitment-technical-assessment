import React from 'react';
import CourseCard from './CourseCard';
import { Grid } from '@mui/material';

const CoursesAlbum = (props) => {
  const [courses, setCourses] = React.useState([]);
  React.useEffect(() => {
    fetch('courses.json')
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);

  return (
    <>
      {courses && (
        <Grid container spacing={6} sx={{ pb: '4rem' }}>
          {courses.map((course) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              key={`${course.course_prefix}${course.course_code}`}
            >
              <CourseCard
                code={`${course.course_prefix}${course.course_code}`}
                name={course.course_title}
                terms={course.offered_terms}
                rating={course.average_stars}
                reviews={course.total_reviews}
              />
            </Grid>
          ))}
        </Grid>
      )}
    </>
  );
};

export default CoursesAlbum;
