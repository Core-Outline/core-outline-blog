import React from "react";
import "./blog.css";
import { blog } from "../../assets/data/data";
import { AiOutlineTags, AiOutlineClockCircle } from "react-icons/ai";
import { Link } from "react-router-dom";

export const Card = () => {
  return (
    <section className='blog'>
      <div className='container grid3'>
        {blog.map((item) => (
          <Link to={`/details/${item.id}`} key={item.id} className='box boxItems'>
            <div className='img'>
              <img src={item.cover} alt='' />
            </div>
            <div className='details'>
              <div className='tag'>
                <AiOutlineTags className='icon' />
                <a href={`https://example.com/share/${item.id}`}>#{item.category}</a>
              </div>
              <h3>{item.title}</h3>
              <p>{item.desc.slice(0, 180)}...</p>
              <div className='date'>
                <AiOutlineClockCircle className='icon' /> <label htmlFor=''>{item.date}</label>
               
                <a href={`https://example.com/share/${item.id}`}>READ MORE</a>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};
