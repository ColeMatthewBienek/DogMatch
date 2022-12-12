import React from "react";
import {
  SimpleGrid,
  Card,
  CardHeader,
  CardBody,
  Button,
  CardFooter,
  Text,
  Heading,
  Box,
  Flex,
  Spacer,
  Image,
  Container,
  Avatar,
} from "@chakra-ui/react";
import { BellIcon, InfoIcon, ExternalLinkIcon } from "@chakra-ui/icons";
function PetListDetails(props: {
  petName: string;
  photo: string;
  description: string;
}) {
  return (
    <Card size="sm" p="4">
      <CardHeader>
        <Flex>
          <Flex flex={1} gap="4" alignItems={"center"} flexWrap="wrap">
            <Avatar
              name="puppy placeholder"
              src="https://res.cloudinary.com/dsqh5elvv/image/upload/v1670819169/karsten-winegeart-ewfHXBcuFA0-unsplash_chmqbh.jpg"
            />
            <Box>
              <Heading size="sm">{props.petName}</Heading>
              <Text>Few words here</Text>
            </Box>
          </Flex>
        </Flex>
      </CardHeader>
      <CardBody>
        <Text>{props.description}</Text>
        <Box>
          <Image objectFit={"cover"} src={props.photo} />
        </Box>
      </CardBody>

      <CardFooter
        justify="space-between"
        flexWrap="wrap"
        sx={{
          "& > button": {
            minW: "136px",
          },
        }}
      >
        <Button flex="1" variant="ghost" leftIcon={<BellIcon />}>
          Like
        </Button>
        <Button flex="1" variant="ghost" leftIcon={<InfoIcon />}>
          More Info
        </Button>
        <Button flex="1" variant="ghost" leftIcon={<ExternalLinkIcon />}>
          Get Link
        </Button>
      </CardFooter>
    </Card>
  );
}

export default PetListDetails;
