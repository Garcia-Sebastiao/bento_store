import { illustration } from "@/assets";
import { BaseInput } from "@/components/ui/Input/BaseInput";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";
import Link from "next/link";
import { FiChevronLeft } from "react-icons/fi";

export default function RegisterProduct() {
  return (
    <div className="flex w-full h-screen">
      <div className="flex-1 sm:px-4 lg:px-8 flex-center">
        <div className="flex flex-col gap-y-6 w-96">
          <h2 className="text-2xl font-bold">Registrar Produto</h2>

          <Link href="/products" className="flex items-center gap-x-3">
            <FiChevronLeft />
            <span className="text-sm underline">Voltar</span>
          </Link>

          <form action="" className="w-full flex flex-col gap-y-5">
            <BaseInput
              className="flex-1"
              label="Nome do produto"
              placeholder="Digute o nome do produto"
            />
            <BaseInput
              className="flex-1 max-w-sm"
              label="Preço"
              placeholder="Digute o nome do produto"
            />

            <div className="flex flex-col gap-y-4">
              <label htmlFor="description" className=" font-medium text-sm">
                Descrição
              </label>
              <Textarea
                placeholder="Digite uma descrição ao produto"
                id="description"
                className="rounded-md bg-border p-4 border-none placeholder:text-zinc-400"
              />
            </div>

            <div className="w-full flex items-center justify-between">
              <Button className="bg-foreground text-black">Cancelar</Button>
              <Button className="bg-primary hover:bg-primary transition duration-150 hover:brightness-75">
                Registrar
              </Button>
            </div>
          </form>
        </div>
      </div>
      <div className="flex-1 max-w-4xl bg-card bg-opacity-50 sm:hidden lg:flex items-center justify-center">
        <Image src={illustration} alt="" className="w-96" />
      </div>
    </div>
  );
}
