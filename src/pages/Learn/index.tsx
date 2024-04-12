import { MainLayout } from "../../layouts/MainLayout";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  AspectRatio,
  Box,
  Flex,
  Heading,
} from "@chakra-ui/react";

export const Learn = () => {
  return (
    <MainLayout>
      <Flex
        w={["100%", "100%", "60%", "60%", "100%"]}
        p="3%"
        flexDir="column"
        overflow="auto"
        minH="100vh"
      >
        <Heading marginBottom={3}>Videos tutoriales</Heading>
        <Accordion>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  Cambiar el aceite de tu carro
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <AspectRatio
                maxW="560px"
                ratio={1}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <iframe
                  title="Cambio de aceite"
                  src="https://www.youtube.com/embed/zEPecqlQAx8?si=cmL91Ih-07DRv2rt"
                  allowFullScreen
                />
              </AspectRatio>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  Cambiar la goma de un vehiculo
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <AspectRatio maxW="560px" ratio={1}>
                <iframe
                  title="Cambio de goma de vehiculo"
                  src="https://www.youtube.com/embed/gvZJelDAFrQ?si=sMKSz-C9erQhV0cG"
                  allowFullScreen
                />
              </AspectRatio>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  Cambio filtros del aire
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <AspectRatio maxW="560px" ratio={1}>
                <iframe
                  title="Cambio filtros del aire"
                  src="https://www.youtube.com/embed/Z_9l_3HGNcs?si=Dm9rIBSwTmw9oolh"
                  allowFullScreen
                />
              </AspectRatio>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  Verificar estados de las gomas
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <AspectRatio maxW="560px" ratio={1}>
                <iframe
                  title="Verificar estados de las gomas"
                  src="https://www.youtube.com/embed/YQbi4nqxdN8?si=J9vT9kUvAjWcVpF5"
                  allowFullScreen
                />
              </AspectRatio>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  Verificar estados de bandas de frenos
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <AspectRatio maxW="560px" ratio={1}>
                <iframe
                  title=" Verificar estados de bandas de frenos"
                  src="https://www.youtube.com/embed/Yr0rIlvDhIM?si=L7sU4Rd0rYBWpdyN"
                  allowFullScreen
                />
              </AspectRatio>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Flex>
    </MainLayout>
  );
};
