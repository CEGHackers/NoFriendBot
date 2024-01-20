import React from "react";
import { Flex, Text, Avatar } from "@chakra-ui/react"; // Import the Image component
import logo from '../resources/images/noFriendGPT_icon.jpg'

interface ImageIconProps {
  url: string;
  iconSize: `${number}px`; // Template literal type for values like "125px"
  label: string
  labelFontSize: `${number}px`;
}

/*
Possible Avatar Sizes
2xs, xs, sm, md, lg, xl, 2xl, XXps
*/

const ImageIcon: React.FC<ImageIconProps> = ({ url, iconSize, label, labelFontSize }) => {
    
    return (
    <Flex align="center" direction="column">
        <Avatar size='xl' src={logo}/>
        {/* <Avatar size='xl' src={url}/> */}
        <Text fontSize={labelFontSize} color="white">{label}</Text>
    </Flex>
  );
};

export default ImageIcon;
