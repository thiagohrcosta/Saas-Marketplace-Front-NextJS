import axios from "axios";
import { GetStaticProps, GetStaticPaths } from "next";
import Image from "next/image";

type Product = {
  id: string;
  name: string;
  photos: []
};

export default function ProductPage({ product }: { product: Product }) {
  if (!product) return <h1>Produto não encontrado</h1>;

  return (
    <div>
      <Image 
        src={product.photos[0]} 
        width={320}
        height={500}  
        alt={product.name}
      />
      <h1>{product.name}</h1>
    </div>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await fetch("http://localhost:3000/api/v1/products");
  const products: Product[] = await response.json();

  const paths = products.map((product) => ({
    params: { id: String(product.id) },
  }));

  return { paths, fallback: "blocking" };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const id = params?.id;

  const response = await fetch(`http://localhost:3000/api/v1/products/${id}`);
  const product = await response.json();
  console.log(product)

  return {
    props: { product },
    revalidate: 60
  };
};
