import './Form.css'

export default function Form(){

    return(
        <div>
             <form>
        <input type="text" placeholder='Insira sua Tarefa' />
        <select>
            <option value="">Selecione uma categoria/option</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Estudos">Estudos</option>
            <option value="Lazer">Lazer</option>
            <option value="Outros">Outros</option>
        </select>
        <button type='submit'>Criar Tarefa</button>
      </form>

      <ol>
        <li>
          <input type="checkbox" />
          To Do Item 1
        </li>
      </ol>
        </div>
    )
}