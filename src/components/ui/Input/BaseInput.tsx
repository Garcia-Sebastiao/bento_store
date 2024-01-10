import { Input } from "../input";

type BaseInputProps = {
  className?: string;
  placeholder?: string;
  label?: string;
  type?: "text" | "email" | "password" | "number";
  id?: string;
};

export function BaseInput({
  className,
  placeholder,
  label,
  id,
  type = "text",
}: BaseInputProps) {
  return (
    <div className={` w-full flex flex-col gap-y-2 ${className}`}>
      {label && (
        <label htmlFor={id} className=" font-medium text-sm">
          {label}
        </label>
      )}

      <Input
        id={id}
        placeholder={placeholder}
        type={type}
        className={`bg-border p-4 border-none py-6 placeholder:text-zinc-400 rounded-md`}
      />
    </div>
  );
}
