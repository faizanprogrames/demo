type Props = {
  params: {
    id: string;
  };
};

export default function ServicePage({ params }: Props) {
  return (
    <div>
      <h1 className="text-4xl text-center text-indigo-600">
        Details of Service {params.id}
      </h1>
    </div>
  );
}
