/** @jsx jsx */
import { jsx, Styled, Flex } from 'theme-ui'
import moment  from 'moment-timezone'

import {
  Youtube
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
  youtube
}) => {

  let pacificDiff = moment(datetime).tz('America/Los_Angeles').format('D') - moment(datetime).format('D')
  let australiaDiff = moment(datetime).tz('Australia/Melbourne').format('D') - moment(datetime).format('D')

  return (<Flex
    sx={{
      flexWrap: [ 'wrap', 'nowrap' ],
      alignItems: 'baseline',
    }}>
    <div
      sx={{
        flex: 'none',
        width: [ '50%', 128 ],
      }}>
      <Styled.h3
        sx={{
          fontSize: 3,
        }}>
        {moment(datetime).tz('Australia/Melbourne').format('HH:mm')} AEST {australiaDiff != 0 && (
          `${Math.sign(australiaDiff) ? '+' : '-'} ${australiaDiff} day`
        )}<br />
        {moment(datetime).tz('Europe/London').format('HH:mm')} BST <br />
        {moment(datetime).tz('America/New_York').format('HH:mm')} EST <br />
        {moment(datetime).tz('America/Los_Angeles').format('HH:mm')} PST {pacificDiff != 0 && (
          `${pacificDiff} day`
        )}
      </Styled.h3>
    </div>
    <div
      sx={{
        flex: 'none',
        width: [ '50%', 192 ],
      }}>
      <Styled.h4
        sx={{
          fontSize: 3,
        }}>
        {title}
      </Styled.h4>
      {speaker && (
        speaker.map((items) => (
          <Styled.p>{items.name}</Styled.p>
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
    </Flex>
  </Flex>)
}
