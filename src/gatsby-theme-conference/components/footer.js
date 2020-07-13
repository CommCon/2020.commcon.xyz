/** @jsx jsx */
import { Link } from 'gatsby'
import { jsx, Styled, Flex, Container, Box } from 'theme-ui'
import { Twitter, Instagram, Youtube, Facebook, Share2 } from 'react-feather'
import {
    List,
    NavLink,
    IconLink,
    useSiteMetadata
  } from 'gatsby-theme-conference'
import useWebShare from 'react-use-web-share'


export default props => {
  const { twitter, instagram, youtube, facebook } = useSiteMetadata()
  const { isSupported, loading, share } = useWebShare();

  return (
    <Container>
      <Flex
        sx={{
          mx: -3,
          flexWrap: 'wrap',
        }}>
        <div sx={{ width: [ '100%', (100/3) + '%' ] }}>
          <List>
            <li><NavLink as={Link} to='/speakers'>Speakers</NavLink></li>
            <li><NavLink as={Link} to='/schedule'>Schedule</NavLink></li>
            <li><NavLink as={Link} to='/#venue'>Venue</NavLink></li>
            <li><NavLink as={Link} to='/#sponsors'>Sponsors</NavLink></li>
          </List>
        </div>
        <div sx={{ width: [ '100%', (100/3) + '%' ] }}>
          <List>
            <li><NavLink as={Link} to='/#purchase'>Attend</NavLink></li>
            {/* <li><NavLink as={Link} to='/code-of-conduct'>Code of Conduct</NavLink></li>
            <li><NavLink as={Link} to='/scholarship'>Scholarship</NavLink></li>
            <li><NavLink as={Link} to='/privacy-policy'>Privacy Policy</NavLink></li> */}
          </List>
        </div>
        <div sx={{ p: 2, width: [ '100%', (100/3) + '%' ] }}>
          {twitter && (
            <IconLink title='Follow us on Twitter' href={twitter}>
              <Twitter />
            </IconLink>
          )}
          {instagram && (
            <IconLink title='Follow us on Instagram' href={instagram}>
              <Instagram />
            </IconLink>
          )}
          {youtube && (
            <IconLink title='Watch on YouTube' href={youtube}>
              <Youtube />
            </IconLink>
          )}
          {facebook && (
            <IconLink title='Join us on Facebook' href={facebook}>
              <Facebook />
            </IconLink>
          )}
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
                title: 'Commcon Virtual 2020',
                text: 'CommCon Virtual 2020',
              })}/>
            </Box>
          )}
        </div>
      </Flex>
      <div>
        <Styled.p
          sx={{
            textAlign: 'right',
            fontSize: 0,
          }}>
          © 2020 CommCon Events Ltd
        </Styled.p>
      </div>
    </Container>
  )
}
