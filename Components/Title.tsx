export type Props = {
  title: string;
};
export const Title = ({ title }: Props) => {
  return <h1 className="flex justify-center text-5xl">{title}</h1>;
};
