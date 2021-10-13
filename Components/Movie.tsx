import { EntityId } from "@reduxjs/toolkit";
import React, { MouseEvent } from "react";
import { StarIcon } from "@heroicons/react/outline";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { moviesActions, movieSelectors } from "../redux/moviesSlice";

type Props = {
  movieId: EntityId;
};

export const Movie = ({ movieId }: Props) => {
  const movieData = useAppSelector((state) =>
    movieSelectors.selectMovieById(state, movieId)
  )!;
  const favorite = useAppSelector((state) =>
    movieSelectors.selectMovieFavoriteFlag(state, movieId)
  );
  const dispatch = useAppDispatch();

  const handleFavChange = (event: MouseEvent, newValue: EntityId) => {
    event.preventDefault();
    if (event.currentTarget !== event.target) {
      dispatch(moviesActions.setFavorite({ id: movieId, flag: !!newValue }));
    }
  };

  return (
    <div className={`group relative ${favorite ? "bg-yellow-600" : ""}`}>
      <a href="https://www.themoviedb.org/" target="_blank">
        <div className=" w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
          <img
            src={movieData.image}
            alt="poster"
            className="w-full h-full object-center object-cover lg:w-full lg:h-full"
          />
        </div>
        <button type="button" className="z-10 cursor-pointer">
          <StarIcon
            className="h-7 cursor-pointer   w-7 text-w-500"
            onClick={(e) => handleFavChange(e, movieId)}
          />
        </button>

        <div className="mt-4 flex justify-between">
          <div>
            <div className={`flex `}>
              <p className="text-sm font-medium text-gray-900 mr-12">
                rating: {movieData.rating}
              </p>
              <p className="text-sm font-medium text-gray-900">
                year: {movieData.year}
              </p>
            </div>
            <h3 className="text-sm text-gray-700">
              {/* <span aria-hidden="true" className="absolute inset-0" /> */}
              {movieData.title}
            </h3>
            <p className="mt-1 text-sm text-gray-500">{movieData.overview}</p>
          </div>
        </div>
      </a>
    </div>
  );
};
