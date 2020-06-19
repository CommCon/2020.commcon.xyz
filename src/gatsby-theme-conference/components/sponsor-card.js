/** @jsx jsx */
import { Styled, jsx, Flex } from 'theme-ui'
import {
  Twitter,
  GitHub,
  Instagram,
  ExternalLink
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
    <Styled.h3>
      {name}
    </Styled.h3>
    <Flex mx={-2}>
      {twitter && (
        <IconLink href={`https://twitter.com/${twitter}`}>
          <Twitter />
        </IconLink>
      )}
      {github && (
        <IconLink href={`https://github.com/${github}`}>
          <GitHub />
        </IconLink>
      )}
      {instagram && (
        <IconLink href={`https://instagram.com/${instagram}`}>
          <Instagram />
        </IconLink>
      )}
      {url && (
        <IconLink href={url}>
          <ExternalLink />
        </IconLink>
      )}
    </Flex>
  </Card>
