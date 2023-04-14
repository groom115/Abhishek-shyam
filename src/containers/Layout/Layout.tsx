import { useState } from 'react'

import Header from '../../components/Header/Header'
import FancySwitch from '../../components/FancySwitch/FancySwitch'

import JobsTimeline from '../JobsTimeline/JobsTimeline'
import Stacks from '../Stacks/Stacks'

import './Layout.scss'

function Layout() {
  const [checked, setChecked] = useState(true)

  const handleChange = () => {
    setChecked(prev => !prev)
  }
  
  return (
    <div className='Layout'>
      <Header />
      <FancySwitch textA='Stacks' textB='Jobs' checked={checked} handleChange={handleChange}/>
      {!checked && <JobsTimeline />}
      {checked && <Stacks />}
    </div>
  )
}

export default Layout
