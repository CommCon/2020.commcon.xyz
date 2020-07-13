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
          <Styled.p sx={{
              fontSize: 3,
            }}>
            A virtual conference is something that CommCon would never have run before the COVID-19 pandemic struck the globe. CommCon was about doing things differently, getting people together in beautiful surroundings and spreading knowledge in a unique way. We vowed we weren't going to move CommCon online because it just wouldn't have been the same but then we saw what other conferences were doing (or not doing) and decided there was a space for CommCon.
          </Styled.p>
          <Styled.p sx={{
              fontSize: 3,
            }}>
            While most Virtual conferences have just taken their usual schedule and stuck it on Zoom, we've found that that doesn't really work for attendees. While attendees can't travel to a venue and take part in person at a conference, it means they're either at home or at work having to carry on with their normal day and so having session after session just like you normally would just doesn't work.
          </Styled.p>
          <Styled.p sx={{
              fontSize: 3,
            }}>
            We've stripped back our schedule entirely and have 20 sessions spread out across 5 days across multiple timezones so that everyone can take part. Sessions are pre recorded and "Premiered" via YouTube with Q&A and conversation with other attendees/sponsors happening directly after each session.
          </Styled.p>
          <Button href='#venue'>
            Attend
          </Button>
        </div>
      </Flex>
    </Container>
  </div>
