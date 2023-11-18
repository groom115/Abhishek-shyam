import { Job, Link } from '../../constants/WorkHistory'

function AppLinks({link}: {link: Link}) {
  return (
    <a className='contributionLink' href={link.url} target='_blank' rel='noopener noreferrer'>
      {link.description}
    </a>
  )
}

function Applications({appLinks}: {appLinks: Job['appLinks']}) {
  if (appLinks?.length ?? 0 > 0) {
    return (
      <p className='Applications'>
        <u className='title'>
          {'Application links:'}
        </u>
        <span className='list'>
          {appLinks?.map((link, i) => {
            return (
              <span key={`${link.url}|${link.description}`}>
                {i === 0 && ' '}
                {i > 0 && ', '}
                <AppLinks
                  link={link}
                />
              </span>
            )
          })}
        </span>
      </p>
    )
  }

  return null
}

export default Applications