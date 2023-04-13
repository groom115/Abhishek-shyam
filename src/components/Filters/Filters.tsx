import { FILTERS } from '../../constants/filters'
import Filter from './Filter'
import './Filters.scss'

export type FiltersType = Record<string, boolean>

type FilterProps = {
  filters: FiltersType
  setFilters: React.SetStateAction<any>
}

function Filters({ filters, setFilters }: FilterProps) {
  const onFilterClick = (name: string) => {
    setFilters((prevFilters: FiltersType) => {
      const newFilters = {
        ...prevFilters,
        [name]: !filters[name],
      }
      const notAllFilters = {
        ...newFilters,
      }
      delete notAllFilters.all
      const someValuesSelected = Object.values(notAllFilters).some(value => value)

      // unselect 'all'
      if (name !== 'all' && someValuesSelected && newFilters.all) {
        newFilters.all = false
      }

      //default select 'all'
      if (!someValuesSelected) {
        newFilters.all = true
      }

      // select 'all' when user selects all the other filters
      const allValuesSelected = Object.values(notAllFilters).every(value => value);
      if (allValuesSelected) {
        return FILTERS
      }

      // unselect other filters when selecting 'all'
      if (name === 'all' && newFilters.all) {
        return FILTERS
      }

      return newFilters
    })
  }

  return (
    <div className='Filters'>
      {Object.keys(filters).map(key => {
        return (
          <Filter
            active={filters[key]}
            name={key}
            onClick={() => onFilterClick(key)}
            key={key}
          />
        )
      })}
    </div>
  )
}

export default Filters