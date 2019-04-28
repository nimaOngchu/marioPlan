import React from 'react'

const ProjectDetails = (props) => {
  const id = props.match.params.id;
  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Project Tiltle- {id}</span>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo ut, error omnis nostrum pariatur ad, facilis quos totam recusandae asperiores aperiam vero dolore ipsam modi, quam rerum enim facere quae.</p>
        </div>
        <div className="card-action grey lighten-4 grey-text">
          <div>Posted by Nima Sherp </div>
          <div>2nd septemver, 1 am</div>
        </div>
      </div>
 </div>
  )
}

export default ProjectDetails
