import React from 'react';
import ICanvas from '../Interfaces/ICanvas.ts';
import Shape from './Shape.tsx';

const Canvas: React.FC<ICanvas> = ({}) => {
  return (
    <>
    <h1 className="text-center mt-10 text-2xl">TetriX React</h1>
    <div className="w-[300px] h-[720px] border-2 border-red-700 mx-auto mt-10">
      <Shape />
    </div>
    </>
  )
}

export default Canvas