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

export default function BadOnes() {
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
      <Box height='90'>
        <Box id='expl' pb='32' mt='24'>
          <Grid placeItems='center'>
            <HStack spacing='16'>
              <Box width='48' height='500px' pt='16'>
                <Image src='https://d226aj4ao1t61q.cloudfront.net/y7ij3ohyk_screenrecording2019-08-26at03.55pm.gif'></Image>
              </Box>
              <Box
                width='xl'
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
                <Heading size='2xl' my='2'>
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
                    <Text fontSize='xs' fontWeight='semibold' mb='1'>
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
                    colorScheme='blue'
                    size='md'
                    width='40%'
                    as={ReachLink}
                    to='/summary'
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
                    to='/goodones'
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
                  Unbeliebte Cookies
                </Heading>
                <Text width='xl' fontSize='lg'>
                  Zu den unbeliebten Cookies gehören die „Tracking Cookies“, die
                  Ihnen personalisierte Werbung bescheren und dauerhaft
                  gespeichert sind. <br />
                  <br />
                  <b>1. Funktionscookies </b> <br />
                  Diese Cookies sind nicht unbedingt notwendig, erhöhen aber die
                  Benutzbarkeit einer Webseite. So wird bspw. der einmal
                  eingegebene Standort gespeichert, um bei einem erneuten Laden
                  der Seite diese Info für den jeweiligen Nutzer sofort
                  anzuzeigen. Auch einmal eingegebene Formulardaten, die Größe
                  der Schriftart oder ähnliches, können so gespeichert werden.
                  <br />
                  <br /> <b>2. Werbe-Cookies </b>
                  <br />
                  Werbe- oder Targeting-Cookies sind explizit dafür da, den
                  Nutzer zu seinem Surfverhalten passende Werbung einzublenden.
                  Zum Beispiel treten Werbeanzeigen zu besuchten Online-Shop auf
                  vielen danach besuchten Webseiten nach einer gewissen Zeit
                  wieder auf. Im Online-Marketing nennt man dies auch
                  „Re-Targeting“.
                </Text>
              </Box>
            </HStack>
          </Grid>
          <Box width='600px' height='28' ml='28rem'>
            <Image
              src='http://m1.behance.net/rendition/modules/44413481/disp/d37d01b9b242c81c25f3b79800ea5680.gif'
              width='full'
            ></Image>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
