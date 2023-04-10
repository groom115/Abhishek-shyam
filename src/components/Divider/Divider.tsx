import './Divider.scss'

function Divider({width = '100%'}: {width: string}) {
  return (
    <div className='Divider' style={{ maxWidth: width}}>
    </div>
  )
}

export default Divider