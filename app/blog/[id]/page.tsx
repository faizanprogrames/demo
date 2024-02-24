type Props = {
  params: {
    id: string;
  };
};

export default function BlogPage({ params }: Props) {
  return (
    <div>
      <h1 className="text-4xl text-center text-indigo-600">Blog {params.id}</h1>
    </div>
  );
}
