import Link from "next/link";
import React from "react";

const Pagination = ({ totalPages }: { totalPages: number }) => {
  return (
    <div className="flex gap-2 my-1 mx-auto">
      {Array.from({ length: totalPages }, (_, i) => {
        return (
          <Link
            href={`/sections?page=${i + 1}`}
            key={i}
            className="bg-white border border-solid border-black px-4 py-2 relative before:absolute before:-left-1 before:-top-1 before:-z-10 before:bg-black before:inset-0 before:transition-all hover:before:left-0 hover:before:top-0"
          >
            {i + 1}
          </Link>
        );
      })}
    </div>
  );
};

export default Pagination;
