import { Box, Grid, GridItem, HStack, Text } from "@chakra-ui/react";
import React from "react";
import ImageIcon from "./imageIcon";
import UserIcon from "./UserIcon";

interface ChatFieldProps {
  chatMessages: string[]; // Assuming chatMessage is an array of strings
}
const ChatField: React.FC<ChatFieldProps> = ({ chatMessages }) => {
  return (
    <Grid
      mt={2}
      mx={1}
      maxHeight="80vh"
      templateColumns="repeat(2, 1fr)"
      gap={5}
      pr={2}
      autoRows="minmax(min-content, max-content)"
      overflowY="scroll"
      css={{
        "&::-webkit-scrollbar": {
          width: "0.2rem",
        },
        "&::-webkit-scrollbar-thumb": {
          backgroundColor: "RGBA(255, 255, 255, 0.36)",
        },
      }}
    >
      {chatMessages &&
        chatMessages.map((chatMessage: string | null, index: number) => (
          <GridItem
            colStart={index % 2 == 0 ? 2 : 1}
            rowStart={index + 1}
            mx={1}
          >
          
          {index % 2 == 0 ? (
            <HStack  spacing={2}>
              <Box
                mx={2}
                my={3}
                ml="auto"
                bgColor={index % 2 === 0 ? "teal.600" : "gray.600"}
                padding="10px"
                borderRadius="lg"
                textAlign="center" // Center align the text horizontally
                display="flex"
                justifySelf="flex-end"
                // justifyContent="space-between"
                // alignItems="center"
              >
                <Text textAlign="left" margin="auto" 
                // justifyContent="center"
                // alignItems="center"
                 display="inline-block">
                  {chatMessage}
                </Text>
              </Box>

              <UserIcon 
                iconSize="20px" 
                label="Me" 
                labelFontSize="12px"
                />
            </HStack>
          ) : (
            <HStack spacing={2}>
              <ImageIcon 
                iconSize="sm" 
                label="NoFriendGPT" 
                labelFontSize="12px" />
                
              <Box
                mx={2}
                my={3}
                bgColor={index % 2 === 0 ? "teal.600" : "gray.600"}
                padding="10px"
                borderRadius="lg"
                textAlign="center" // Center align the text horizontally
              >
                <Text textAlign="left" margin="auto" display="inline-block">
                  {chatMessage}
                </Text>
              </Box>
            </HStack>
          )}

            {/* <Box mx={2} my={3}>
              {chatMessage}
            </Box> */}
          </GridItem>
        ))}
    </Grid>
  );
};

export default ChatField;
