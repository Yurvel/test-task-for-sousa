export type Props = {
  children?: JSX.Element | JSX.Element[];
};

export const Container = ({ children }: Props): JSX.Element => {
  return <div className="mr-auto ml-auto w-4/5">{children}</div>;
};
