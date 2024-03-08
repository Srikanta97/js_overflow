import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getTimestamp = (dateString: Date): string => {
  const currentDate = new Date();
  const inputDate = new Date(dateString);

  const timeDifference = currentDate.getTime() - inputDate.getTime();
  const seconds = Math.floor(timeDifference / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const weeks = Math.floor(days / 7);
  const months = Math.floor(days / 30);
  const years = Math.floor(months / 12);

  if (seconds < 60) {
    return seconds + ` ${seconds === 1 ? "second" : "seconds"} ago`;
  } else if (minutes < 60) {
    return minutes + ` ${minutes === 1 ? "minute" : "minutes"} ago`;
  } else if (hours < 24) {
    return hours + ` ${hours === 1 ? "hour" : "hours"} ago`;
  } else if (days < 7) {
    return days + ` ${days === 1 ? "day" : "days"} ago`;
  } else if (weeks < 5) {
    return weeks + ` ${weeks === 1 ? "week" : "weeks"} ago`;
  } else if (months < 12) {
    return months + ` ${months === 1 ? "month" : "months"} ago`;
  } else {
    return years + ` ${years === 1 ? "year" : "years"} ago`;
  }
};

export const formatNumber = (value: number, decimals = 1): string => {
  if (value === 0) return "0";

  const lookup = [
    { value: 1e9, symbol: "B" }, // Billions
    { value: 1e6, symbol: "M" }, // Millions
    { value: 1e3, symbol: "K" }, // Thousands
    { value: 1, symbol: "" },
  ];

  const absNumber = Math.abs(value);
  const tier = lookup.find((item) => absNumber >= item.value);

  if (!tier) return value.toString();

  const scaledNumber =
    absNumber < 1000 ? value : (absNumber / tier.value).toFixed(decimals);
  return `${scaledNumber}${tier.symbol}`;
};
