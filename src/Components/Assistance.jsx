import { Stack, Button, Collapse, Box, useDisclosure, Link, Text,Heading} from '@chakra-ui/react'
import React from 'react'

function Assistance() {
  const { isOpen, onToggle } = useDisclosure()

  return (
    <Stack width={"100%"} alignItems={"center"} pt={"20px"} zIndex={0} id="asistencia">
      <Text className="cursivaFont" textAlign="center" my={4} color={"#674188"} fontSize={"25px"} fontWeight={500} textTransform={"uppercase"}>Hay tiempo para confirmar hasta el 20 de Febero</Text>
      <Button as={Link} href={`https://wa.me/542614714078?text=${"Hola! mi nombre es: "
        }`} width={"220px"} textColor="white" colorScheme='whatsapp'>
        Confirmar por WhatsApp
      </Button>
      <Button colorScheme='facebook' onClick={onToggle} textColor="white" width={"220px"}>Confirmar por Formulario</Button>
      <Collapse in={isOpen} animateOpacity>
        <Box>
          <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdR5wR_SWFpepnooOfP5Q0OdD4g3K8NjYsAfWJ6oWf1ro8_nA/viewform?embedded=true" width="100%" height="950" frameborder="0" marginheight="0" marginWidth="0">Cargando…</iframe>
        </Box>
      </Collapse>
      <Stack alignItems={"center"} mt={"20px"} py={"20px"} width={"100%"} bgColor={"#C3ACD0"}>
        <Text fontWeight={500}>made by 
        <Link fontWeight={500} href='https://www.nahuelluca.me/' pl={1} isExternal color={"#ED8845"} textDecoration="underline">
          Nahuel
        </Link>
        </Text>
      </Stack>
    </Stack>
  )
}

export default Assistance