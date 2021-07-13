import {
  Container,
  Heading,
  Text,
  Grid,
  Box,
  Button,
  Flex,
  HStack,
  Kbd,
  Image,
} from '@chakra-ui/react';
import { ArrowDownIcon } from '@chakra-ui/icons';
import { useState } from 'react';
import { useToast } from '@chakra-ui/react';
import { Link as ReachLink } from '@reach/router';

export default function Home() {
  const [accepted, setAccepted] = useState(false);
  const [checked, setChecked] = useState(false);
  const [loading, setLoading] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const toast = useToast();
  let list = [];

  function check(e) {
    list.includes(e) ? list.pop(e) : list.push(e);
    if (list.includes(e)) {
      document.querySelector(`#${e}`).style.backgroundColor = '#CBD5E0';
    } else {
      document.querySelector(`#${e}`).style.backgroundColor = '#EDF2F7';
    }
    console.log(list);
  }
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
      <Grid placeItems='center'>
        <Container maxW='container.lg'>
          <Box height='90vh' px='5'>
            {!accepted ? (
              <>
                <Box display='grid' placeItems='center' mt='56' mb='32'>
                  <Heading size='4xl' textAlign='center'>
                    Hey 👋 <br />
                    Weißt du eigentlich was Cookies sind?
                  </Heading>
                  <Flex alignItems='center' justifyContent='center' mt='24'>
                    <Button
                      as='a'
                      leftIcon={<ArrowDownIcon></ArrowDownIcon>}
                      size='lg'
                      href='#expl'
                    >
                      Zur Erklärung
                    </Button>
                  </Flex>
                </Box>

                <Box id='expl' pb='32' mt='72'>
                  <Grid placeItems='center'>
                    <Box
                      width={{ lg: 'xl', base: 'lg' }}
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
                        Cookies zulassen?
                      </Heading>
                      <Text fontSize={{ base: '2xl', md: 'lg' }} mt='4'>
                        Durch das Klicken auf &quot;Cookies zulassen&quot;
                        stimmen Sie unseren Nutzungsbedingungen zu und
                        ermöglichen es uns, Daten zur Verbesserung unserer
                        Website zu speichern.
                      </Text>
                      <HStack spacing='4' mt='8' justifyContent='center'>
                        <Button
                          isLoading={loading}
                          colorScheme='green'
                          width='40%'
                          onClick={() => {
                            setLoading(true);
                            setTimeout(() => {
                              setLoading(false);
                              setAccepted(true);
                            }, 2000);
                          }}
                        >
                          Zulassen
                        </Button>
                        <Button
                          colorScheme='gray'
                          width='40%'
                          isLoading={loading}
                          onClick={() => {
                            setLoading(true);
                            toast({
                              title: 'ERROR :(',
                              description:
                                'Unsere Präsentation funktioniert nur mit Cookies.',
                              status: 'error',
                              duration: 5000,
                              isClosable: true,
                            });
                            setTimeout(() => {
                              setLoading(false);
                            }, 2000);
                          }}
                        >
                          Ablehnen
                        </Button>
                      </HStack>
                    </Box>
                    <Box width={{ lg: 'xl', base: 'lg' }}>
                      <Heading mb='3' fontSize='3xl'>
                        Was sind Cookies?
                      </Heading>
                      <Text
                        width={{ lg: 'xl', base: 'lg' }}
                        fontSize={{ base: '2xl', md: 'lg' }}
                      >
                        Cookies (engl. “Kekse”) sind kleine Textdateien, die vom
                        Webserver an den Browser gesendet und auf dem Rechner
                        des Nutzers speichert werden. Sobald du zum ersten Mal
                        eine Seite im Browser aufrufst, wird ein neuer Cookie
                        angelegt/gesendet, der dann Informationen sammelt. Rufst
                        du die Seite erneut auf, dann sendet der Browser den
                        Cookie mit dieser Information zurück an den Server. Mit
                        Cookies lässt sich nachverfolgen, welche anderen Website
                        du als nächstes besuchst, dein Nutzerverhalten
                        (Besucherdauer, Interaktionen, etc.) und teilweise auch
                        persöhnliche Daten wie Passwörter oder Warenkorbinhalte.{' '}
                      </Text>
                    </Box>
                  </Grid>
                </Box>
              </>
            ) : (
              <>
                <Box id='expl' pb='32' mt='24'>
                  <Grid placeItems='center'>
                    <Box
                      width={{ lg: 'xl', base: 'md' }}
                      p='5'
                      borderWidth='1px'
                      rounded='md'
                      mt='16'
                      mb='16'
                      hidden={disabled}
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
                        Was sammeln Cookies?
                      </Heading>
                      <Grid
                        mt='6'
                        gap='4'
                        templateColumns='repeat(2, 1fr)'
                        textAlign='center'
                        fontSize='lg'
                      >
                        <Kbd
                          id='internetbesuche'
                          cursor='pointer'
                          onClick={() => {
                            check('internetbesuche');
                          }}
                          pt='0.5'
                        >
                          Internetbesuche
                        </Kbd>
                        <Kbd
                          id='ip'
                          cursor='pointer'
                          onClick={() => {
                            check('ip');
                          }}
                          pt='0.5'
                        >
                          IP-Adresse
                        </Kbd>
                        <Kbd
                          id='interessen'
                          cursor='pointer'
                          onClick={() => {
                            check('interessen');
                          }}
                          pt='0.5'
                        >
                          Interessen
                        </Kbd>
                        <Kbd
                          id='warenkorb'
                          cursor='pointer'
                          onClick={() => {
                            check('warenkorb');
                          }}
                          pt='0.5'
                        >
                          Warenkorbinhalte
                        </Kbd>
                        <Kbd
                          id='formulare'
                          cursor='pointer'
                          onClick={() => {
                            check('formulare');
                          }}
                          pt='0.5'
                        >
                          Formulare
                        </Kbd>
                        <Kbd
                          id='email'
                          cursor='pointer'
                          onClick={() => {
                            check('email');
                          }}
                          pt='0.5'
                        >
                          E-Mail Adresse
                        </Kbd>
                        <Kbd
                          id='psw'
                          cursor='pointer'
                          onClick={() => {
                            check('psw');
                          }}
                          pt='0.5'
                        >
                          Passwörter
                        </Kbd>
                        <Kbd
                          id='bildung'
                          cursor='pointer'
                          onClick={() => {
                            check('bildung');
                          }}
                          pt='0.5'
                        >
                          Bildungsstatus
                        </Kbd>
                        <Kbd
                          id='finanzen'
                          cursor='pointer'
                          onClick={() => {
                            check('finanzen');
                          }}
                          pt='0.5'
                        >
                          Finanzen
                        </Kbd>
                      </Grid>
                      <HStack spacing='4' mt='8' justifyContent='center' px='8'>
                        <Button
                          isLoading={loading}
                          colorScheme='green'
                          size='md'
                          width='40%'
                          onClick={() => {
                            console.log(list);
                            setLoading(true);
                            if (list.length === 9) {
                              setTimeout(() => {
                                setChecked(true);
                                setLoading(false);
                                setDisabled(true);
                              }, 2000);
                            } else {
                              setLoading(false);
                              toast({
                                title: 'Versuch es erneut!',
                                description:
                                  'Schau dir notfalls noch ein Mal die Definition an.',
                                status: 'error',
                                duration: 5000,
                                isClosable: true,
                              });
                            }
                          }}
                        >
                          Überprüfen
                        </Button>
                        {checked ? (
                          <Button
                            colorScheme='green'
                            size='md'
                            width='40%'
                            isLoading={loading}
                            href='differences'
                          >
                            Weiter
                          </Button>
                        ) : (
                          <Button
                            colorScheme='gray'
                            size='md'
                            width='40%'
                            isLoading={loading}
                            onClick={() => {
                              setAccepted(false);
                            }}
                          >
                            Zurück
                          </Button>
                        )}
                      </HStack>
                    </Box>
                    {checked && (
                      <>
                        <Image
                          src='https://64.media.tumblr.com/31fbae995fe05a3c19f3bc88d9a78e1e/5fb2e54a0288ab22-41/s500x750/953e49b56ea5c634aadcc12801531a3774bff6a7.gifv'
                          rounded='xl'
                          width={{ lg: 'xl', base: 'md' }}
                          height='56'
                        ></Image>
                        <Box mt='16'>
                          <Heading mb='3' fontSize='3xl'>
                            Richtig!
                          </Heading>
                          <Text
                            width={{ lg: 'xl', base: 'lg' }}
                            fontSize={{ base: '2xl', md: 'lg' }}
                          >
                            Dabei unterscheiden wir in gute und schlechte
                            Cookies. Diese werden dann noch weiter in Kategorien
                            unterteilt. Was du dir hier merken solltest: Cookies
                            werde entweder von Websiteerstellern eingerichtet,
                            um deinen Besuch oder Einkauf angenehmer zu
                            gestalten oder sind so programmiert, dass sie Daten
                            abgreifen und ein Verhaltensprofil von dir
                            erstellen. Dieses Datensammeln hilft dann z.T. beim
                            ausspionieren von Bankdaten oder um bessere Werbung
                            schalten zu können.
                          </Text>
                          <Button
                            as={ReachLink}
                            to='/goodones'
                            onClick={() => {
                              setTimeout(() => {
                                window.location.reload(false);
                              }, 500);
                            }}
                            width='full'
                            mt='6'
                            colorScheme='green'
                            href='/differences'
                          >
                            Weiter gehts...
                          </Button>
                        </Box>
                      </>
                    )}
                  </Grid>
                </Box>
              </>
            )}
          </Box>
        </Container>
      </Grid>
    </Box>
  );
}
