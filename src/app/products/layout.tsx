"use client";
import { Header } from "@/components/layout/Header/Header";
import { usePathname } from "next/navigation";

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <div className="w-full relative flex flex-col gap-y-10">
      {pathname != "/products/register" ? <Header /> : null}
      <div
        className={`sm:px-4 lg:px-44 ${
          pathname == "/products/register" && "!px-0"
        }`}
      >
        {children}
      </div>
    </div>
  );
}
