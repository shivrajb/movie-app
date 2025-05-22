import { createContext, useState } from "react";

export const GenresContext = createContext<{
  genres: string;
  setGenres: (genre: string) => void;
}>({
  genres: "",
  setGenres: () => {}, // placeholder function
});

export const GenresProvider = ({ children }: { children: React.ReactNode }) => {
  const [genres, setGenres] = useState<string>("");

  return (
    <GenresContext.Provider value={{ genres, setGenres }}>
      {children}
    </GenresContext.Provider>
  );
};
