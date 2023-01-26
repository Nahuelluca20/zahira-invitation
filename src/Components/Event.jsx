import React from 'react'
import EventImage from "../assets/event.jpg"
import Marker from "../assets/marker.png"
import { Image, Stack, Heading, Text, Link, Flex } from "@chakra-ui/react"

function Event() {
  return (
    <Stack width={"100%"} id="evento">
      <Stack my={"40px"} width={"100%"} alignItems={"center"}>
        <Stack alignItems={"center"}>
          <Text fontSize={"34px"} className='cursivaFont'>Evento</Text>
          <Stack width={"60px"} border={"1px solid #674188"}></Stack>
        </Stack>
        <Stack>
          <Flex mt={"40px"} display={{base: "block", lg: "flex"}} gap={{lg:"50px"}}>
            <Stack>
              <Image src={EventImage} width={"300px"} />
            </Stack>
            <Stack pt={"20px"}>
              <Text color={"#674188"} fontSize={"20px"} fontWeight={500} textTransform={"uppercase"}>Salón noche de sueños</Text>
              <Text>Salón azul Dr. Moreno 3617, <br />Las Heras, Mendoza</Text>
              <Text fontSize={"18px"} fontWeight={"bold"}>10 de marzo 20:30</Text>
              <Stack width={"150px"}>
                <Link fontWeight={"bold"} color={"white"} py={"10px"} justifyContent={"center"} backgroundColor={"#674188"} display={"flex"} alignItems={"center"} fontSize={"18px"} href="https://maps.app.goo.gl/P3MZBkEwzWpxS4hKA" isExternal>
                  <Image src={Marker} width={"25px"} height={"25px"} mr={"2px"} />
                  Ver Mapa
                </Link>
              </Stack>
            </Stack>
          </Flex>
        </Stack>
      </Stack>
    </Stack>
  )
}

export default Event