import {
  Heading,
  Text,
  Grid,
  Box,
  Button,
  Image,
  Link,
  Flex,
} from '@chakra-ui/react';
import { useWindowSize } from 'react-use';
import Confetti from 'react-confetti';
import { useState } from 'react';

export default function Safety() {
  const { width, height } = useWindowSize();
  const [confetti, setConfetti] = useState(false);
  return (
    <>
      {confetti ? <Confetti width={width} height={1.8 * height} /> : <></>}
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
              <Image
                src='https://media4.giphy.com/media/V7boLBI7WSpEWHniGs/giphy.gif?cid=ecf05e47gju6iiamh9vi6n1q1tm9k3bx3razd3y0pjfgr4hr&rid=giphy.gif&ct=g'
                rounded='xl'
                width='xl'
                height='xl'
              ></Image>
              <Box mt='16'>
                <Heading mb='3' fontSize='3xl'>
                  Wie schützt du dich am besten?
                </Heading>
                <Text width='xl' fontSize='lg'>
                  Die einfachste Sicherheitsmaßnahme ist: Lesen. Lesen hilft
                  nähmlich tatsächlich auch hier beim Erkennen von
                  Pishing-Versuchen und Scams. Schau dir die Domain an, die
                  Anrede, die Rechtschreibung und den Umgangston. Wird von dir
                  etwas gefordert? Wenn ja, wie? Wird dir gedroht?
                  <br />
                  <br />
                  Falls du dich noch weiter schützen willst, kannst du zum
                  Beispiel in deinen Browsereinstellungen unter
                  &quot;Cookies&quot; Drittanbieter-Cookies blockieren. Um das
                  Sammeln von Daten über eine lange Zeit zu verhindern, kannst
                  du Cookies löschen lassen, wenn du den Browser schließt.{' '}
                  <br />
                  <br />
                  Und falls du dich mal wirlich unsicher fühlst, verlass die
                  Seite doch einfach wieder oder lies dir wenigstens die
                  wichtigen Teile der Nutzungsbedingungen, Datenschutzerklärung
                  und Cookie-Erklräung durch. Vielleicht hilft dir das
                  nachvollziehen zu können, wie deine Daten verwendet und
                  gespeichert werden.
                  <br />
                  <br />
                  Weitere Infos findest du z.B. beim{' '}
                  <Link
                    textDecoration='underline'
                    href='https://www.bsi.bund.de/DE/Themen/Verbraucherinnen-und-Verbraucher/Cyber-Sicherheitslage/Methoden-der-Cyber-Kriminalitaet/Spam-Phishing-Co/Passwortdiebstahl-durch-Phishing/Schutz-gegen-Phishing/schutz-gegen-phishing_node.html'
                    noreferrer
                    target='_blank'
                  >
                    BSI über Pishing
                  </Link>{' '}
                  oder bei der{' '}
                  <Link
                    textDecoration='underline'
                    href='https://www.verbraucherzentrale.de/wissen/digitale-welt/datenschutz/cookies-kontrollieren-und-verwalten-11996'
                    noreferrer
                    target='_blank'
                  >
                    Verbraucherzentrale zu Cookies
                  </Link>
                  . <br />
                  Alternativ von unserem Giganten:{' '}
                  <Link
                    textDecoration='underline'
                    href='https://support.google.com/accounts/answer/61416?co=GENIE.Platform%3DDesktop&hl=de'
                    target='_blank'
                    noreferrer
                  >
                    Google und Cookies
                  </Link>
                  .
                </Text>
                <Flex justifyContent='center' mt='6'>
                  {confetti ? (
                    <Button
                      width='50%'
                      mt='6'
                      colorScheme='green'
                      onClick={() => {
                        setConfetti(false);
                      }}
                    >
                      Reicht auch wieder...
                    </Button>
                  ) : (
                    <Button
                      width='50%'
                      mt='6'
                      colorScheme='green'
                      onClick={() => {
                        setConfetti(true);
                      }}
                    >
                      Partyyyy
                    </Button>
                  )}
                </Flex>
              </Box>
              <Text fontWeight='semibold' mt='32'>
                Made by Katharina, Nathalie, Evke, Fynn & Edwin
              </Text>
            </Grid>
          </Box>
        </Box>
      </Box>
    </>
  );
}
