import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu";
import { GenresContext } from "@/contexts/GenresContext";
  import { useContext, useState } from "react";
import { useNavigate } from "react-router";
  
  const genresList = [
    { id: 28, name: "Action" },
    { id: 12, name: "Abenteuer" },
    { id: 16, name: "Animation" },
    { id: 35, name: "Komödie" },
    { id: 80, name: "Krimi" },
    { id: 99, name: "Dokumentarfilm" },
    { id: 18, name: "Drama" },
    { id: 10751, name: "Familie" },
    { id: 14, name: "Fantasy" },
    { id: 36, name: "Historie" },
    { id: 27, name: "Horror" },
    { id: 10402, name: "Musik" },
    { id: 9648, name: "Mystery" },
    { id: 10749, name: "Liebesfilm" },
    { id: 878, name: "Science Fiction" },
    { id: 10770, name: "TV-Film" },
    { id: 53, name: "Thriller" },
    { id: 10752, name: "Kriegsfilm" },
    { id: 37, name: "Western" },
  ];
  
  const Geners = () => {
    const {genres, setGenres} = useContext(GenresContext);
    const navigate = useNavigate();

    const onChange = (data: string) => {
      console.log(data);
      setGenres(data);
      navigate("/");
    }
  
    return (
      <DropdownMenu>
        <DropdownMenuTrigger>Genres</DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuSeparator />
          <DropdownMenuRadioGroup
            className="p-2 m-1"
            value={genres}
            onValueChange={onChange}
          >
            {genresList.map((genre) => (
              <DropdownMenuRadioItem
                key={genre.id}
                value={genre.id.toString()}
              >
                {genre.name}
              </DropdownMenuRadioItem>
            ))}
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    );
  };
  
  export default Geners;
  