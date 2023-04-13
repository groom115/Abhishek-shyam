import { useEffect, useState } from 'react'
import Filters from '../../components/Filters/Filters'
import Pill from '../../components/Pill/Pill'
import { STACKS, StackCategory, Stack } from '../../constants/stacks'
import Divider from '../../components/Divider/Divider'
import { FILTERS } from '../../constants/filters'

import './Stacks.scss'

function Stacks() {
  const [filters, setFilters] = useState({...FILTERS})
  const [stacks, setStacks] = useState([...STACKS])

  useEffect(() => {
    // Filter stacks
    if (filters.all) {
      setStacks([...STACKS])
    } else {
      const filteredStacks: Stack[] = []
      Object.keys(filters).forEach((key) => {
        if (key === 'all') return;

        if (filters[key] === true) {
          const results = [...STACKS].filter((stack) => stack.category.includes(key as StackCategory))
        
          // push one by one to avoid duplicates
          results.forEach((result) => {
            if (!filteredStacks.find((s) => s.name === result.name)) {
              filteredStacks.push(result)
            }
          })
        }
      })
      setStacks(filteredStacks)
    }
  }, [filters, setStacks])
  
  return (
    <div className='Stacks'>
      <div className='header'>{'Here is an interactive list of the stacks and tools I use:'}</div>
      <Filters
        setFilters={setFilters}
        filters={filters}
      />
      <Divider width='50%' />
      <div className='list'>
        {stacks.map((stack) => {
          return (
            <Pill stack={stack} key={stack.name} />
          )
        })}
      </div>
    </div>
  )
}

export default Stacks