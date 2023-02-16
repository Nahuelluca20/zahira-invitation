import React from 'react'
import { Stack, Heading, Text, useDisclosure, Button, Box, Collapse } from "@chakra-ui/react"

function Present() {
  const { isOpen, onToggle } = useDisclosure()

  return (
    <Stack width={"100%"} pt={"30px"} id="presente">
      <Stack py={"50px"} backgroundColor={"#674188"} width={"100%"} alignItems={"center"}>
        <Stack alignItems={"center"}>
          <Text fontSize="34px" className='cursivaFont' color={"white"}>Presente</Text>
          <Stack width={"60px"} border={"1px solid #C3ACD0"}></Stack>
        </Stack>
        <Text textAlign={"center"} fontSize={"18px"} color="white" px={{base: "20px", lg: "200px"}} pt={"40px"}>
          <b>El mejor regalo es tu presencia, </b>
          pero si igualmente querés regalarme algo podés hacerlo
          en el salón (existira un cofre) o bien con un depósito a
          una cuenta bancaria.
        </Text>
        <Stack alignItems={"center"}>
          <Button onClick={onToggle} mt={"30px"} width={"120px"}>VER DATOS</Button>
          <Collapse in={isOpen} animateOpacity>
            <Box>
              <Text textAlign={"center"} fontSize={"18px"} color="white" px={"20px"} pt={"10px"}>
                CBU: 0000003100094475499331
              </Text>
              <Text textAlign={"center"} fontSize={"18px"} color="white" px={"20px"} pt={"10px"}>
                Alias: Betilo85
              </Text>
            </Box>
          </Collapse>
        </Stack>
      </Stack>
    </Stack>

  )
}

export default Present