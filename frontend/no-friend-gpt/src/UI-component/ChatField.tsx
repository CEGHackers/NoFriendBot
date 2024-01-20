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
      height="100%"
      templateColumns="repeat(2, 1fr)"
      templateRows="repeat(8, 1fr)"
      gap={2}
    >
      {chatMessages &&
        chatMessages.map((chatMessage: string | null, index: number) => (
          <GridItem colStart={index % 2 == 0 ? 2 : 1} height="100%">
            <Box height="100%">{chatMessage}</Box>
          </GridItem>
        ))}
    </Grid>
  );
};

export default ChatField;
