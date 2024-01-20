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
} from "@chakra-ui/react"
import { ColorModeSwitcher } from "./ColorModeSwitcher"
import ImageIcon from "./UI-component/imageIcon";

export const App = () => (
  <ChakraProvider theme={theme}>
    <CSSReset />
    {/* Ensure the container takes up the entire height of the viewport */}
    <Box minH="100vh" display="flex" flexDirection="column">
      {/* Grid to cover the remaining space with two columns */}
      <Grid
        templateRows="1fr"
        templateColumns="30% 70%"
        gap={4}
        flex="1"
        width="100%"
      >
        {/* First column */}
        <GridItem colSpan={1} rowSpan={1} bg="green.200" p={4}  display="flex" justifyContent="center" alignItems="center">
          {/* Your content for the first column */}
          <Flex direction="column" align="center">
              <ImageIcon
                url='https://static.wikia.nocookie.net/steven-he/images/0/0e/StevenHeAvatar.jpg'
                iconSize='125px'
                label="No Friend GPT"
                labelFontSize='30px'
              />
            </Flex>
        </GridItem>
        {/* Second column */}
        <GridItem
          bg="orange.200"
          width="100%"
          display="flex"
          flexDirection="column"
        >
          {/* Your content for the second column */}
          Column 2 Content
          <Box
            // position="fixed"
            // textAlign="center"
            mt="auto"
            mb="20px"
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
