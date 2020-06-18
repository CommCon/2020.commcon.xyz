/** @jsx jsx */
import { Styled, jsx, Flex } from 'theme-ui'
import {
  Twitter,
  GitHub,
  Instagram
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
  instagram,
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
    <Styled.a
      href={url}
      title={name}
      sx={{
        textDecoration: 'none',
        color: '#000' //bodge
      }}>
      <Styled.h3>
        {name}
      </Styled.h3>
    </Styled.a>
    <Flex mx={-2}>
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
      {instagram && (
        <IconLink href={instagram}>
          <Instagram />
        </IconLink>
      )}
    </Flex>
  </Card>
