import { useState } from "react";

import { Stack, Text, HStack, Button, Link } from "@chakra-ui/react"

function Hero() {
  const [date, setDate] = useState({
    days: "",
    hours: "",
    minutes: "",
    seconds: "",
  });

  const x = setInterval(function () {
    const countDownDate = new Date("Mar 10, 2023 20:30:00").getTime();
    var now = new Date().getTime();
    var distance = countDownDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    setDate({
      days: days,
      hours: hours,
      minutes: minutes,
      seconds: seconds,
    });
  }, 1000);
  return (
    <>
        <div className="confeti"></div>
      <Stack zIndex={10} backgroundColor={"#674188"} pl={{ base: "0", lg: "200px" }} py={"100px"} color={"white"} textAlign={{ base: "center", lg: "left" }}>
        <Text fontSize={"30px"} fontWeight={500} mt={"50px"} className="cursivaFont">¡Mis 15 años!</Text>
        <Text fontSize={{ base: "50px", lg: "70px" }} fontWeight={500}>ZAHIRA</Text>
        <Text fontSize={"25px"} fontWeight={400}>Viernes 10 de Marzo</Text>
        <HStack width={"100%"} justifyContent={{ base: "center", lg: "left" }} gap={{ base: "20px", lg: "40px" }} pt={"40px"}>
          <Stack>
            <Text fontSize={{ base: "20px", lg: "40px" }} textAlign={{ base: "center", lg: "end" }} fontWeight={500}>{date.days}</Text>
            <Text>DIAS</Text>
          </Stack>
          <Stack>
            <Text fontSize={{ base: "20px", lg: "40px" }} textAlign={{ base: "center", lg: "end" }} fontWeight={500}>{date.hours}</Text>
            <Text>HORAS</Text>
          </Stack>
          <Stack>
            <Text fontSize={{ base: "20px", lg: "40px" }} textAlign={{ base: "center", lg: "end" }} fontWeight={500}>{date.minutes}</Text>
            <Text>MINUTOS</Text>
          </Stack>
          <Stack>
            <Text fontSize={{ base: "20px", lg: "40px" }} textAlign={{ base: "center", lg: "end" }} fontWeight={500}>{date.seconds}</Text>
            <Text>SEGUNDOS</Text>
          </Stack>
        </HStack>

        <HStack justifyContent={{ base: "center", lg: "left" }} width={"100%"} pt={"40px"}>
          <Button as={Link} href="#evento" colorScheme='Telegram' variant='outline' width={"200px"}>
            <Text fontWeight={500} fontSize={"18px"}>
              Ver Información
            </Text>
          </Button>
        </HStack>
      </Stack>
      <Stack backgroundColor={"#C3ACD0"} py={"50px"} px={{ base: "50px", lg: "400px" }}>
        <Text color={"white"} fontSize={"20px"} fontWeight={600}>
          Dulces 15 años de sueños e ilusiones, alegres primaveras
          y mágicos colores, tiempo de dar, recibir
          y compartir afectos e ilusiones. Espero me acompañes en
          este gran momento.
        </Text>
      </Stack>
    </>

  )
}

export default Hero