import React from "react";
import HeroProvider from "./assets/hero-provider";

export const SectionTwo = () => {
  return (
    <HeroProvider>
      <p
        className="text-lg md:text-sm text-center text-gray-300 w-[70%] max-w-80 md:max-w-none"
        id="description"
      >
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
      </p>
    </HeroProvider>
  );
};
