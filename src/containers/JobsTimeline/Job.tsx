import { VerticalTimelineElement } from 'react-vertical-timeline-component'

import Contributions from './Contributions'
import { Job } from '../../constants/WorkHistory'
import Logo from '../../components/Logo/Logo'
import Applications from './Applications'

const contentStyle: React.CSSProperties = {
  background: 'rgba(0, 0, 0, 0.3)',
  boxShadow: 'none',
}

const contentArrowStyle: React.CSSProperties = {
  borderRight: '7px solid  rgba(0, 0, 0, 0.3)',
}

const iconStyle: React.CSSProperties = {
  background: '#fff',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  boxShadow: 'none',
}

function JobItem({job}: {job: Job}) {
  const date = `${job.period.startDate} - ${job.period.endDate || 'present'}`

  return (
    <VerticalTimelineElement
        className='vertical-timeline-element--work'
        contentStyle={contentStyle}
        contentArrowStyle={contentArrowStyle}
        date={date}
        iconStyle={iconStyle}
        icon={<Logo src={job.logo} alt={job.company}/>}
      >
        <h3 className='vertical-timeline-element-title'>
          {job.title}
        </h3>
        <i className='vertical-timeline-element-subtitle'>
          {`${job.company} - ${job.location}`}
        </i>
        <p className='description'>
          {job.description}
        </p>
        <p className='technologies'>
          <u>{'Technologies:'}</u>
          {` ${job.technologies.join(', ')}`}
          </p>
        <Contributions job={job} />
        <Applications job={job} />
      </VerticalTimelineElement>
  )
}

export default JobItem