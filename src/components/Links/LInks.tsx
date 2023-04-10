import GithubIcon from '../../assets/github-icon.svg'
import GithubLogo from '../../assets/github.png'
import LinkedinLogo from '../../assets/linkedin.png'
import StackOverflowLogo from '../../assets/stackoverflow.svg'
import './Links.scss'

function Links() {
  return (
    <div className='Links'>
      <a className='github' href='https://github.com/tboulis' target='_blank'>
        <img src={GithubIcon} height={20} />
        <img src={GithubLogo} height={20} />
      </a>
      <a className='linkedin' href='https://www.linkedin.com/in/tasosboulis/' target='_blank'>
        <img src={LinkedinLogo} height={20}/>
      </a>
      <a className='stackoverflow' href='https://stackoverflow.com/users/5605822/tasos' target='_blank'>
        <img src={StackOverflowLogo} height={20}/>
      </a>
    </div>
  )
}

export default Links