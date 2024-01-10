"use client";
import { SheetCart } from "./SheetCart";
import { DrawerCart } from "./DrawerCart";
import { useMediaQuery } from "@uidotdev/usehooks";

export function Cart() {
  const isSmallDevice = useMediaQuery("only screen and (max-width : 360px)");
  const isLargeDevice = useMediaQuery("only screen and (min-width : 1201px)");

  if (isLargeDevice) {
    return <SheetCart />;
  }

  return <DrawerCart />;
}
