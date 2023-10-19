import React from 'react';
import IShape from '../Interfaces/IShape';
import shapes from '../Data/shapes';

const Shape: React.FC<IShape> = ({ }) => {

  const getRandomShape = () => {
    const randomNr = Math.floor(Math.random() * shapes.length);
    const shape = shapes[randomNr];
    console.log(shape);
    return shape;
  };

  const shape = getRandomShape();

  return (
    <>
      {shape.map((row, i) => {
        return (
          <div className="h-[30px]">
            {row.map((block, j) => {
              return (
                <div className={`my-0 w-[30px] h-[30px] inline-block ${block === 1 ? 'bg-red-500 ' : ''}`} key={i + j}></div>
              );
            })}
          </div>
        );
      })}
    </>
  );
};

export default Shape;