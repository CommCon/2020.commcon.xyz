/** @jsx jsx */
import { jsx, Styled, Flex, Box } from 'theme-ui'
import moment  from 'moment-timezone'
import useWebShare from 'react-use-web-share'

import {
  Youtube,
  ExternalLink,
  Share2
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
  youtubeid,
  slug
}) => {

  let localTimezoneGuess = moment.tz.guess(true);

  let pacificDiff = moment.utc(datetime).tz('America/Los_Angeles').format('D') - moment.utc(datetime).format('D')
  let australiaDiff = moment.utc(datetime).tz('Australia/Melbourne').format('D') - moment.utc(datetime).format('D')
  let localDiff = moment.utc(datetime).tz(localTimezoneGuess).format('D') - moment.utc(datetime).format('D')

  const { isSupported, loading, share } = useWebShare();

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
          `(${Math.sign(australiaDiff) ? '+' : '-'} ${australiaDiff})`
        )}<br />
        {moment.utc(datetime).tz('Europe/Paris').format('HH:mm')} CEST <br />
        {moment.utc(datetime).tz('Europe/London').format('HH:mm')} BST <br />
        {moment.utc(datetime).tz('America/New_York').format('HH:mm')} EDT <br />
        {moment.utc(datetime).tz('America/Los_Angeles').format('HH:mm')} PDT {pacificDiff !== 0 && (
          `(${pacificDiff})`
        )}<br />
        {moment.utc(datetime).tz(localTimezoneGuess).format('HH:mm')} Local {localDiff !== 0 && (
          `(${localDiff})`
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
          <span><Styled.a href={`/speaker/${item.id}`}>{item.name}</Styled.a><br /></span>
          // <p>{item.name}</p>
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
      {youtubeid && (
        <IconLink href={`https://www.youtube.com/watch?v=${youtubeid}`}>
          <Youtube />
        </IconLink>
      )}
      <IconLink href={`/session/${slug}`}>
        <ExternalLink />
      </IconLink>
      { !loading && isSupported && (
        <Box
          sx={{
            display: 'inline-block',
            p: 2,
            color: 'inherit',
            textDecoration: 'none',
            '&:hover': {
              color: 'primary',
            },
            '& > svg': {
              display: 'inline-block',
              verticalAlign: 'middle',
            }
          }}
        >
          <Share2 onClick={share.bind(share, {
            title: title,
            text: title,
            url: `/session/${slug}`
          })}/>
        </Box>
      )}
    </Flex>
  </Flex>)
}
