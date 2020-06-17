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
            src='https://notebook.jxnblk.com/flower.png'
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
            Sommething Something Amazing
          </Styled.p>
          {/* <Button href='#purchase'>
            Buy Tickets
          </Button> */}
        </div>
      </Flex>
    </Container>
  </div>
