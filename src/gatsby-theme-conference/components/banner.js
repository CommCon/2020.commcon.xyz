/** @jsx jsx */
import {
  jsx,
  Flex,
  Container,
  Styled,
} from 'theme-ui'
import {
  Button,
} from 'gatsby-theme-conference'

export default props =>
  <div
    sx={{
      py: [ 5, 6],
      bg: 'muted',
    }}>
    <Container>
      <Flex
        sx={{
          mx: -4,
          alignItems: 'center',
          flexWrap: 'wrap',
        }}>
        <div sx={{ px: 4 }}>
          <Styled.img
            width='128'
            height='128'
            src='/assets/cc.svg'
          />
        </div>
        <div sx={{ px: 4 }}>
          <Styled.h1>
            CommCon Virtual 2020
          </Styled.h1>
          <Styled.p
            sx={{
              fontSize: 3,
            }}>
            20 Sessions over 5 days, with world class experts in VoIP and WebRTC
            <br />
            13<sup>th</sup> - 17<sup>th</sup> July 2020
          </Styled.p>
          <Button href='#purchase'>
            Attend
          </Button>
        </div>
      </Flex>
    </Container>
  </div>
