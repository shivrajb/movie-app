import { Link } from 'react-router-dom'
import Geners from './Geners';

const Navbar = () => {
  return (
    <div className="flex justify-end items-end gap-6 mb-10">
      <Link to={'/'}>
        <div>Home</div>
      </Link>
       <Geners/>
      <Link to={'/bookmark'}>
        <div>Bookmark</div>
      </Link>
      
    </div>
  );
}

export default Navbar
