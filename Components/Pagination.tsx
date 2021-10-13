type Props = {
  postsPerPage: number;
  totalMovies: number;
  paginate: (number: number) => void;
  currentPage: number;
};

export const Pagination = (props: Props) => {
  const { postsPerPage, totalMovies, paginate, currentPage } = props;

  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalMovies / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="py-2">
      <div>
        <p className="text-sm text-gray-700">
          Showing
          <span className="font-medium">
            {" "}
            {currentPage * postsPerPage - 20}{" "}
          </span>
          to
          <span className="font-medium"> {currentPage * postsPerPage} </span>
          of
          <span className="font-medium"> {totalMovies} </span>
          results
        </p>
      </div>
      <nav className="block">
        <ul className="flex pl-0 rounded list-none flex-wrap">
          <li>
            {pageNumbers.map((number) => (
              <span
                key={number}
                onClick={() => {
                  paginate(number);
                }}
                className={
                  currentPage === number
                    ? "cursor-pointer bg-blue border-red-300 text-red-500 hover:bg-blue-200 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
                    : "cursor-pointer bg-white border-gray-300 text-gray-500 hover:bg-blue-200 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
                }
              >
                {number}
              </span>
            ))}
          </li>
        </ul>
      </nav>
    </div>
  );
};
