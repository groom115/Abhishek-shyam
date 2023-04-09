import Links from '../Links/LInks'
import LocationIcon from '../../assets/location.svg'
import './PersonalDetails.scss'

function PersonalDetails() {
  return (
    <div className='PersonalDetails'>
      <div className='name'>Tasos Boulis</div>
      <div className='impostorEffect'>Full-Stack Software Engineer</div>
      <div className='location'>
        <img src={LocationIcon} />
        <span>Athens, Greece</span>
      </div>
      <Links />
    </div>
  )
}

export default PersonalDetails