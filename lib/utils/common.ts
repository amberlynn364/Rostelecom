export const addOverflowHiddenToBody = (): void => {
  document.body.classList.add('overflow-hidden');
};

export const removeOverflowHiddenToBody = (): void => {
  document.body.classList.remove('overflow-hidden');
};
