import {
  Heading,
  Text,
  Grid,
  Box,
  Button,
  HStack,
  Image,
  Input,
} from '@chakra-ui/react';
import '../styles/Home.module.css';
import { Link as ReachLink } from '@reach/router';

export default function GoodOnes() {
  return (
    <Box height='100vh'>
      <Box pos='absolute' top='6' left='6'>
        <Text fontSize='2xl' fontWeight='semibold'>
          🍪 Cookies
        </Text>
      </Box>
      <Button colorScheme='gray' opacity='0'>
        Restart
      </Button>
      <Box height='90' px='5'>
        <Box id='expl' pb='32' mt='24'>
          <Grid placeItems='center'>
            <HStack spacing='16'>
              <Box
                width="xl"
                p='5'
                borderWidth='1px'
                rounded='md'
                mt='16'
                mb='16'
              >
                <HStack spacing='2' mb='4'>
                  <Box
                    bgColor='red.400'
                    rounded='full'
                    height='14px'
                    width='14px'
                  ></Box>
                  <Box
                    bgColor='orange.300'
                    rounded='full'
                    height='14px'
                    width='14px'
                  ></Box>
                  <Box
                    bgColor='green.300'
                    rounded='full'
                    height='14px'
                    width='14px'
                  ></Box>
                </HStack>
                <Heading size='lg' my='2'>
                  Ihr Einkaufswagen
                </Heading>
                <Box display='flex' pos='relative'>
                  <Box>
                    <Text fontSize='lg' fontWeight='semibold' mb='1'>
                      Name (Vor- & Nachname)
                    </Text>
                    <Input
                      mb='3'
                      type='text'
                      value='Franz Jürgen Müller'
                      readOnly
                    />
                    <Text fontSize='lg' fontWeight='semibold' mb='1'>
                      E-Mail
                    </Text>
                    <Input
                      mb='3'
                      type='email'
                      value='franzzz@mcdonalds.com'
                      readOnly
                    />
                    <Text fontSize='lg' fontWeight='semibold' mb='1'>
                      Paswort
                    </Text>
                    <Input
                      readOnly
                      type='password'
                      value='adnoadadoadhoad'
                      width='2xs'
                    />
                  </Box>
                  <Box width='56' pos='absolute' right='0' top='4'>
                    <Image src='https://www.pngkit.com/png/full/965-9655365_mens-epic-react-flyknit-running-shoe-nike-epic.png'></Image>
                    <Text fontWeight='semibold' mt='8'>
                      Unsere Zahlungsmethoden
                    </Text>
                    <Image
                      src='https://support.miles-mobility.com/hc/article_attachments/360015048939/mceclip0.png'
                      pr='6'
                    ></Image>
                  </Box>
                </Box>
                <HStack spacing='4' mt='8' justifyContent='center' px='8'>
                  <Button
                    colorScheme='green'
                    size='md'
                    width='40%'
                    as={ReachLink}
                    to='/badones'
                    onClick={() => {
                      setTimeout(() => {
                        window.location.reload(false);
                      }, 500);
                    }}
                  >
                    Weiter
                  </Button>
                  <Button
                    as={ReachLink}
                    to='/'
                    onClick={() => {
                      setTimeout(() => {
                        window.location.reload(false);
                      }, 500);
                    }}
                    colorScheme='gray'
                    size='md'
                    width='40%'
                  >
                    Zurück
                  </Button>
                </HStack>
              </Box>
              <Box>
                <Heading mb='3' fontSize='3xl'>
                  Beliebte Cookies
                </Heading>
                <Text width='xl' fontSize='lg'>
                  Session Cookies sind beim Surfen besonders hilfreich und
                  unabkömmlich. Sie speichern Ihre Login-Daten, so dass Sie sich
                  auf passwort-geschützen Internetseiten nicht nach wenigen
                  Sekunden neu anmelden müssen. <br />
                  <br />
                  <b>1. Notwendige Cookies</b> <br />
                  Diese Cookies sind für das Ausführen der spezifischen
                  Funktionen einer Website notwendig. Zum Beispiel, werden
                  solche Cookies eingesetzt, wenn ein Nutzer ein Produkt in den
                  Warenkorb legt und danach weiter surft, bevor er zur Kasse der
                  Website geht. So wird sein Warenkorb, selbst nach dem
                  Schließen eines Browserfensters, nicht gelöscht.
                  <br />
                  <br /> <b>2. Leistungs- oder Perfomance Cookies </b>
                  <br />
                  Diese Cookies sammeln Informationen über das Verhalten und
                  mögliche Fehlermeldungen der Nutzer auf der Seite. Auch
                  Ladezeiten und das Verhalten der Webseite werden mit
                  Perfomance-Cookies gemessen.
                </Text>
              </Box>
            </HStack>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
}
