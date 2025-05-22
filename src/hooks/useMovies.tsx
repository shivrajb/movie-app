import apiClient from "@/services/api-client"
import { useEffect, useState } from "react";


export interface MovieResult{
    poster_path: string,
    overview: string,
    title: string,
    id: number,
    adult: boolean;
    backdrop_path: string;
    genre_ids: number[];
    original_language: string;
    original_title: string;
    popularity: number;
    release_date: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
    name?: string;
}

const useMovieList = (genres?:string | null) => {

    const [movieLists, setMovieLists] = useState<MovieResult[]>();

    const fetchMovieList = async () => {
        try {
            const res = await apiClient.get("/discover/movie",{
                params:{
                    with_genres : genres
                },
            });
            
          // const res = await apiClient.get("/movie/popular");
           setMovieLists(res.data.results);
           console.log(res.data.results);
        } catch (error) {
            
        }
    };

    useEffect(()=>{
        fetchMovieList();
    },[genres]);

    return {movieLists};

};

export default useMovieList;