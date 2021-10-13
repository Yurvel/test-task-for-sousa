import { EntityId } from "@reduxjs/toolkit";
import { ChangeEvent } from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { moviesActions, movieSelectors } from "../redux/moviesSlice";

type Props = {
  movieId: EntityId;
};

export const Movie = ({ movieId }: Props) => {
  const movieData = useAppSelector((state) =>
    movieSelectors.selectMovieById(state, movieId)
  )!;
  //   const favorite = useAppSelector((state) =>
  //     movieSelectors.selectMovieFavoriteFlag(state, movieId)
  //   );
  const dispatch = useAppDispatch();

  //   const handleFavChange = (
  //     event: ChangeEvent<unknown>,
  //     newValue: number | null
  //   ) => {
  //     dispatch(moviesActions.setFavorite({ id: movieId, flag: !!newValue }));
  //   };

  return (
    <div className="group relative">
      <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
        <img
          src={movieData.image}
          alt="poster"
          className="w-full h-full object-center object-cover lg:w-full lg:h-full"
        />
      </div>
      <div className="mt-4 flex justify-between">
        <div>
          <div className="flex">
            <p className="text-sm font-medium text-gray-900 mr-12">
              rating: {movieData.rating}
            </p>
            <p className="text-sm font-medium text-gray-900">
              year: {movieData.year}
            </p>
          </div>
          <h3 className="text-sm text-gray-700">
            <span aria-hidden="true" className="absolute inset-0" />
            {movieData.title}
          </h3>
          <p className="mt-1 text-sm text-gray-500">{movieData.overview}</p>
        </div>
      </div>
    </div>
  );
};
