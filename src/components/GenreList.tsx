import React from "react";
import useGenre from "../hooks/useGenre";
import { HStack, Image, List, ListItem, Text } from "@chakra-ui/react";
import getCropedImageUrl from "../services/img-url";

const GenreList = () => {
  const { data, error, isLoading } = useGenre();

  return (
    <List>
      {data.map((genre) => (
        <ListItem paddingY="5px">
          <HStack>
            <Image
              boxSize="32px"
              borderRadius="8px"
              src={getCropedImageUrl(genre.image_background)}
            />
            <Text fontSize="lg" key={genre.id}>
              {genre.name}
            </Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
