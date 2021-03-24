import { useState, FormEvent } from 'react';
import './styles.css';

function Form() {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    console.log(event);
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Inputs  Text*/}
      <input type='text' name='cpf' placeholder='CPF' />
      <input type='text' name='rg' placeholder='RG' />
      <input type='text' name='cnpj' placeholder='CNPJ' />
      <input type='text' name='date' placeholder='Date' />
      <input type='text' name='phone' placeholder='Telefone' />
      <input type='text' name='cellphone' placeholder='Celular' />
      <input type='text' name='email' placeholder='E-mail' />

      {/* Inputs Checked */}
      <label htmlFor='vendedor'>
        Vendedor
        <input type='checkbox' name='vendedor' id='' />
      </label>

      {/* Input Radio */}
      <div className='radios'>
        <label>
          <input type='radio' value='cafe' name='drink' />
          Café
        </label>
        <label>
          <input type='radio' value='cha' name='drink' />
          Chá
        </label>
      </div>

      {/* Select */}
      <select name='language'>
        <option value='javascript'>JavaScript</option>
        <option value='php'>PHP</option>
        <option value='ruby'>Ruby</option>
      </select>

      {/* Textarea  */}
      <textarea name='bio'></textarea>

      {/* Button Submit  */}
      <button type='submit'>Enviar</button>
    </form>
  );
}

export default Form;
