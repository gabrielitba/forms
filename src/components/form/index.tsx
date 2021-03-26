import { useState, useCallback, FormEvent } from 'react';
import { toast } from 'react-toastify';

import LoadingSpinner from '../loading';

import './styles.css';

import {
  cpfMask,
  rgMask,
  dateMask,
  phoneMask,
  cellPhoneMask,
} from '../../utils/setMasks';

import {
  cpfRemoveMask,
  rgRemoveMask,
  phoneRemoveMask,
} from '../../utils/removeMasks';

const Form = () => {
  // Form States
  const [nameValue, setNameValue] = useState('');
  const [cpfValue, setCpfValue] = useState('');
  const [rgValue, setRgValue] = useState('');
  const [dateValue, setDateValue] = useState('');
  const [phoneValue, setPhoneValue] = useState('');
  const [cellPhoneValue, setCellPhoneValue] = useState('');
  const [emailValue, setEmailValue] = useState('');

  const [isDev, setIsDev] = useState(false);

  const [typeDev, setTypeDev] = useState('');

  const [typeTurn, setTypeTurn] = useState('');

  const [commentsValue, setCommentsValue] = useState('');

  // Loading Button State
  const [isLoadingButton, setLoadingButton] = useState(false);

  // Funções para adicionar mascaras
  const changeCpf = (value: string) => {
    setCpfValue(cpfMask(value));
  };
  const changeRg = (value: string) => {
    setRgValue(rgMask(value));
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

  const handleSubmit = useCallback(
    (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      setLoadingButton(true);

      // Remover mascaras ao criar objeto
      const formValues = {
        name: nameValue,
        cpf: cpfRemoveMask(cpfValue),
        rg: rgRemoveMask(rgValue),
        date: dateValue,
        phone: phoneRemoveMask(phoneValue),
        cellphone: phoneRemoveMask(cellPhoneValue),
        email: emailValue,
        admin: isDev,
        developer: isDev ? typeDev : 'Non-developer',
        turn: typeTurn,
        comments: commentsValue,
      };

      // Simular carregamento
      setTimeout(() => {
        setLoadingButton(false);

        // Checar campos vazios
        Object.values(formValues).every((value) => value !== '')
          ? toast.success('Formulário preenchido com sucesso')
          : toast.error(
              'Por favor, verifique se todos os campos estão preenchidos!'
            );

        console.log(formValues);
      }, 1000);
    },
    [
      cellPhoneValue,
      commentsValue,
      cpfValue,
      dateValue,
      emailValue,
      isDev,
      nameValue,
      phoneValue,
      rgValue,
      typeDev,
      typeTurn,
    ]
  );

  return (
    <form onSubmit={handleSubmit}>
      {/* Inputs  Text*/}
      <input
        type='text'
        name='name'
        placeholder='Nome'
        value={nameValue}
        onChange={(event) => {
          setNameValue(event.target.value);
          event.target.style.border =
            event.target.value === '' || event.target.value.length < 15
              ? '2px solid #FF0000'
              : 'none';
        }}
      />
      <input
        type='text'
        name='cpf'
        placeholder='CPF'
        value={cpfValue}
        onChange={(event) => {
          changeCpf(event.target.value);
          event.target.style.border =
            event.target.value === '' || event.target.value.length < 14
              ? '2px solid #FF0000'
              : 'none';
        }}
      />
      <input
        type='text'
        name='rg'
        placeholder='RG'
        value={rgValue}
        onChange={(event) => {
          changeRg(event.target.value);
          event.target.style.border =
            event.target.value === '' || event.target.value.length < 12
              ? '2px solid #FF0000'
              : 'none';
        }}
      />
      <input
        type='text'
        name='date'
        maxLength={10}
        placeholder='Data'
        value={dateValue}
        onChange={(event) => {
          changeDate(event.target.value);
          event.target.style.border =
            event.target.value === '' || event.target.value.length < 10
              ? '2px solid #FF0000'
              : 'none';
        }}
      />
      <input
        type='text'
        name='phone'
        placeholder='Telefone'
        value={phoneValue}
        onChange={(event) => {
          changePhone(event.target.value);
          event.target.style.border =
            event.target.value === '' || event.target.value.length < 14
              ? '2px solid #FF0000'
              : 'none';
        }}
      />
      <input
        type='text'
        name='cellphone'
        placeholder='Celular'
        value={cellPhoneValue}
        onChange={(event) => {
          changeCellPhone(event.target.value);
          event.target.style.border =
            event.target.value === '' || event.target.value.length < 15
              ? '2px solid #FF0000'
              : 'none';
        }}
      />
      <input
        type='email'
        name='email'
        placeholder='E-mail'
        value={emailValue}
        onChange={(event) => {
          setEmailValue(event.target.value);
          event.target.style.border =
            event.target.value === '' || !event.target.value.includes('@')
              ? '2px solid #FF0000'
              : 'none';
        }}
      />

      {/* Inputs Checked */}
      <label className='labelChecked' htmlFor='isdev'>
        Você é desenvolvedor?
        <input
          type='checkbox'
          name='isdev'
          id='isdev'
          checked={isDev}
          onChange={(event) => setIsDev(event.target.checked)}
        />
      </label>

      {/* Input Radio */}
      <div
        style={{
          border: isDev && typeDev === '' ? '2px solid #FF0000' : 'none',
          cursor: isDev ? 'default' : 'not-allowed',
        }}
        className='radios'
      >
        <label style={{ cursor: isDev ? 'default' : 'not-allowed' }}>
          <input
            type='radio'
            name='developer'
            value='backend'
            style={{ cursor: isDev ? 'default' : 'not-allowed' }}
            disabled={!isDev ?? false}
            onChange={(event) => setTypeDev(event.target.value)}
          />
          Backend
        </label>
        <label style={{ cursor: isDev ? 'default' : 'not-allowed' }}>
          <input
            type='radio'
            name='developer'
            value='frontend'
            style={{ cursor: isDev ? 'default' : 'not-allowed' }}
            disabled={!isDev ?? false}
            onChange={(event) => setTypeDev(event.target.value)}
          />
          Frontend
        </label>
      </div>

      {/* Select */}
      <select
        name='turno'
        value={typeTurn}
        onChange={(event) => {
          setTypeTurn(event.target.value);
          event.target.style.border =
            event.target.value === '' ? '2px solid #FF0000' : 'none';
        }}
      >
        <option value=''>Selecione uma opção</option>
        <option value='manhã'>Manhã</option>
        <option value='tarde'>Tarde</option>
        <option value='noite'>Noite</option>
      </select>

      {/* Textarea  */}
      <textarea
        name='comments'
        value={commentsValue}
        placeholder='Descreva pelo menos três qualidades suas...'
        onChange={(event) => {
          setCommentsValue(event.target.value);
          event.target.style.border =
            event.target.value === '' ? '2px solid #FF0000' : 'none';
        }}
      />

      {/* Button Submit  */}
      <button type='submit'>
        {isLoadingButton ? <LoadingSpinner /> : 'ENVIAR'}
      </button>
    </form>
  );
};

export default Form;
