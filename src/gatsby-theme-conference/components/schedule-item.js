/** @jsx jsx */
import { jsx, Styled, Flex } from 'theme-ui'
import moment  from 'moment-timezone'

import {
  Youtube,
  ExternalLink
} from 'react-feather'

import {
  IconLink,
} from 'gatsby-theme-conference'

export default ({
  date,
  datetime,
  time,
  speaker,
  title,
  description,
  youtube,
  slug
}) => {

  let pacificDiff = moment.utc(datetime).tz('America/Los_Angeles').format('D') - moment.utc(datetime).format('D')
  let australiaDiff = moment.utc(datetime).tz('Australia/Melbourne').format('D') - moment.utc(datetime).format('D')

  return (<Flex
    sx={{
      flexWrap: [ 'wrap', 'nowrap' ],
      alignItems: 'baseline',
    }}>
    <div
      sx={{
        flex: 'none',
        width: [ '50%', 207 ],
      }}>
      <Styled.h3
        sx={{
          fontSize: 3,
        }}>
        {moment.utc(datetime).tz('Australia/Melbourne').format('HH:mm')} AEST {australiaDiff !== 0 && (
          `${Math.sign(australiaDiff) ? '+' : '-'} ${australiaDiff} day`
        )}<br />
        {moment.utc(datetime).tz('Europe/Paris').format('HH:mm')} CEST <br />
        {moment.utc(datetime).tz('Europe/London').format('HH:mm')} BST <br />
        {moment.utc(datetime).tz('America/New_York').format('HH:mm')} EST <br />
        {moment.utc(datetime).tz('America/Los_Angeles').format('HH:mm')} PST {pacificDiff !== 0 && (
          `${pacificDiff} day`
        )}
      </Styled.h3>
    </div>
    <div
      sx={{
        flex: 'none',
        width: [ '50%', 307 ],
        paddingRight: 10
      }}>
      <Styled.h4
        sx={{
          fontSize: 3,
        }}>
        {title}
      </Styled.h4>
      {speaker && (
        speaker.map((item) => (
          // <span><Styled.a href={`/speaker/${item.id}`}>{item.name}</Styled.a><br /></span>
          <p>{item.name}</p>
        ))
      )}
    </div>
    <div sx={{ width: '100%' }}>
      <Styled.p>
      </Styled.p>
      <Styled.p>
        {description}
      </Styled.p>
    </div>
    <Flex mx={-2}>
      {youtube && (
        <IconLink href={youtube}>
          <Youtube />
        </IconLink>
      )}
      {/* <IconLink href={`/session/${slug}`}>
        <ExternalLink />
      </IconLink> */}
    </Flex>
  </Flex>)
}
