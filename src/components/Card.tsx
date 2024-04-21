import React, { useState, useEffect } from 'react';
import './Avatar.css';

const URL_RANDOM_AVATAR = 'https://api.minimalavatars.com/avatar/random/png';

const Card: React.FC = () => {
  const [avatarUrl, setAvatarUrl] = useState<string>('');
  const [description, setDescription] = useState<string>('');

  useEffect(() => {
    fetchRandomAvatar();
  }, []);

  const fetchRandomAvatar = () => {
    const randomNumber = Math.floor(Math.random() * 100);
    setAvatarUrl(`${URL_RANDOM_AVATAR}?${Date.now()}`);
    setDescription(`Avatar ${randomNumber}`);
  };

  return (
    <div className="card" >
      <h1>Random Image</h1>
      <img
        className="avatar-image"
        src={avatarUrl}
        alt="Card"
        onClick={fetchRandomAvatar}
      />
       <hr style={{ width: '100%', margin: '5px 0' }} />
             <h3 style={{ fontFamily: 'Arial, sans-serif', textAlign: 'left', fontStyle: 'italic' }}>Descripcion:</h3>
             <p className="description">{description}</p>
    </div>
  );
};



export default Card;