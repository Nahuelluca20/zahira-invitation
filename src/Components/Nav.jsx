import { HStack, Stack, Text, Button, useDisclosure, Collapse, Box, Image, Link } from '@chakra-ui/react'
import Menu from "../assets/menu.png"

function Nav() {
  const { isOpen, onToggle } = useDisclosure()
  return (
    <>
      <HStack zIndex={50} backgroundColor={"white"} position={"fixed"} width="100%" justifyContent={"space-between"} boxShadow="xl" px={"20px"} py={"20px"}>
        <Text>Zahira</Text>
        <Image onClick={onToggle} src={Menu} width={"30px"}/>
      </HStack>
      <Collapse in={isOpen} animateOpacity>
        <Box position={"fixed"} width="100%" top={"70px"} bottom="0" right={"0"}>
          <Stack py={"40px"} px={"30px"} backgroundColor={"white"} rowGap={"20px"}>
            <Link textDecoration={"none"} href="#evento" onClick={onToggle} color={"black"} fontSize={"16px"} fontWeight={500}>EVENTO</Link>
            <Link textDecoration={"none"} href="#presente" onClick={onToggle} color={"black"} fontSize={"16px"} fontWeight={500}>PRESENTE</Link>
            <Link textDecoration={"none"} href="#asistencia" onClick={onToggle} color={"black"} fontSize={"16px"} fontWeight={500}>ASISTENCIA</Link>
          </Stack>
        </Box>
      </Collapse>
    </>
  )
}

export default Nav