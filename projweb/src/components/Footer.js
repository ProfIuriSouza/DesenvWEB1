import './Footer.css';

export default function Footer(){

    return(
      <>
        <footer className="footer mt-auto py-3 bg-light">
      <div >
        <span className="text-muted">© {new Date().getFullYear()} To-Do List. Desenvolvimento WEB 1. Todos os direitos reservados.</span>
        <p className="text-muted">João Victor Soares Oliveira e Pedro Iuri Soares de Souza</p>
        <ul className="list-inline">
          <li className="list-inline-item "><a href="#">Termos de Uso</a></li>
          <li className="list-inline-item"><a href="#">Política de Privacidade</a></li>
          <li className="list-inline-item"><a href="#">Contato</a></li>
        </ul>
      </div>
    </footer>
    </>
    );
}