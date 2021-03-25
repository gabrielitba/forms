export const cpfWithoutMask = (cpf: string): string =>
  cpf.replace(/\./g, '').replace(/-/g, '');

export const rgWithoutMask = (rg: string): string =>
  rg.replace(/\./g, '').replace(/-/g, '');

export const cnpjWithoutMask = (cnpj: string): string =>
  cnpj.replace(/\./g, '').replace(/\//g, '').replace(/-/g, '');

export const phoneWithoutMask = (phone: string): string =>
  phone
    .replace(/\(/g, '')
    .replace(/\)/g, '')
    .replace(/-/g, '')
    .replace(' ', '');
