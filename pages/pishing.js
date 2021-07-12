import {
  Heading,
  Text,
  Grid,
  Box,
  Button,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  Container,
  SlideFade,
} from '@chakra-ui/react';
import { useState } from 'react';
import { Link as ReachLink } from '@reach/router';

export default function Pishing() {
  const [timeout, setTime] = useState(false);
  const [fade, setFade] = useState(false);
  const [fade1, setFade1] = useState(false);
  const [fade2, setFade2] = useState(false);
  const [fade3, setFade3] = useState(false);
  const [fade4, setFade4] = useState(false);
  const [fade5, setFade5] = useState(false);
  const [fade6, setFade6] = useState(false);
  const [fade7, setFade7] = useState(false);
  const [fade8, setFade8] = useState(false);

  setTimeout(() => {
    setTime(true);
  }, 3000);
  setTimeout(() => {
    setFade(true);
    setTimeout(() => {
      setFade1(true);
    }, 1200);
    setTimeout(() => {
      setFade2(true);
    }, 1800);
    setTimeout(() => {
      setFade3(true);
      window.scrollTo(0, 200);
    }, 2200);
    setTimeout(() => {
      setFade4(true);
      window.scrollTo(0, 300);
    }, 2500);
    setTimeout(() => {
      setFade5(true);
      window.scrollTo(0, 400);
    }, 2800);
    setTimeout(() => {
      setFade6(true);
      window.scrollTo(0, 500);
    }, 3000);
    setTimeout(() => {
      setFade7(true);
      window.scrollTo(0, 600);
    }, 3200);
    setTimeout(() => {
      setFade8(true);
      window.scrollTo(0, 1000);
    }, 3300);
  }, 3500);

  return (
    <>
      {timeout ? (
        <Box height='100vh'>
          <Box pos='absolute' top='6' left='6'>
            <Text fontSize='2xl' fontWeight='semibold'>
              🍪 Cookies
            </Text>
          </Box>
          <Button colorScheme='gray' opacity='0'>
            Restart
          </Button>
          <Container maxW='container.lg' mt='32'>
            <Grid placeItems='center'>
              <Heading width='xl'>Finanzstatus</Heading>
              <SlideFade in={fade} offsetY='30px'>
                <Box width='xl' p='4' borderWidth='1px' rounded='md' mt='6'>
                  <Stat>
                    <StatLabel>NEUE ABBUCHUNG</StatLabel>
                    <StatNumber>129.99€</StatNumber>
                    <StatHelpText>
                      Mediamarkt Company Austria - PayPal - 13. Juli 2021
                    </StatHelpText>
                  </Stat>
                </Box>
              </SlideFade>
              <SlideFade in={fade1} offsetY='30px'>
                <Box width='xl' p='4' borderWidth='1px' rounded='md' mt='6'>
                  <Stat>
                    <StatLabel>NEUE ABBUCHUNG</StatLabel>
                    <StatNumber>1002.11€</StatNumber>
                    <StatHelpText>
                      Jack&Johnson DFC Trading - PayPal - 13. Juli 2021
                    </StatHelpText>
                  </Stat>
                </Box>
              </SlideFade>
              <SlideFade in={fade2} offsetY='30px'>
                <Box width='xl' p='4' borderWidth='1px' rounded='md' mt='6'>
                  <Stat>
                    <StatLabel>NEUE ABBUCHUNG</StatLabel>
                    <StatNumber>33.29€</StatNumber>
                    <StatHelpText>
                      ZALANDO - PayPal - 13. Juli 2021
                    </StatHelpText>
                  </Stat>
                </Box>
              </SlideFade>
              <SlideFade in={fade3} offsetY='30px'>
                <Box width='xl' p='4' borderWidth='1px' rounded='md' mt='6'>
                  <Stat>
                    <StatLabel>NEUE ABBUCHUNG</StatLabel>
                    <StatNumber>167.64€</StatNumber>
                    <StatHelpText>
                      NIKE ONLINE - PayPal - 13. Juli 2021
                    </StatHelpText>
                  </Stat>
                </Box>
              </SlideFade>
              <SlideFade in={fade4} offsetY='30px'>
                <Box width='xl' p='4' borderWidth='1px' rounded='md' mt='6'>
                  <Stat>
                    <StatLabel>NEUE ABBUCHUNG</StatLabel>
                    <StatNumber>1499.99€</StatNumber>
                    <StatHelpText>
                      Mediamarkt Company Austria - PayPal - 13. Juli 2021
                    </StatHelpText>
                  </Stat>
                </Box>
              </SlideFade>
              <SlideFade in={fade5} offsetY='30px'>
                <Box width='xl' p='4' borderWidth='1px' rounded='md' mt='6'>
                  <Stat>
                    <StatLabel>NEUE ABBUCHUNG</StatLabel>
                    <StatNumber>69.19€</StatNumber>
                    <StatHelpText>
                      MY PROTEIN - PayPal - 13. Juli 2021
                    </StatHelpText>
                  </Stat>
                </Box>
              </SlideFade>
              <SlideFade in={fade6} offsetY='30px'>
                <Box width='xl' p='4' borderWidth='1px' rounded='md' mt='6'>
                  <Stat>
                    <StatLabel>NEUE ABBUCHUNG</StatLabel>
                    <StatNumber>149.79€</StatNumber>
                    <StatHelpText>
                      Syyyke EXTRA - PayPal - 13. Juli 2021
                    </StatHelpText>
                  </Stat>
                </Box>
              </SlideFade>
              <SlideFade in={fade7} offsetY='30px'>
                <Box width='xl' p='4' borderWidth='1px' rounded='md' mt='6'>
                  <Stat>
                    <StatLabel>NEUE ABBUCHUNG</StatLabel>
                    <StatNumber>29.99€</StatNumber>
                    <StatHelpText>
                      Lindt GMBH - PayPal - 13. Juli 2021
                    </StatHelpText>
                  </Stat>
                </Box>
              </SlideFade>
              <SlideFade in={fade8} offsetY='30px'>
                <Box width='xl' p='4' borderWidth='1px' rounded='md' mt='6'>
                  <Stat>
                    <StatLabel>NEUE ABBUCHUNG</StatLabel>
                    <StatNumber>1799.29€</StatNumber>
                    <StatHelpText>
                      Mediamarkt Company FRANCE - PayPal - 13. Juli 2021
                    </StatHelpText>
                  </Stat>
                </Box>
              </SlideFade>
              <Box mt='16' mb='56'>
                <Heading mb='3' fontSize='3xl'>
                  Öhmmmm... Was war das?
                </Heading>
                <Text width='xl' fontSize='lg'>
                  Deine Daten wurden gefischt!!! Das nennt sich pishing und kann
                  so ziemlich jedem passieren! <br />
                  Und was genau ist jetzt &quot;pishing&quot; 🤔?
                  <br />
                  <br />
                  Phishing: <br />
                  - Abgeleitet von “fishing” (engl.: angeln) <br />
                  - Versuch des Diebstahls von Daten und Passwörtern per
                  Internet durch Fake-Nachrichten via Mail, heutzutage auch
                  Cookies oder SMS <br /> - Opfer werden zu täuschend echten
                  Websites geleitet, um dort ihre Zugangsdaten anzugeben
                  <br />- Geklaute Daten werden für Kontoplünderungen oder
                  Hackerangriffe auf Unternehmen genutzt
                </Text>
                <Button
                  width='full'
                  mt='12'
                  colorScheme='green'
                  as={ReachLink}
                  to='/safety'
                  onClick={() => {
                    setTimeout(() => {
                      window.location.reload(false);
                    }, 500);
                  }}
                >
                  Sh*t happens...
                </Button>
              </Box>
            </Grid>
          </Container>
        </Box>
      ) : (
        <></>
      )}
    </>
  );
}
