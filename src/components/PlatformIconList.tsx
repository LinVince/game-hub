import React from "react";
import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaLinux,
  FaApple,
  FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { Image, Text, Icon, HStack } from "@chakra-ui/react";
import { Platform } from "../hooks/useGames";
import { IconType } from "react-icons";

interface Props {
  platforms: Platform[];
}

const PlatformIconList = ({ platforms }: Props) => {
  const iconMap: { [key: string]: IconType } = {
    nintendo: SiNintendo,
    pc: FaWindows,
    ios: MdPhoneIphone,
    web: BsGlobe,
    mac: FaApple,
    playstation: FaPlaystation,
    xbox: FaXbox,
    linux: FaLinux,
    android: FaAndroid,
  };

  return (
    <>
      <HStack marginTop="5px">
        {platforms.map((platform) => (
          <Icon
            key={platform.id}
            as={iconMap[platform.slug]}
            color="gray.500"
          />
        ))}
      </HStack>
    </>
  );
};

export default PlatformIconList;
