import React, { useState } from 'react';
import './App.css'; 

function PigGame() {
  const [level, setLevel] = useState(0);
  const [size, setSize] = useState(150); 

  const feedPig = (amount) => {
    const newLevel = level + amount;
    setLevel(newLevel);
    setSize(size + amount * 2); 
  };

  const pigImage = level >= 100 
    ? 'https://www.newtv.co.th/images/content/ct_20240911110459840.jpg' 
    : 'https://thejoi.com/wp-content/uploads/2024/09/%E0%B8%A0%E0%B8%B2%E0%B8%9E%E0%B8%96%E0%B9%88%E0%B8%B2%E0%B8%A2%E0%B8%AB%E0%B8%99%E0%B9%89%E0%B8%B2%E0%B8%88%E0%B8%AD-2567-09-15-%E0%B9%80%E0%B8%A7%E0%B8%A5%E0%B8%B2-20.37.42.webp'; 

  return (
    <div className="game-container">
      <h2 className="game-title">เกมส์เลี้ยง “หมูเด้ง”</h2>
      <img 
        src={pigImage}  
        className="pig-image"
        style={{ width: `${size}px`, height: `${size}px` }} 
      />
      <div className="food-buttons">
        <button onClick={() => feedPig(5)} className="food-button">
          <img src="https://png.pngtree.com/png-vector/20240205/ourmid/pngtree-cute-and-smile-cartoon-fruit-colorful-character-watermelon-png-image_11642264.png" alt="แตงโม" className="food-image" />
        </button>
        <button onClick={() => feedPig(10)} className="food-button">
          <img src="https://img.lovepik.com/free-png/20211212/lovepik-pumpkin-png-image_401525386_wh1200.png" alt="ฟักทอง" className="food-image" />
        </button>
        <button onClick={() => feedPig(20)} className="food-button">
          <img src="https://e7.pngegg.com/pngimages/871/362/png-clipart-cartoon-grass-turf-green-land-thumbnail.png" alt="หญ้า" className="food-image" />
        </button>
      </div>

      {}
      <div className="level-container">
        <h2 className="level">Level: {level}</h2>
      </div>
    </div>
  );
}

export default PigGame;
