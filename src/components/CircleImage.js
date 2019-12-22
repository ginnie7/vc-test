import React from 'react';
import Image from './Any_theme_big.png';

export default function CircleImage() {
  return (
    <div style={{ width: '370px', height: '370px', borderRadius: '50%', overflow: 'hidden' }}>
      <img src={Image} alt="Any theme" style={{ height: '100%', marginLeft: '-25px', width: 'auto' }} />
    </div>
  );
}
