

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
      
      
      <div className='col-auto'>
      <select className="form-control fw-light fst-italic d-inline-block col-auto">
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
     </div>
          <div className=" col-auto input-group mb-3">
          <button onClick={handleAddOption} className="btn btn-secondary text-light"><i className="bi bi-plus-square-dotted"> <span>Categoria</span></i></button>
          <input
            className="form-control fw-light fst-italic d-inline-block"
            type="text"
            value={inputValue}
            onChange={handleChange}
            placeholder="Digite uma opção"
          />
          </div>
    </div>
  );
}
