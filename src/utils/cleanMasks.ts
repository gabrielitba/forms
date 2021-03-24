// CPF
export const cpfWithoutSpecialCharacters = (cpf: string): string => {
  return cpf.replace(/\./g, '').replace(/-/g, '');
};

// RG
export const rgWithoutSpecialCharacters = (rg: string): string => {
  return rg.replace(/\./g, '').replace(/-/g, '');
};

// Datas
export const birthdateToBackEnd = (birthdate: string): string => {
  // return moment(new Date(birthdate)).format('YYYY-MM-DD');
  const dateSplit = birthdate.split('/');
  // return `${dateSplit[2]}-${dateSplit[1]}-${dateSplit[0]}`;
  return `${dateSplit[0]}-${dateSplit[1]}-${dateSplit[2]}`;
};

// Telefone e celular
export const phoneAndCellPhoneToBackend = (phone: string): string => {
  return phone
    .replace(/\(/g, '')
    .replace(/\)/g, '')
    .replace(/-/g, '')
    .replace(' ', '');
};

// CNPJ
export const cnpjWithoutSpecialCharacters = (cnpj: string): string => {
  return cnpj.replace(/\./g, '').replace(/\//g, '').replace(/-/g, '');
};
