import { SyntheticEvent, useState } from 'react';

export const useImagePreloader = () => {
  const [imgSpinner, setImageSpinner] = useState(true);

  const handleLoadingImageComplete = async (
    img: SyntheticEvent<HTMLImageElement, Event>
  ) => {
    img.currentTarget.classList.remove('opacity-0');
    setImageSpinner(false);
  };

  return { handleLoadingImageComplete, imgSpinner };
};
