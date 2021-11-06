import React from 'react';
import 'css-doodle';

const Doodle = () => {
  return (
    <css-doodle>{`
      :doodle { 
        @grid: 1x10 / 61.8vmin; 
      }
    
      @place-cell: center; 
      @size: calc(@index() * 10%);
      
      border-radius: 50%;
      border-style: dashed;
      border-width: calc(@index() * 1vmin); 
      border-color: hsla(
        calc(20 * @index()), 70%, 68%, 
        calc(3 / @index() * .8)
      );
      
      --d: @rand(20s, 40s); 
      --rf: @rand(360deg);
      --rt: calc(var(--rf) + @pick(1turn, -1turn));
    
      animation: spin var(--d) linear infinite;
      @keyframes spin {
        from { transform: rotate(var(--rf)) }
        to   { transform: rotate(var(--rt)) }
      }
    `}</css-doodle>
  );
}

export default Doodle;