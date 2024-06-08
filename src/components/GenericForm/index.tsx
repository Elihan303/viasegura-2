import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Textarea,
} from "@chakra-ui/react";
import { useFormik } from "formik";
import { useNavigate } from "react-router";
import { MainLayout } from "../../layouts/MainLayout.tsx";

export const GenericForm = ({
  initialValues,
  fields,
  onSubmit,
  title,
  navigationToFinish,
}) => {
  const navigation = useNavigate();
  const formik = useFormik({
    initialValues: initialValues,
    onSubmit: async (values) => {
      await onSubmit(values);
      formik.resetForm();
      navigationToFinish();
    },
  });

  return (
    <MainLayout>
      <Flex
        w={["100%", "100%", "60%", "60%", "100%"]}
        p="3%"
        justifyContent={"center"}
        alignItems={"center"}
        flexDir="column"
        overflow="auto"
        minH="100vh"
      >
        <Box
          borderWidth={1}
          px={4}
          width="full"
          maxWidth="500px"
          borderRadius={4}
          textAlign="center"
          boxShadow="lg"
          padding={4}
        >
          <Heading marginBottom={3}>{title}</Heading>
          <form onSubmit={formik.handleSubmit}>
            {fields.map((field, index) => (
              <FormControl mt={index === 0 ? 0 : 4} key={field.name}>
                <FormLabel>{field.label}</FormLabel>
                {field.type === "textarea" ? (
                  <Textarea
                    id={field.name}
                    name={field.name}
                    value={formik.values[field.name]}
                    onChange={formik.handleChange}
                  />
                ) : (
                  <Input
                    id={field.name}
                    name={field.name}
                    type={field.type}
                    value={formik.values[field.name]}
                    onChange={formik.handleChange}
                  />
                )}
              </FormControl>
            ))}
            <Button type="submit" colorScheme="purple" width="full" mt={4}>
              {title}
            </Button>
          </form>
          <Button
            type="button"
            colorScheme="red"
            width="full"
            mt={4}
            onClick={() => navigation(-1)}
          >
            Atras
          </Button>
        </Box>
      </Flex>
    </MainLayout>
  );
};
