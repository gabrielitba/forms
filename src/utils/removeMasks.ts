export const cpfRemoveMask = (cpf: string): string => {
  return cpf.replace(/\./g, '').replace(/-/g, '');
};

export const rgRemoveMask = (rg: string): string => {
  return rg.replace(/\./g, '').replace(/-/g, '');
};

export const cnpjRemoveMask = (cnpj: string): string => {
  return cnpj.replace(/\./g, '').replace(/\//g, '').replace(/-/g, '');
};

export const phoneRemoveMask = (phone: string): string => {
  return phone
    .replace(/\(/g, '')
    .replace(/\)/g, '')
    .replace(/-/g, '')
    .replace(' ', '');
};
