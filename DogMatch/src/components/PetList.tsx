import { AnimalData } from "@petfinder/petfinder-js/dist/api/animalData";
import React from "react";
import { useAppContext } from "../contexts/AppContext";
import {
  SimpleGrid,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Text,
  Stack,
  Box,
  Flex,
  Grid,
  Spacer,
} from "@chakra-ui/react";
import PetListDetails from "./PetListDetails";
import { AnimateSharedLayout } from "framer-motion";

interface IProps {
  petName: string;
  breed: string;
  description: string;
  photo: string | null;
  species: string;
  age: string;
}

const PetList: React.FC<IProps> = (props: IProps) => {
  const { animalData, loading } = useAppContext();
  const sadNoPhoto: string =
    "https://res.cloudinary.com/dsqh5elvv/image/upload/v1670819335/images_1_rke0b0.png";
  return (
    <Flex p="6" w="90vw">
      <Grid
        templateColumns={{
          md: "repeat(2, 1fr)",
          lg: "repeat(3, 1fr)",
          xl: "repeat(3, 1fr)",
        }}
        gap="6"
        maxH={"450px"}
      >
        {loading === false ? (
          animalData.map((animal, index) => {
            return (
              <PetListDetails
                petName={animal.name}
                key={index}
                photo={
                  animal.photos[0] !== undefined
                    ? animal.photos[0].full
                    : sadNoPhoto
                }
                description={animal.description}
                species={animal.species}
              />
            );
          })
        ) : (
          <div>No data</div>
        )}
      </Grid>
    </Flex>
  );
};

export default PetList;
