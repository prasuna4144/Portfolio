import React from "react"

const Card = (props) => {
  return (
    <>
      <div className='box btn_shadow'>
        <div className='title_content d_flex'>
          <div className='title'>
            <h2>{props.course}</h2>
            <span>{props.year}</span>
          </div>
          <div className='rate'>
            <button className='btn_shadow '>{props.CGPA}</button>
          </div>
        </div>
        <hr />
        <p>{props.stream}</p>
      </div>
    </>
  )
}

export default Card