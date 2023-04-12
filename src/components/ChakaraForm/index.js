import React from "react";
import { useForm } from "react-hook-form";
import {
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Container,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Select,
  Button,
} from "@chakra-ui/react";

const ChakaraForm = () => {
  const { handleSubmit, errors, register, formState } = useForm();

  function onSubmit(values) {
    console.log("data", values);
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Container border={"1px solid"} p={"10"}>
        <Tabs>
          <TabList>
            <Tab>IT</Tab>
            <Tab>EN</Tab>
          </TabList>

          <TabPanels>
            <TabPanel>
              <FormControl>
                <FormLabel>Titolo</FormLabel>
                <Input type="text" name="title-it" {...register("title-it")} />
              </FormControl>
              <FormControl>
                <FormLabel>Descrizione</FormLabel>
                <Textarea
                  name="description-it"
                  {...register("description-it")}
                />
              </FormControl>
            </TabPanel>
            <TabPanel>
              <FormControl>
                <FormLabel>Title</FormLabel>
                <Input type="text" name="title-en" {...register("title-en")} />
              </FormControl>
              <FormControl>
                <FormLabel name="description-en">Description</FormLabel>
                <Textarea {...register("description-en")} />
              </FormControl>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Container>
      <Container border={"1px solid"} p={"10"}>
        <FormControl>
          <FormLabel>Age</FormLabel>
          <NumberInput name="age" {...register("age")}>
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
        </FormControl>
        <FormControl>
          <FormLabel>Select Program</FormLabel>
          <Select
            placeholder="Select option"
            name="program"
            {...register("program")}
          >
            <option value="BCA">BCA</option>
            <option value="MCA">MCA</option>
            <option value="BBA">BBA</option>
            <option value="MBA">MBA</option>
          </Select>
        </FormControl>
      </Container>
      <Container border={"1px solid"} p={"10"}>
        <FormControl>
          <Button colorScheme="teal" size="lg" type="submit">
            Button
          </Button>
        </FormControl>
      </Container>
    </form>
  );
};

export default ChakaraForm;
