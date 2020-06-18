/** @jsx jsx */
import { Styled, jsx, Flex } from 'theme-ui'
import {
  Twitter,
  GitHub,
  Instagram,
  Linkedin,
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
  image,
  bio,
  company,
  twitter,
  instagram,
  github,
  linkedin,
  url,
  ...props
}) =>
  <Card
    {...props}>
    <BackgroundImage
      src={image}
      sx={{
        mb: 3,
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
    <Styled.p
      sx={{
        mb: 0,
      }}
      // dangerouslySetInnerHTML={{ __html: paragraphs(bio) }}
    >
      {bio}
    </Styled.p>
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
      {linkedin && (
        <IconLink href={`https://www.linkedin.com/in/${linkedin}`}>
          <Linkedin />
        </IconLink>
      )}
      {url && (
        <IconLink href={url}>
          <ExternalLink />
        </IconLink>
      )}
    </Flex>
  </Card>
