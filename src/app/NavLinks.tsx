import NavLink from './NavLink';
import { categories } from '../../constants';


function NavLinks() {
    return ( 
        <nav className="flex justify-center mx-4 mt-10 text-center space-x-11">
          {categories && categories.length > 0 && categories.map((category) => (
              <NavLink key={category} category={category} isActive={true} />
          ))}
        </nav>
      );
          }

export default NavLinks;