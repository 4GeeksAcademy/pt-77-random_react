import React from 'react'

export default function Card(props) {
  let title = "";
  if (props.title == "first") {
    title = "last";
  }
  else {
    title = props.title
  }
  // JS PART
  return (

    <div class="card" style={{ "width": "350px" }}>
      <img src={props.img} class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">{title}</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  )
}
