import * as React from "react"
import TextField from "./TextField";
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
} from "@chakra-ui/react"
import { ColorModeSwitcher } from "./ColorModeSwitcher"
import ImageIcon from "./UI-component/imageIcon";
import { FaLightbulb, FaIcons, FaRedo, FaReply, FaPaperPlane} from 'react-icons/fa';
import { useState } from "react";




export const App = () => {
  
  const initPrompt: string = "Your text goes here. Replace this with your actual content. Your text goes here. Replace this with your actual content. Your text goes here. Replace this with your actual content. Your text goes here. Replace this with your actual content. Your text goes here. Replace this with your actual content.";
  const [suggestedPromptText, setSuggestedPromptText] = useState<string>(initPrompt);

  // Placeholder handler for refresh prompt suggestion 
  const generateRandomText = () => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let generatedText = '';

    for (let j = 0; j < 5; j++) {
      for (let i = 0; i < 40; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      generatedText += characters[randomIndex];
    }
      generatedText += "\n"
    }
    setSuggestedPromptText(generatedText);
  };
  
  // Retrieve suggested prompt from LLM
  const refreshSuggestedPrompt = () => {
    // Get prompt from LLM
    // prompt = "some string from LLM";
    // setSuggestedPromptText(prompt);
  };
  
  return (
    <ChakraProvider theme={theme}>
      <CSSReset />
      {/* Ensure the container takes up the entire height of the viewport */}
      <Box height="98vh" width="full" display="flex" flexDirection="column">
        {/* Grid to cover the remaining space with two columns */}
        <Grid
          templateRows="1fr"
          templateColumns="30% 70%"
          gap={2}
          flex="1"
          width="100%"
          height="100%"
        >
          {/* First column */}
          <Grid templateRows="78% 7% 15%" gap={0} flex="1" width="100%" height="100%">
            {/* First row within the first column */}
            <GridItem display="flex" justifyContent="center" alignItems="center">
              {/* Your content for the first column, first row */}
              <Flex direction="column" align="center">
                <ImageIcon
                  url='https://static.wikia.nocookie.net/steven-he/images/0/0e/StevenHeAvatar.jpg'
                  iconSize='125px'
                  label="No Friend GPT"
                  labelFontSize='30px'
                />
                <Text>
                  Your faithful loner companion
                </Text>
              </Flex>
            </GridItem>

            {/* Second row within the first column */}
            <GridItem display="flex" justifyContent="flex-start" alignItems="center">
              <Flex direction="column" align="center" marginLeft="2">
                <FaLightbulb size={30} color="yellow" style={{ transform: "rotate(-20deg)" }} />
              </Flex>
              <Text>
                  Let's get started!
                </Text>
            </GridItem>

            {/* third row within the first column */}
            <GridItem display="flex" justifyContent="center" alignItems="flex-start">
              <HStack height="100%">
              <Box
                bg="gray.700" // Set the background color
                borderRadius="md" // Apply border-radius for rounded edges
                px={2} // Add padding to the box
                py={1}
                marginLeft="2"
                height="60%"
                
              >
                <Box height="100%" overflowY="scroll" css={{
                  "&::-webkit-scrollbar": {
                    width: "0.2rem",
                  },
                  "&::-webkit-scrollbar-thumb": {
                    backgroundColor:
                      "RGBA(255, 255, 255, 0.36)",
                  },
                }}>

                  <Text fontSize="sm" >
                    {suggestedPromptText}
                  </Text>
                </Box>
              </Box>

              <VStack height="60%">
                <IconButton
                    icon={<FaRedo style={{ transform: "rotate(90deg)" }} />}
                    size="sm"
                    bg="orange.400" // Set the background color directly on the IconButton
                    rounded="md" // Apply border-radius to achieve a circular shape
                    aria-label={""}
                    onClick={generateRandomText}
                />
                <IconButton
                    icon={<FaPaperPlane style={{ transform: "rotate(0deg)" }} />}
                    size="sm"
                    bg="green.300" // Set the background color directly on the IconButton
                    rounded="md" // Apply border-radius to achieve a circular shape
                    aria-label={""}            />
                </VStack>
              </HStack>
              {/* Textbox */}
              

              {/* Buttons */}
              <Flex 
                marginRight="2" 
                marginLeft="2"
                marginTop="4"
                alignItems="center" // Center-align items vertically
              >
              
                
              </Flex>
            </GridItem>
          </Grid>


          {/* Second column */}
          <GridItem
            bg="orange.200"
            width="100%"
            height="100%"
            display="flex"
            flexDirection="column"
          >
            {/* Your content for the second column */}
            Column 2 Content
            <Box
              // position="fixed"
              // textAlign="center"
              mt="auto"
              // mb="20px"
              boxSizing="content-box"
              bg="red.400"
            >
              <TextField />
            </Box>
          </GridItem>
        </Grid>
      </Box>
    </ChakraProvider>
  );
};
