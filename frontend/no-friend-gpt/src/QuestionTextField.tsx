import { Box, Button, Input } from "@chakra-ui/react";
import React, { useState, FC } from "react";

interface QuestionTextFieldProps {
  chatMessage: string[]; // Assuming chatMessage is an array of strings
  setChatMessage: React.Dispatch<React.SetStateAction<string[]>>;
}

const QuestionTextField: React.FC<QuestionTextFieldProps> = ({
  chatMessage,
  setChatMessage,
}) => {
  // send the data to backend!!!!! @Marcus,@wilson , @Jonathan
  const [question, setQuestion] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuestion(e.target.value);
  };
  const handleSubmit = () => {
    // Handle the submitted question via onQuestionSubmit

    // Optionally, you can pass the question to a parent component
    setChatMessage([...chatMessage, question]);

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
export default QuestionTextField;
