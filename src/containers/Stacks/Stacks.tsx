import { useEffect, useState } from 'react'
import Filters from '../../components/Filters/Filters'
import Pill from '../../components/Pill/Pill'
import './Stacks.scss'
import { STACKS } from '../../constants/stacks'
import Divider from '../../components/Divider/Divider'
import { FILTERS } from '../../constants/filters'

function Stacks() {
  const [filters, setFilters] = useState({...FILTERS})
  const [stacks, setStacks] = useState([...STACKS])

  useEffect(() => {
    // Filter stacks
  }, [filters])
  
  return (
    <div className='Stacks'>
      <Filters setFilters={setFilters} filters={filters} />
      <Divider width='50%' />
      <div className='list'>
        {stacks.map((stack) => {
          return (
            <Pill text={stack.name} key={stack.name} />
          )
        })}
      </div>
    </div>
  )
}

export default Stacks