import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function pagination(dataLength: number, currentPage: number) {
  const dataPerPage = 3;
  const totalPages = Math.ceil(dataLength / dataPerPage);
  const start = (currentPage - 1) * dataPerPage;
  const end = start + dataPerPage;
  return { start, end, totalPages };
}
