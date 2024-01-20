import { Box, Grid, GridItem, Text } from "@chakra-ui/react";
import React from "react";

interface ChatFieldProps {
  chatMessages: string[]; // Assuming chatMessage is an array of strings
}
const ChatField: React.FC<ChatFieldProps> = ({ chatMessages }) => {
  return (
    <Grid
      mt={2}
      mx={1}
      maxHeight="86vh"
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
            bgColor={index % 2 == 0 ? "teal.600" : "gray.600"}
            borderRadius="lg"
            mx={1}
          >
            <Box mx={2} my={3}>
              {chatMessage}
            </Box>
          </GridItem>
        ))}
    </Grid>
  );
};

export default ChatField;
