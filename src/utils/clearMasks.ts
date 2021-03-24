// CPF
export const cpfWithoutMask = (cpf: string): string => {
  return cpf.replace(/\./g, '').replace(/-/g, '');
};

// RG
export const rgWithoutMask = (rg: string): string => {
  return rg.replace(/\./g, '').replace(/-/g, '');
};

// CNPJ
export const cnpjWithoutMask = (cnpj: string): string => {
  return cnpj.replace(/\./g, '').replace(/\//g, '').replace(/-/g, '');
};

// Datas
export const dateWithoutMask = (birthdate: string): string => {
  if (birthdate !== '') {
    // return moment(new Date(birthdate)).format('YYYY-MM-DD');
    const dateSplit = birthdate.split('/');
    // return `${dateSplit[2]}-${dateSplit[1]}-${dateSplit[0]}`;
    return `${dateSplit[0]}-${dateSplit[1]}-${dateSplit[2]}`;
  } else {
    return '';
  }
};

// Telefone e celular
export const phoneWithoutMask = (phone: string): string => {
  return phone
    .replace(/\(/g, '')
    .replace(/\)/g, '')
    .replace(/-/g, '')
    .replace(' ', '');
};
