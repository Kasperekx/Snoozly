import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  CircularProgress,
  CircularProgressLabel,
  useColorModeValue,
} from "@chakra-ui/react";
import colors from "../../../../theme/base/colors";

const Timer = () => {
  const [progress, setProgress] = useState(0);
  const [time, setTime] = useState(1500);
  const [initTime] = useState(time);
  const [isActive, setIsActive] = useState(false);

  const activateTimer = () => {
    setIsActive(!isActive);
  };

  const resetTime = () => {
    setTime(initTime);
    setProgress(0);
    setIsActive(false);
  };

  const breakTime = () => {
    setTime(300);
  };

  useEffect(() => {
    if (isActive && time > 0) {
      const interval = setInterval(() => {
        setTime((time) => time - 1);
        setProgress(time / (initTime / 100));
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [time, isActive, progress, initTime]);

  const getTime = (time: number) => {
    const min = Math.floor(time / 60);
    const sec = time % 60;
    return `${min < 10 ? "0" + min : min}:${sec < 10 ? "0" + sec : sec}`;
  };

  return (
    <Box maxW="320px" textAlign="center">
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        boxShadow="lg"
        width="320px"
        height="320px"
        borderRadius="50%"
        backgroundColor={useColorModeValue(colors.primary, colors.secondary)}
      >
        <CircularProgress size="290px" thickness="3px" value={progress}>
          <CircularProgressLabel fontSize="50px" color="white">
            {getTime(time)}
          </CircularProgressLabel>
        </CircularProgress>
      </Box>
      <Box
        display="flex"
        justifyContent="space-around"
        alignItems="center"
        maxWidth="250px"
        margin="0 auto"
      >
        <Button mt="30px" padding="15px 25px" onClick={activateTimer}>
          {isActive ? "STOP" : "START"}
        </Button>
        <Button
          mt="30px"
          ml="15px"
          mr="15px"
          padding="15px 25px"
          onClick={breakTime}
        >
          PRZERWA
        </Button>
        <Button mt="30px" padding="15px 25px" onClick={resetTime}>
          RESET
        </Button>
      </Box>
    </Box>
  );
};

export default Timer;
