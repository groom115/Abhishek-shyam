import { Job, Link } from '../../constants/WorkHistory'

function ContributionLinks({link}: {link: Link}) {
  return (
    <a className='contributionLink' href={link.url} target='_blank' rel='noopener noreferrer'>
      {link.description}
    </a>
  )
}

function Contributions({contributionsLinks}: {contributionsLinks: Job['contributionsLinks']}) {
 
  if (contributionsLinks?.length ?? 0 > 0) {
    return (
      <p className='Contributions'>
        <u className='title'>
          {'Contributions links:'}
        </u>
        <span className='list'>
          {contributionsLinks?.map((link, i) => {
            return (
              <span key={`${link.url}|${link.description}`}>
                {i === 0 && ' '}
                {i > 0 && ', '}
                <ContributionLinks
                  link={link}
                  key={`${link.url}|${link.description}`}
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

export default Contributions