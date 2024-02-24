type Props = {
  params: {
    productId: string;
  };
};

export default function Product({ params }: Props) {
  return <div>Details of product {params.productId}</div>;
}
