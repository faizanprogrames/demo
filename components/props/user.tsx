type Props = {
  student: string;
};

export default function User({ student }: Props) {
  return <div>{student}</div>;
}
