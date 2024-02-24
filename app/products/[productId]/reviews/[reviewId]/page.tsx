type Props = {
  params: {
    productId: string;
    reviewId: string;
  };
};

export default function Review({ params }: Props) {
  return (
    <div>
      Review {params.reviewId} of product {params.reviewId}
    </div>
  );
}
