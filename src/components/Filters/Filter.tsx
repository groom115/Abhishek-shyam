import { MouseEventHandler } from 'react';

type FilterProps = {
  active: boolean;
  name: string;
  onClick: MouseEventHandler<HTMLDivElement>;
}

function Filter({name, active, onClick}: FilterProps) {
  return (
    <div className={`Filter ${active ? 'active' : ''}`} onClick={onClick}>
      {name}
    </div>
  )
}

export default Filter