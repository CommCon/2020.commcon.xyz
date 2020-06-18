/** @jsx jsx */
import { Link } from 'gatsby'
import { Fragment } from 'react'
import {
  jsx,
  Styled,
} from 'theme-ui'
import {
  Button,
  NavLink,
  DesktopOnly
} from 'gatsby-theme-conference'


export default props =>
  <Fragment>
    <NavLink
      as={Link}
      to='/'
      sx={{
        color: 'primary',
        display: 'flex',
        alignItems: 'center',
      }}>
      <Styled.img
        width='32'
        height='32'
        src='/assets/cc.svg'
      />
      <div sx={{ mx: 1 }} />
      CommCon Virtual 2020
    </NavLink>
    <DesktopOnly>
      <NavLink as={Link} to='/#speakers'>Speakers</NavLink>
      <NavLink as={Link} to='/#schedule'>Schedule</NavLink>
      <NavLink as={Link} to='/#venue'>Venue</NavLink>
      <NavLink as={Link} to='/#sponsors'>Sponsors</NavLink>
    </DesktopOnly>
    <div sx={{ mx: 'auto' }} />
    <Button href='#purchase'>
      Attend
    </Button>
  </Fragment>
