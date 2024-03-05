import React from 'react'

//ffc

function Course({image, title, desc}) {
    // const title=props.title
    // const desc=props.desc

    //const {title, desc} = props;

    return (
    <div>
     <div className="card">
        <div className="card-image">
         <figure class="image is-4by3">
         <img src={image} alt=""/>
         </figure>
     </div>
    <div className="media-content">
        <p className="title is-4">{title}</p>
    </div>
  <div className="card-content">
    <div className="content">
      {desc}
    </div>
  </div>
</div>
    </div>
    );
}

export default Course;




