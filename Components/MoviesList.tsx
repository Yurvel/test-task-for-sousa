import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import {
  movieSelectors,
  requestMoviesPage,
  MoviesLoadingStatus,
} from "../redux/moviesSlice";
import { Movie } from "./Movie";
import { Pagination } from "./Pagination";

export const MoviesList = () => {
  const dispatch = useAppDispatch();
  const currentPage = useAppSelector(movieSelectors.selectCurrentPageIndex);
  const movies = useAppSelector(movieSelectors.selectMovieIds);
  const currentPageStatus = useAppSelector(
    movieSelectors.selectCurrentPageStatus
  );

  useEffect(() => {
    if (currentPageStatus === MoviesLoadingStatus.IDLE) {
      dispatch(requestMoviesPage(currentPage));
    }
  }, [currentPageStatus, currentPage, dispatch]);

  const handlePaginationChange = (page: number) => {
    dispatch(requestMoviesPage(page));
  };

  return (
    <>
      {currentPageStatus === MoviesLoadingStatus.SUCCEEDED && (
        <div className="bg-white">
          <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
            <div className="mt-0 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
              {movies.map((id) => (
                <Movie key={id} movieId={id} />
              ))}
            </div>
          </div>
          <Pagination
            totalMovies={500}
            paginate={handlePaginationChange}
            currentPage={currentPage}
            postsPerPage={20}
          />
        </div>
      )}
    </>
  );
};
