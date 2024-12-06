import './Header.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import LoginModal from './Login';
import CadastroModal from './Cadastro';

export default function Header(){




    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light header">
        <a className="navbar-brand" href="/">
        <img src="https://cdn.icon-icons.com/icons2/664/PNG/512/construction_project_plan_building_architect_design_develop-80_icon-icons.com_60245.png"/>
          Home
        </a>
        <div className="collapse navbar-collapse login" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
                <LoginModal/>
            </li>
            <li className="nav-item">
              <CadastroModal/>
            </li>
          </ul>
        </div>
      </nav>

    );
}