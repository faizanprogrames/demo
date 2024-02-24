type Props = {
  params: {
    slug: string[];
  };
};

export default function Docs({ params }: Props) {
  if (params.slug?.length === 2) {
    return (
      <h1>
        Viewing docs for {params.slug[0]} and {params.slug[1]}
      </h1>
    );
  } else if (params.slug?.length === 1) {
    return <h1>Viewing docs for {params.slug[0]}</h1>;
  }
  return <div>Docs</div>;
}
