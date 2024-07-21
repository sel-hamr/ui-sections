import React from "react";
import { listSections } from "./constants";
import { Section } from "./section";

export const Sections = () => {
  return (
    <>
      {listSections.map((section, index) => {
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
    </>
  );
};
