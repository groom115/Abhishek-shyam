import Avatar from '../Avatar/Avatar'
import PersonalDetails from '../PersonalDetails/PersonalDetails'
import './Header.scss'

function Header() {

  return (
    <div className='Header'>
      <Avatar />
      <PersonalDetails />
    </div>
  )
}

export default Header