import { Route, Routes } from 'react-router';
import MovieList from '../MovieList';
import MovieDetails from '../MovieDetails';
import BookmarkPage from '../BookmarkPage';

const AllRoutes = () => {
  return (
    <Routes>
        <Route path="/detail/:id" element={<MovieDetails />} />
        <Route path="/" element={<MovieList/>}/>
        <Route path="/bookmark" element={<BookmarkPage/>}/>
    </Routes>
  );
}

export default AllRoutes
