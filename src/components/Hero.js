import React, { useEffect, useState } from "react";
import "./../styling/hero/hero.css";

export default function Hero() {
  const [animateCells, setAnimateCells] = useState([]);

  function randomCells(){
    const cells = Array.from(document.getElementsByClassName('cell'));

    //Order amount of cells per color
    const animate_cells_amount = Math.floor(Math.random() * (cells.length / 5));
      //Red
      const animate_cells_part_red = Math.floor(animate_cells_amount / 100 * 80) + 1;
      //Grey
      const animate_cells_part_grey = Math.floor(animate_cells_amount / 100 * 20) + 1;

      //Total
      const total_animate_cells_array = [animate_cells_part_red, animate_cells_part_grey];

    const random_indexes = [
      {
        color: 'red',
        array: [],
      },
      {
        color: 'grey',
        array: [],
      }
    ];

    for(let c = 0; c < total_animate_cells_array.length; c++) {
        for(let i = 0; i < total_animate_cells_array[c]; i++){
            const random_i = Math.floor(Math.random() * (cells.length));
            if(!random_indexes[0].array.includes(random_i) && !random_indexes[1].array.includes(random_i) ){
                random_indexes[c].array.push(random_i);
            } else {
                i--;
            }
        }
    }
  
      setAnimateCells(random_indexes);   
  }

  useEffect(() => {
    randomCells();
  }, [])
  
  useEffect(() => {
    const cells = Array.from(document.getElementsByClassName('cell'));

    const cells_animated =  Array.from(document.getElementsByClassName('animated'));
    cells_animated.forEach(cell => {
        //Remove animation
        cell.classList.remove('animated');

        if(cell.classList.contains('red')){
            //Remove Red
            cell.classList.remove('red');
        }

        if(cell.classList.contains('grey')){
            //Remove Grey
            cell.classList.remove('grey');
        }
    })

    animateCells.forEach(set => {
        for(let i = 0; i < set.array.length; i++){
            cells[set.array[i]].classList.add('animated', set.color);
        }
    })
    setTimeout(() => {

      randomCells();
    }, 3000)

  }, [animateCells])

  return (
    <section id="hero-container">
      <div id="hero">
        <div className="blank"></div>
        <div className="blank"></div>
        <div className="blank"></div>
        <div className="blank"></div>
        <div className="cell"></div>
        <div className="cell"></div>
        <div className="cell"></div>
        <div className="cell"></div>
        <div className="cell"></div>
        <div className="cell"></div>
        <div className="cell"></div>
        <div className="blank"></div>
        <div className="blank"></div>

        <div className="blank"></div>
        <div className="blank"></div>
        <div className="blank"></div>
        <div className="cell"></div>
        <div className="cell"></div>
        <div className="cell"></div>
        <div className="cell"></div>
        <div className="cell"></div>
        <div className="cell"></div>
        <div className="cell"></div>
        <div className="cell"></div>
        <div className="cell"></div>
        <div className="blank"></div>

        <div className="blank"></div>
        <div className="blank"></div>
        <div className="cell"></div>
        <div className="cell"></div>
        <div className="cell"></div>
        <div className="cell"></div>
        <div className="cell"></div>
        <div className="cell"></div>
        <div className="cell"></div>
        <div className="cell"></div>

        <div className="blank"></div>
        <div className="cell"></div>
        <div className="cell"></div>
        <div className="cell"></div>
        <div className="cell"></div>
            <div id="logo">
            </div>
        <div className="cell"></div>
        <div className="cell"></div>
        <div className="cell"></div>
        <div className="cell"></div>
        <div className="cell"></div>

        <div className="blank"></div>
        <div className="blank"></div>
        <div className="cell"></div>
        <div className="cell"></div>
        <div className="cell"></div>
        <div className="cell"></div>
        <div className="cell"></div>
        <div className="cell"></div>
        <div className="cell"></div>
        <div className="cell"></div>

        <div className="blank"></div>
        <div className="blank"></div>
        <div className="blank"></div>
        <div className="cell"></div>
        <div className="cell"></div>
        <div className="cell"></div>
        <div className="cell"></div>
        <div className="cell"></div>
        <div className="cell"></div>
        <div className="cell"></div>
        <div className="cell"></div>
        <div className="cell"></div>
        <div className="blank"></div>

        <div className="blank"></div>
        <div className="blank"></div>
        <div className="blank"></div>
        <div className="blank"></div>
        <div className="cell"></div>
        <div className="cell"></div>
        <div className="cell"></div>
        <div className="cell"></div>
        <div className="cell"></div>
        <div className="cell"></div>
        <div className="cell"></div>
        <div className="blank"></div>
        <div className="blank"></div>
      </div>
    </section>
  );
}
