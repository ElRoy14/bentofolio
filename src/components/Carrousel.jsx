import React, { useState } from 'react';
import GetImageUrl from './GetImageUrl.jsx';
import Grid from './Grid.jsx';

export function Carrousel({ projects, isImage }) {
  const [position, setPosition] = useState(0);

  return (
    <div className="container">
      <GenerateCards
        images={projects}
        position={position}
        setPosition={setPosition}
        isImage={isImage}
      />
      <Dots count={projects.length} position={position} />
    </div>
  );
}

function GenerateCards({ images, position, setPosition, isImage }) {
  function handleClick() {
    let next = position + 1;
    if (next === images.length) next = 0;
    setPosition(next);
  }

  let content;

  console.log(isImage);

  if (isImage) {
    content = (
      <img
        onClick={handleClick}
        src={GetImageUrl(images[position].image)}
        alt={images[position].name}
      />
    );
  } else {
    console.log(images);
    content = (
      <Grid techs={images} handleClick={handleClick} position={position} />
    );
  }

  return (
    <div className="cards">
      <div className="card" key={images[position].id}>
        {content}
      </div>
    </div>
  );
}

function Dots({ count, position }) {
  return (
    <div className="dots-wrapper">
      {Array.from({ length: count }).map((_, i) => (
        <p key={i} className={i === position ? 'bold' : ''}></p>
      ))}
    </div>
  );
}

export default Carrousel;
