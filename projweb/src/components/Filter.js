import './Filter.css';
import Button from 'react-bootstrap/Button';



export default function Filter({filter, setFilter, setSort}){

    return(
        <>
        <div className="filter">
            <h2>Filtrar:</h2>
            <div className="filter-options">
                <div>
                    <p>Status:</p>
                    <select value={filter} onChange={(e) => setFilter(e.target.value)}>
                        <option value="All">Todas</option>
                        <option value="Completed">Realizadas</option>
                        <option value="Incompleted">Não Realizadas</option>
                    </select>
                </div>
                <div>
                <p>Ordem alfabética:</p>
                    <Button variant="info" onClick={() => setSort("Asc")}>A-Z</Button>
                    <Button variant="info" onClick={() => setSort("Desc")}>Z-A</Button>
                </div>
            </div>
            
        </div>
        </>
    );
}