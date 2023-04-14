import Header from '../../components/Header/Header'
import Stacks from '../Stacks/Stacks'
import JobsTimeline from '../JobsTimeline/JobsTimeline'
import './Layout.scss'

function Layout() {
  return (
    <div className='Layout'>
      <Header />
      <JobsTimeline />
      {/* <Stacks /> */}
    </div>
  )
}

export default Layout
