import React, { useState, useEffect } from 'react';
import { Avatar } from '@files-ui/react';
import Cookies from 'js-cookie';
const imageSrc =
  'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/2048px-Default_pfp.svg.png';

const AvatarPickingFile = () => {
  const [imageSource, setImageSource] = useState(imageSrc);

  // Load saved image source from local storage on component mount
  useEffect(() => {
    const savedImage = Cookies.get('avatarImage');
    if (savedImage) {
      setImageSource(savedImage);
    }
  }, []);

  const handleChangeSource = (selectedFile) => {
    setImageSource(selectedFile);
    // Save the selected image source to local storage
    Cookies.set('avatarImage', selectedFile, { expires: 365 });
  };

  return (
    <Avatar src={imageSource} alt="Avatar" variant="circle" onChange={handleChangeSource} />
  );
};

export default AvatarPickingFile;
