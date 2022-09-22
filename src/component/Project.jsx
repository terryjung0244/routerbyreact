import React from 'react'
import { Link } from 'react-router-dom';

const projectList = ['project1', 'project2', 'project3'];

const Project = () => {

  const person = {
    name: 'sungjun',
    age: 30
  }

  return (
    <div>
      {projectList.map((project, index) => {
        return(
          <Link key={project} to={`/project/${project}`} state={person}>
            {project}
          </Link>
        )
      })}
    </div>
  )
}

export default Project
