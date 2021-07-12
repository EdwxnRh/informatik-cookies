import { Heading, Text, Grid, Box, Button, Image } from '@chakra-ui/react';
import { Link as ReachLink } from '@reach/router';

export default function Summary() {
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
            <Image
              src='https://media4.giphy.com/media/3o6oziuA28BBlfpRkc/giphy.gif?cid=ecf05e47izc0oeh6wx4ss9q79m7treq78sh2nhwmnq76f89b&rid=giphy.gif&ct=g'
              rounded='xl'
              width='xl'
              height='56'
            ></Image>
            <Box mt='16'>
              <Heading mb='3' fontSize='3xl'>
                Kurze Zusammenfassung!
              </Heading>
              <Text width='xl' fontSize='lg'>
                Zu der guten Seite der Cookies gehören die notwendigen und
                Performance-Cookies, da sie für mehr Benutzerfreundlichkeit und
                Effizienz (Bsp.: Warenkorb) sorgen. Außerdem erhöhen sie die
                Trefferquote bei Suchanfragen. Auch die Werbe-Cookies sind gut,
                denn sie finanzieren die Internetseiten und sorgen damit für
                eine kostenlose Nutzung. Die schlechte Seite der Cookies ist von
                Profiling (Identifizierung von Personen) und fehlerhaften sowie
                ungenügend geschützten Cookies geprägt, die teilweise das Klauen
                von Daten ermöglichen und oftmals zu Spam-Mails, Malware und zur
                Weiterleitung von Zugangsdaten führen.
              </Text>
              <Button
                width='full'
                mt='6'
                colorScheme='green'
                as={ReachLink}
                to='/pishing'
                onClick={() => {
                  setTimeout(() => {
                    window.location.reload(false);
                  }, 500);
                }}
              >
                Weiter gehts...
              </Button>
            </Box>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
}
