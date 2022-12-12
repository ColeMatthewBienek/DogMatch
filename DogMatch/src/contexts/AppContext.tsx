import React, {
  ReactNode,
  useState,
  createContext,
  useContext,
  useEffect,
} from "react";
import axios from "axios";
import { SchemaTypeOptions } from "mongoose";

interface IPhotos {
  small: string;
  medium: string;
  large: string;
  full: string;
}

interface ITypes {
  name: string;
  coats: string[];
  colors: string[];
  genders: string[];
}

interface IAnimals {
  id: string;
  organization_id: number;
  url: string;
  type: string;
  species: string;
  breeds: {
    primary: string;
    secondary: string | null;
    mixed: boolean;
    unknown: boolean;
  };
  age: string;
  gender: string;
  size: string;
  attributes: {
    spayed_neutered: boolean | null;
    house_trained: boolean | null;
    declawed: boolean | null;
    special_needs: boolean | null;
    shots_current: boolean | null;
  };
  tags: string[];
  name: string;
  description: string;
  organization_animal_id: number | null;
  photos: IPhotos[] | [];
  primary_photo_cropped: IPhotos[];
  status: string;
  contact: {
    email: string;
  };
}

interface IAppContextInterface {
  animalData: IAnimals[];
  typeData: ITypes[];
  state: object;
  setState: React.Dispatch<React.SetStateAction<{}>>;
  getAnimalData: Function;
  loading: boolean;
}

export const AppContext = createContext<IAppContextInterface | null>(null);

type Props = {
  children: React.ReactNode;
};

export function ApplicationContext({ children }: Props): JSX.Element {
  const [state, setState] = useState({});
  const [loading, setLoading] = useState(true);
  // make some api calls to get data to display --> default to random dogs
  const getAnimalData = (): void => {
    async function handleGetAnimalData() {
      try {
        const [animalsGet, typesGet] = await Promise.all([
          axios.get("http://localhost:3000/api/animals"),
          axios.get("http://localhost:3000/api/types"),
        ]);
        const { animals } = animalsGet.data;
        const { types } = typesGet.data;

        // type and add "animals" data that i will use
        const animalData: IAnimals[] = animals
          .map((animal: any) => {
            return {
              id: animal.id,
              organization_id: animal.organization_id,
              url: animal.url,
              type: animal.type,
              species: animal.species,
              breeds: {
                primary: animal.breeds.primary,
                secondary: animal.breeds.secondary,
                mixed: animal.breeds.mixed,
                unknown: animal.breeds.unkown,
              },
              age: animal.age,
              gender: animal.gender,
              size: animal.size,
              attributes: {
                spayed_neutered: animal.attributes.spayed_neutered,
                house_trained: animal.attributes.house_trained,
                declawed: animal.attributes.declawed,
                special_needs: animal.attributes.special_needs,
                shots_current: animal.attributes.shots_current,
              },
              tags: animal.tags,
              name: animal.name,
              description: animal.description,
              organization_animal_id: animal.organization_animal_id,
              photos: animal.photos,
              primary_photo_cropped: animal.primary_photo_cropped,
              status: animal.status,
              contact: {
                email: animal.contact.email,
              },
            };
          })
          .filter((element: any) => {
            return element.photos[0] !== undefined;
          });

        // type and add "types" data that I will use
        const typeData: ITypes = types.map((type: any) => {
          return {
            name: type.name,
            coats: type.coats,
            colors: type.colors,
            genders: type.genders,
          };
        });
        console.log("animalData: ", animalData);
        console.log("typeData: ", typeData);
        console.log("photos ", animalData[0].photos[0]);
        const tempState = {
          animalData,
          typeData,
        };
        setState(tempState);
        setLoading(false);
      } catch (err) {
        console.log(err);
      }
    }
    handleGetAnimalData();
  };
  useEffect(() => {
    getAnimalData();
  }, []);
  const values = {
    ...state,
    state,
    setState,
    getAnimalData,
    loading,
  };
  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
}

export function useAppContext() {
  const ctx = useContext(AppContext);
  if (ctx === undefined || ctx === null) {
    throw new Error("out of context.");
  }
  return ctx;
}
