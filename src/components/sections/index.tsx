import React from "react";
import { listSections } from "./constants";
import { Section } from "./section";
import { pagination } from "@/lib/utils";
import Pagination from "./section/pagination";

export const Sections = ({ currentPage }: { currentPage: number }) => {
  const { start, end, totalPages } = pagination(
    listSections.length,
    currentPage
  );

  return (
    <>
      {listSections.slice(start, end).map((section, index) => {
        return (
          <Section
            key={index}
            title={section.title}
            className={section.className}
            copyText={section.code}
          >
            <section.component />
          </Section>
        );
      })}
      <Pagination totalPages={totalPages} />
    </>
  );
};
