/** @jsx jsx */
import { jsx, Styled, Flex } from 'theme-ui'
import {
  Youtube
} from 'react-feather'

import {
  IconLink,
} from 'gatsby-theme-conference'

export default ({
  date,
  time,
  speaker,
  title,
  description,
  youtube
}) =>
  <Flex
    sx={{
      flexWrap: [ 'wrap', 'nowrap' ],
      alignItems: 'baseline',
    }}>
    {/* <div
      sx={{
        flex: 'none',
        width: [ '50%', 128 ],
      }}>
      <Styled.h3
        sx={{
          fontSize: 3,
        }}>
        {time}
      </Styled.h3>
    </div> */}
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
      {speaker && speaker.name}
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
  </Flex>
