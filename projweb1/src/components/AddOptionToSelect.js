

import React, { useState } from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

export default function AddOptionToSelect() {
  const [inputValue, setInputValue] = useState('');
  const [options, setOptions] = useState([]);

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAddOption = () => {
    setOptions([...options, inputValue]);
    setInputValue('');
  };

  return (
    <div>
      
      
      <div className='row px-3 mb-3 my-1 justify-content-center'>
        <div className='col-9 align-items-center'>

          <input
            className="mt-2 form-control fw-light fst-italic d-inline-block"
            type="text"
            value={inputValue}
            onChange={handleChange}
            placeholder="Criar Categoria"
          />
        
      </div>

        <div className='col-3 mt-1'>
          <button onClick={handleAddOption} className="mx-1 btn btn-secondary text-light"><i className="bi bi-plus-square-dotted"> <span>Categoria</span></i></button>
        </div>

      </div> 

      <div className='row col-9 px-3 mx-1 my-1 justify-content-center'>
      <select className=" mx-1 form-control fw-light fst-italic d-inline-block col-auto">
          <option value="" defaultValue={""}>Selecione...</option>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
      </div>
    </div>
  );
}
