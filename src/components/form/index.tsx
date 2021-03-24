import { useState, FormEvent } from 'react';
import './styles.css';

// Inputs Mask
import {
  cpfMask,
  rgMask,
  cnpjMask,
  dateMask,
  phoneMask,
  cellPhoneMask,
} from '../../utils/setMasks';

// Inputs Mask remove
import {
  cpfWithoutSpecialCharacters,
  rgWithoutSpecialCharacters,
  cnpjWithoutSpecialCharacters,
  birthdateToBackEnd,
  phoneAndCellPhoneToBackend,
} from '../../utils/cleanMasks';

const Form = () => {
  // Form States
  const [nameValue, setNameValue] = useState('');
  const [cpfValue, setCpfValue] = useState('');
  const [rgValue, setRgValue] = useState('');
  const [cnpjValue, setCnpjValue] = useState('');
  const [dateValue, setDateValue] = useState('');
  const [phoneValue, setPhoneValue] = useState('');
  const [cellPhoneValue, setCellPhoneValue] = useState('');
  const [emailValue, setEmailValue] = useState('');

  const [isAdmin, setIsAdmin] = useState(false);

  const [typeDev, setTypeDev] = useState('');

  const [typeTech, setTypeTech] = useState('');

  const [commentsValue, setCommentsValue] = useState('');

  // Mask Functions
  const changeCpf = (value: string) => {
    setCpfValue(cpfMask(value));
  };
  const changeRg = (value: string) => {
    setRgValue(rgMask(value));
  };
  const changeCnpj = (value: string) => {
    setCnpjValue(cnpjMask(value));
  };
  const changeDate = (value: string) => {
    setDateValue(dateMask(value));
  };
  const changePhone = (value: string) => {
    setPhoneValue(phoneMask(value));
  };
  const changeCellPhone = (value: string) => {
    setCellPhoneValue(cellPhoneMask(value));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formValues = {
      name: nameValue,
      cpf: cpfWithoutSpecialCharacters(cpfValue),
      rg: rgWithoutSpecialCharacters(rgValue),
      cnpj: cnpjWithoutSpecialCharacters(cnpjValue),
      date: birthdateToBackEnd(dateValue),
      phone: phoneAndCellPhoneToBackend(phoneValue),
      cellphone: phoneAndCellPhoneToBackend(cellPhoneValue),
      email: emailValue,
      admin: isAdmin,
      developer: typeDev,
    };

    console.log(formValues);
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Inputs  Text*/}
      <input
        type='text'
        name='name'
        placeholder='Nome'
        value={nameValue}
        onChange={(event) => setNameValue(event.target.value)}
      />
      <input
        type='text'
        name='cpf'
        placeholder='CPF'
        value={cpfValue}
        onChange={(event) => changeCpf(event.target.value)}
      />
      <input
        type='text'
        name='rg'
        placeholder='RG'
        value={rgValue}
        onChange={(event) => changeRg(event.target.value)}
      />
      <input
        type='text'
        name='cnpj'
        placeholder='CNPJ'
        maxLength={20}
        value={cnpjValue}
        onChange={(event) => changeCnpj(event.target.value)}
      />
      <input
        type='text'
        name='date'
        maxLength={10}
        placeholder='Date'
        value={dateValue}
        onChange={(event) => changeDate(event.target.value)}
      />
      <input
        type='text'
        name='phone'
        placeholder='Telefone'
        value={phoneValue}
        onChange={(event) => changePhone(event.target.value)}
      />
      <input
        type='text'
        name='cellphone'
        placeholder='Celular'
        value={cellPhoneValue}
        onChange={(event) => changeCellPhone(event.target.value)}
      />
      <input
        type='email'
        name='email'
        placeholder='E-mail'
        value={emailValue}
        onChange={(event) => setEmailValue(event.target.value)}
      />

      {/* Inputs Checked */}
      <label htmlFor='admin'>
        Administrador
        <input
          type='checkbox'
          name='admin'
          id=''
          checked={isAdmin}
          onChange={(event) => setIsAdmin(event.target.checked)}
        />
      </label>

      {/* Input Radio */}
      <div className='radios'>
        <label>
          <input
            type='radio'
            name='developer'
            value='backend'
            onChange={(event) => setTypeDev(event.target.value)}
          />
          Backend
        </label>
        <label>
          <input
            type='radio'
            name='developer'
            value='frontend'
            onChange={(event) => setTypeDev(event.target.value)}
          />
          Frontend
        </label>
      </div>

      {/* Select */}
      <select
        name='language'
        value={typeTech}
        onChange={(event) => setTypeTech(event.target.value)}
      >
        <option value='' />
        <option value='javascript'>JavaScript</option>
        <option value='php'>PHP</option>
        <option value='ruby'>Ruby</option>
      </select>

      {/* Textarea  */}
      <textarea
        name='comments'
        value={commentsValue}
        onChange={(event) => setCommentsValue(event.target.value)}
      />

      {/* Button Submit  */}
      <button type='submit'>Enviar</button>
    </form>
  );
};

export default Form;
