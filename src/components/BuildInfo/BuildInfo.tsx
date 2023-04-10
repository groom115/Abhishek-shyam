import reactLogo from '../../assets/react.svg'
import viteLogo from '/vite.svg'
import './App.scss'

function BuildInfo() {
  return (
    <div className='BuildInfo'>
      <div>
        <a href='https://vitejs.dev' target='_blank'>
          <img src={viteLogo} className='logo' alt='Vite logo' />
        </a>
        <a href='https://reactjs.org' target='_blank'>
          <img src={reactLogo} className='logo react' alt='React logo' />
        </a>
      </div>
      <h1>Vite + React</h1>
    </div>
  )
}

export default BuildInfo
