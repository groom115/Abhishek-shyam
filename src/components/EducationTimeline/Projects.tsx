import { useState } from 'react'

import { Job } from '../../constants/WorkHistory'
import Technologies from './Technologies'

function Projects({projects}: {projects: Job['projects']}) {
  const [collapsed, setCollapsed] = useState(false);
  
  const toggleCollapsed = () => {
    setCollapsed(prev => !prev)
  }
  
  if (projects && projects.length > 0) {

    const collapsedClassName = collapsed ? 'collapsed' : ''
    return (
      <div className='Projects'>
        <div className='title' onClick={toggleCollapsed}>
          <span className={`caret ${collapsedClassName}`}>{'▶'}</span>
          {' Projects: '}
        </div>
        <ul className={`list ${collapsedClassName}`}>
          {projects.map(project => {
            return (
              <li className='project' key={project.name}>
                <div className='name'>
                  {project.name}
                </div>
                {project.description && <div className='description'>

                </div>}
                <Technologies technologies={project.technologies}/>
              </li>
            )
          })}
        </ul>
      </div>
    )
  }

  return null
}

export default Projects