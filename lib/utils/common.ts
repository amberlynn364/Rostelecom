export const addOverflowHiddenToBody = (): void => {
  document.body.classList.add('overflow-hidden');
};

export const removeOverflowHiddenToBody = (): void => {
  document.body.classList.remove('overflow-hidden');
};

export const getWindowWidth = (): { windowWidth: number } => {
  const { innerWidth: windowWidth } = typeof window
    ? window
    : { innerWidth: 0 };

  return { windowWidth };
};
