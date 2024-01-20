import * as React from "react";
import {
  ChakraProvider,
  Box,
  Input,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
  GridItem,
  CSSReset,
  Flex,
  IconButton,
  HStack,
} from "@chakra-ui/react";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import ImageIcon from "./UI-component/imageIcon";
import {
  FaLightbulb,
  FaIcons,
  FaRedo,
  FaReply /* Replace with actual icons */,
  FaPaperPlane,
} from "react-icons/fa";
import ChatField from "./UI-component/ChatField";
import Dashboard from "./Dashboard";

export const App = () => (
  <ChakraProvider theme={theme}>
    <CSSReset />
    {/* Ensure the container takes up the entire height of the viewport */}
    <Dashboard />
  </ChakraProvider>
);