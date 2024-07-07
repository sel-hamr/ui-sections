"use client";

import Link, { LinkProps } from "next/link";
import { useRouter } from "next/navigation";

interface LinkAnimateType extends LinkProps {
  children: React.ReactNode;
  href: string;
}

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const LinkAnimate = ({ children, href, ...props }: LinkAnimateType) => {
  const router = useRouter();
  const handleClick = async (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const body = document.querySelector("body");
    body?.classList.add("page-transition");
    await sleep(500);
    router.push(href);
    await sleep(500);
    body?.classList.remove("page-transition");
  };
  return (
    <Link href={href} onClick={handleClick}>
      {children}
    </Link>
  );
};
