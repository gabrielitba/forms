export const cpfMask = (value: string): string => {
  return value
    .replace(/[^\d]/g, '')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d{1,2})/, '$1-$2')
    .replace(/(-\d{2})\d+?$/, '$1');
};

export const rgMask = (value: string): string => {
  return value
    .replace(/[^\d]/g, '')
    .replace(/(\d{2})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d{1,2})/, '$1-$2')
    .replace(/(-\d{1})\d+?$/, '$1');
};

export const ieMask = (value: string): string => {
  return value
    .replace(/[^\d]/g, '')
    .replace(/(\d{2})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{2})(\d{2})/, '$1-$2')
    .replace(/(-\d{1})\d+?$/, '$1');
};

export const dateMask = (value: string): string => {
  return value
    .replace(/[^\d]/g, '')
    .replace(/(\d{2})(\d)/, '$1-$2')
    .replace(/(\d{2})(\d)/, '$1-$2')
    .replace(/(-\d{4})\d+?$/, '$1');
};

export const phoneMask = (value: string): string => {
  return value
    .replace(/[^\d]/g, '')
    .replace(/(\d{2})(\d)/, '($1) $2')
    .replace(/(\d{4})(\d)/, '$1-$2')
    .replace(/(-\d{4})\d+?$/, '$1');
};

export const cellPhoneMask = (value: string): string => {
  return value
    .replace(/[^\d]/g, '')
    .replace(/(\d{2})(\d)/, '($1) $2')
    .replace(/(\d{5})(\d)/, '$1-$2')
    .replace(/(-\d{4})\d+?$/, '$1');
};
