import myPic from '../../assets/me.jpeg';
import './Avatar.scss'

function Avatar() {
  return (
    <img src={myPic} className='Avatar'/>
  )
}

export default Avatar