"use client";

import dynamic from "next/dynamic";

const NotFoundScene = dynamic(() => import("@/components/not-found-scene"), {
  ssr: false,
  loading: () => (
    <div className="flex h-full items-center justify-center">
      <span className="font-display text-[8rem] font-bold leading-none text-green-400/30 animate-pulse sm:text-[12rem]">
        404
      </span>
    </div>
  ),
});

export default function NotFoundClient() {
  return <NotFoundScene />;
}
