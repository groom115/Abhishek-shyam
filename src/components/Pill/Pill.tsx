import './Pill.scss'

function Pill({text}: {text: string}) {
  return (
    <span className='Pill'>{text}</span>
  )
}

export default Pill