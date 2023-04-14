import { useState } from 'react'

import './FancySwitch.scss'

type FancySwitchProps = {
  textA: string
  textB: string
  checked: boolean
  handleChange: () => void
}

function FancySwitch({ textA, textB, checked, handleChange }: FancySwitchProps) {  
  const labels = [textA, textB]
  const name = `${textA}${textB}`
  
  return (
    <div className='FancySwitch'>
      <div className={'toggle ' + name}>
        <input
          onChange={handleChange}
          type='checkbox'
          id={name}
          name={name}
          checked={checked}
        />
        <label htmlFor={name}>
          {labels.map((item, key) => {
            return <div className='toggleLabel' key={item}> {item}</div>;
          })}
          <div className='toggler' />
        </label>
      </div>
    </div>
  )
}

export default FancySwitch