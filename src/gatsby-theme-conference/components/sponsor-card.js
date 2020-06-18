/** @jsx jsx */
import { Styled, jsx, Flex } from 'theme-ui'
import {
  Chrome,
  Twitter,
  GitHub
} from 'react-feather'

import {
    BackgroundImage,
    Card,
    IconLink,
  } from 'gatsby-theme-conference'

export default ({
  id,
  name,
  logo,
  company,
  url,
  github,
  twitter,
  ...props
}) =>
  <Card
    {...props}>
    <BackgroundImage
      src={logo}
      sx={{
        mb: 3,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat'
      }}
    />
    <Styled.h3>
      {name}
    </Styled.h3>
    <Styled.div
      sx={{
        fontSize: 1,
        fontWeight: 'bold',
        mb: 2,
      }}>
      {company}
    </Styled.div>
    <Flex mx={-2}>
      {url && (
        <IconLink href={url}>
          <Chrome />
        </IconLink>
      )}
      {twitter && (
        <IconLink href={twitter}>
          <Twitter />
        </IconLink>
      )}
      {github && (
        <IconLink href={github}>
          <GitHub />
        </IconLink>
      )}
    </Flex>
  </Card>
