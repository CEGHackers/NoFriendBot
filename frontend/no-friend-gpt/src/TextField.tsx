import React, { useState } from "react";
import { ChakraProvider, Box, Input, Button } from "@chakra-ui/react";

interface QuestionTextFieldProps {
  // Function to handle the submitted question
  onQuestionSubmit: (question: string) => void;
}

const QuestionTextField: React.FC<QuestionTextFieldProps> = ({
  onQuestionSubmit,
}) => {
  // send the data to backend!!!!! @Marcus,@wilson , @Jonathan
  const [question, setQuestion] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuestion(e.target.value);
  };
  const handleSubmit = () => {
    // Handle the submitted question via onQuestionSubmit
    console.log("Text response", question);

    // Optionally, you can pass the question to a parent component
    if (onQuestionSubmit) {
      onQuestionSubmit(question);
    }

    // Clear the input field after submission
    setQuestion("");
  };

  return (
    <Box p={4}>
      <Input
        placeholder="Type your question..."
        value={question}
        onChange={handleInputChange}
      />
      <Button mt={4} colorScheme="teal" onClick={handleSubmit}>
        Submit
      </Button>
    </Box>
  );
};

// Example usage in a parent component
const App: React.FC = () => {
  const handleQuestionSubmit = (question: string) => {
    // Handle the submitted question in the parent component
    console.log("Question submitted in parent component:", question);
  };

  return (
    <ChakraProvider>
      <QuestionTextField onQuestionSubmit={handleQuestionSubmit} />
    </ChakraProvider>
  );
};

export default App;
