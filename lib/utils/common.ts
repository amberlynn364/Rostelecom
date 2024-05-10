import { closeSearchModal } from '@/context/modals';

export const addOverflowHiddenToBody = (paddingRight = ''): void => {
  const body = document.body;
  body.classList.add('overflow-hidden');
  paddingRight && (body.style.paddingRight = paddingRight);
};

export const removeOverflowHiddenToBody = (): void => {
  document.body.classList.remove('overflow-hidden');
};

export const getWindowWidth = (): { windowWidth: number } => {
  const { innerWidth: windowWidth } =
    typeof window !== 'undefined' ? window : { innerWidth: 0 };

  return { windowWidth };
};

export const handleCloseSearchModal = (): void => {
  closeSearchModal();
  removeOverflowHiddenToBody();
};
