import { Sections } from "@/components/sections";
import React from "react";

function page(props: {
  searchParams: {
    page?: string;
  };
}) {
  const page = parseInt(props.searchParams.page || "1", 10);
  return (
    <div className="flex flex-col gap-7 w-[90%] max-w-6xl mx-auto pt-10 pb-5">
      <Sections currentPage={page} />
      <div className="fixed md:hidden z-50 inset-0 bg-[#aaaaaa6e] top-0 left-0 backdrop-blur flex items-center justify-center">
        <p className="font-semibold text-4xl text-center leading-10">
          Version mobile coming soon
        </p>
      </div>
    </div>
  );
}

export default page;
