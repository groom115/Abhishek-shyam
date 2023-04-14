import { VerticalTimeline }  from 'react-vertical-timeline-component'

import Job from './Job'
import { JobHistory } from '../../constants/WorkHistory'

import 'react-vertical-timeline-component/style.min.css'
import './JobsTimeline.scss'

function JobsTimeline() {
  return (
    <div className='JobsTimeline'>
      <VerticalTimeline>
        {JobHistory.map(job => 
          <Job
            job={job}
            key={`${job.title}|${job.company}`}
          />
        )}
      </VerticalTimeline>
    </div>
  )
}

export default JobsTimeline