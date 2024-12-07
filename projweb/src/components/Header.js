import './Header.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import LoginModal from './Login';
export default function Header({isLogged, setIsLogged}) {

    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light header">
        <a className="navbar-brand ml-5" href="/">
        <img src="https://cdn.icon-icons.com/icons2/664/PNG/512/construction_project_plan_building_architect_design_develop-80_icon-icons.com_60245.png"/>
        <span className="ms-2 text-secondary">To-Do List</span>
        </a>
        <div className="navbar position-absolute top-0 end-0 login" id="navbarNav">
          <ul className="navbar-nav ml-auto">
                <LoginModal isLogged={isLogged} setIsLogged={setIsLogged} />
          </ul>
        </div>
      </nav>

    );
}