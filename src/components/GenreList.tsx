import React from "react";
import useGenre from "../hooks/useGenres";
import {
  Button,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
  Text,
} from "@chakra-ui/react";
import getCropedImageUrl from "../services/img-url";
import useGenres, { Genre } from "../hooks/useGenres";

interface Props {
  onSelectGenre: (genre: Genre) => void;
}

const GenreList = ({ onSelectGenre }: Props) => {
  const { data, error, isLoading } = useGenres();

  return (
    <>
      {error && null}
      {isLoading && <Spinner />}

      <List>
        {data.map((genre) => (
          <ListItem paddingY="5px">
            <HStack>
              <Image
                boxSize="32px"
                borderRadius="8px"
                src={getCropedImageUrl(genre.image_background)}
              />
              <Button
                variant="link"
                fontSize="lg"
                key={genre.id}
                onClick={() => onSelectGenre(genre)}
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
