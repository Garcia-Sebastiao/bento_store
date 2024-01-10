import { mouseImage } from "@/assets";
import { Header } from "@/components/layout/Header/Header";
import { ProductCard } from "@/components/ui/Product/Card/ProductCard";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Products() {
  return (
    <div className="w-full flex flex-col gap-y-12">
      <div className="flex justify-between sm:flex-wrap  gap-8 w-full items-center">
        <div className="flex flex-col gap-y-3">
          <h1 className="font-bold sm:text-xl lg:text-3xl">Produtos</h1>
          <p className="text-sm text-muted leading-relaxed max-w-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
            fugiat eum quibusdam minus sint obcaecati
          </p>
        </div>

        <Link
          href="/products/register"
          className="hover:bg-primary sm:w-full md:w-auto text-center font-medium hover:brightness-75 transition-all px-6 py-3 text-sm rounded-md bg-primary duration-150"
        >
          Registrar
        </Link>
      </div>

      <div className="w-full grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {Array(12)
          .fill(0)
          .map((_, index) => (
            <ProductCard
              key={index}
              className="col-span-1"
              image={mouseImage}
              rate={3}
              title="G Pro X Superlight"
              price="$306,00"
            />
          ))}
      </div>
    </div>
  );
}
