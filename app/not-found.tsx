import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import NotFoundClient from "@/components/not-found-client";

export const metadata: Metadata = {
  title: "404 – Stranica nije pronađena | ENERGOCENTAR",
  description: "Tražena stranica ne postoji.",
};

export default function NotFound() {
  return (
    <div className="relative flex h-dvh w-full flex-col overflow-hidden bg-green-950">
      {/* Logo – top left */}
      <Link href="/" className="absolute left-4 top-4 z-10 sm:left-8 sm:top-6">
        <Image
          src="/brand/logo.svg"
          alt="ENERGOCENTAR"
          width={180}
          height={40}
          className="h-7 w-auto brightness-0 invert sm:h-9"
          priority
        />
      </Link>

      {/* Scene takes full viewport */}
      <div className="flex-1">
        <NotFoundClient />
      </div>

      {/* Subtitle */}
      <p className="pointer-events-none absolute left-1/2 top-[62%] -translate-x-1/2 text-center font-display text-base font-medium tracking-wide text-green-300/70 sm:text-lg">
        Stranica nije pronađena
      </p>

      {/* Back button */}
      <div className="absolute bottom-8 right-8 z-10">
        <Button
          asChild
          size="lg"
          className="bg-green-700 text-green-50 hover:bg-green-600"
        >
          <Link href="/">
            Vrati se na naslovnicu
            <ArrowRight className="ml-1 size-4" />
          </Link>
        </Button>
      </div>
    </div>
  );
}
