import { StartIcon } from "@/assets/icons/Star";
import Image from "next/image";
import { Button } from "../../button";
import { FiShoppingCart } from "react-icons/fi";

type ProductCardProps = {
  title?: string;
  price?: string;
  image?: any;
  oldPrice?: string;
  rate?: number;
  className?: string;
};

export function ProductCard({
  title,
  price,
  image,
  rate = 0,
  oldPrice,
  className,
}: ProductCardProps) {
  return (
    <div className={`flex flex-col items-start gap-y-4 ${className}`}>
      <div className="w-full h-48 rounded-lg bg-card flex-center">
        <Image src={image ?? ""} alt={title ?? "Product"} />
      </div>

      <div className="w-full flex justify-between items-start">
        <div className="flex flex-col items-start gap-y-2">
          <span className="text-sm">{title}</span>
          <div className="flex items-center gap-x-2">
            <h5 className="font-bold">{price}</h5>
            <s className="text-sm text-border font-medium">{oldPrice}</s>
          </div>
          <div className="flex items-center gap-x-1">
            {Array(5)
              .fill(0)
              .map((_, index) => (
                <span
                  className={
                    index + 1 <= rate ? "[&>svg_*]:fill-secondary" : ""
                  }
                >
                  {StartIcon}
                </span>
              ))}
          </div>
        </div>

        <Button className="hover:bg-primary hover:brightness-75 transition-all duration-150">
          <FiShoppingCart className="text-xl" />
        </Button>
      </div>
    </div>
  );
}
