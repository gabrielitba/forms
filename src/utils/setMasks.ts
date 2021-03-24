// CPF Mask
export const cpfMask = (value: string): string => {
  return value
    .replace(/[^\d]/g, '')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d{1,2})/, '$1-$2')
    .replace(/(-\d{2})\d+?$/, '$1');
};

// RG Mask
export const rgMask = (value: string): string => {
  return value
    .replace(/[^\d]/g, '')
    .replace(/(\d{2})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d{1,2})/, '$1-$2')
    .replace(/(-\d{1})\d+?$/, '$1');
};

// CPNJ Mask
export const cnpjMask = (value: string): string => {
  return value
    .replace(/[^\d]/g, '')
    .replace(/(\d{2})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d{1,2})/, '$1/$2')
    .replace(/(\d{4})(\d{1,2})/, '$1-$2')
    .replace(/(-\d{2)\d+?$/, '$1');
};

// IE Mask
export const ieMask = (value: string): string => {
  return value
    .replace(/[^\d]/g, '')
    .replace(/(\d{2})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{2})(\d{2})/, '$1-$2')
    .replace(/(-\d{1})\d+?$/, '$1');
};

// Data Mask
export const dateMask = (value: string): string => {
  return value
    .replace(/[^\d]/g, '')
    .replace(/(\d{2})(\d)/, '$1/$2')
    .replace(/(\d{2})(\d)/, '$1/$2')
    .replace(/(-\d{4})\d+?$/, '$1');
};

// Telefone Mask
export const phoneMask = (value: string): string => {
  return value
    .replace(/[^\d]/g, '')
    .replace(/(\d{2})(\d)/, '($1) $2')
    .replace(/(\d{4})(\d)/, '$1-$2')
    .replace(/(-\d{4})\d+?$/, '$1');
};

// Celular Phone Mask
export const cellPhoneMask = (value: string): string => {
  return value
    .replace(/[^\d]/g, '')
    .replace(/(\d{2})(\d)/, '($1) $2')
    .replace(/(\d{5})(\d)/, '$1-$2')
    .replace(/(-\d{4})\d+?$/, '$1');
};
