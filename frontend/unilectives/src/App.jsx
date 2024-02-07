import './App.css';
import SideBar from './components/SideBar';
import Header from './components/Header';
import Box from '@mui/material/Box';
import Search from './components/Search';
import CoursesAlbum from './components/CoursesAlbum';

const App = () => {
  return (
    <>
      <Box sx={{ display: 'flex', height: '100svh' }}>
        <SideBar />
        <Box sx={{ flex: 1, px: '6rem', py: '1rem' }}>
          <Header />
          <Search />
          <CoursesAlbum />
        </Box>
      </Box>
    </>
  );
};

export default App;
