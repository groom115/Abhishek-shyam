import NewTabIcon from '../../assets/new-tab.svg'

import './RepoWidget.scss'

function RepoWidget() {
  const handleClick = () => {
    window.open('https://github.com/tboulis/tasosboulis-com', '_blank', 'noopener noreferrer');
  }
  
  return (
    <div className='RepoWidget' onClick={handleClick}>
      {'Source code'}
      <img src={NewTabIcon} alt='Source code' rel='noopener noreferrer' height={20}/>
    </div>
  )
}

export default RepoWidget