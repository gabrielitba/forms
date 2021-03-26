import { useState, useCallback, FormEvent } from 'react';
import { toast } from 'react-toastify';

import LoadingSpinner from '../loading';

import './styles.css';

import {
  cpfMask,
  rgMask,
  cnpjMask,
  dateMask,
  phoneMask,
  cellPhoneMask,
} from '../../utils/setMasks';

import {
  cpfRemoveMask,
  rgRemoveMask,
  cnpjRemoveMask,
  phoneRemoveMask,
} from '../../utils/removeMasks';

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

  const [isDev, setIsDev] = useState(false);

  const [typeDev, setTypeDev] = useState('');

  const [typeTech, setTypeTech] = useState('');

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

  const handleSubmit = useCallback(
    (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      setLoadingButton(true);

      // Remover mascaras ao criar objeto
      const formValues = {
        name: nameValue,
        cpf: cpfRemoveMask(cpfValue),
        rg: rgRemoveMask(rgValue),
        cnpj: cnpjRemoveMask(cnpjValue),
        date: dateValue,
        phone: phoneRemoveMask(phoneValue),
        cellphone: phoneRemoveMask(cellPhoneValue),
        email: emailValue,
        admin: isDev,
        developer: typeDev,
        technology: typeTech,
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
      }, 500);
    },
    [
      cellPhoneValue,
      cnpjValue,
      commentsValue,
      cpfValue,
      dateValue,
      emailValue,
      isDev,
      nameValue,
      phoneValue,
      rgValue,
      typeDev,
      typeTech,
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
              ? '1px solid red'
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
              ? '1px solid red'
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
              ? '1px solid red'
              : 'none';
        }}
      />
      <input
        type='text'
        name='cnpj'
        placeholder='CNPJ'
        maxLength={20}
        value={cnpjValue}
        onChange={(event) => {
          changeCnpj(event.target.value);
          event.target.style.border =
            event.target.value === '' || event.target.value.length < 20
              ? '1px solid red'
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
              ? '1px solid red'
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
              ? '1px solid red'
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
              ? '1px solid red'
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
              ? '1px solid red'
              : 'none';
        }}
      />

      {/* Inputs Checked */}
      <label htmlFor='isdev'>
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
      <div className='radios'>
        <label>
          <input
            type='radio'
            name='developer'
            value='backend'
            disabled={!isDev ?? false}
            onChange={(event) => setTypeDev(event.target.value)}
          />
          Backend
        </label>
        <label>
          <input
            type='radio'
            name='developer'
            value='frontend'
            disabled={!isDev ?? false}
            onChange={(event) => setTypeDev(event.target.value)}
          />
          Frontend
        </label>
      </div>

      {/* Select */}
      <select
        name='turno'
        value={typeTech}
        onChange={(event) => setTypeTech(event.target.value)}
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
        onChange={(event) => {
          setCommentsValue(event.target.value);
          event.target.style.border =
            event.target.value === '' ? '1px solid red' : 'none';
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
