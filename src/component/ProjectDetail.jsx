import React from 'react'
import { useParams, useLocation } from 'react-router-dom'

const ProjectDetail = () => {

  const { projectId } = useParams();
  const { state } = useLocation();

  return (
    <div>
      {projectId}
    </div>
  )
}

export default ProjectDetail
