import { QueryClient } from "@tanstack/react-query";

export const query = new QueryClient();

export async function fetchFlags() {
  let url = "https://restcountries.com/v3.1/all";

  const response = await fetch(url);

  if (!response.ok) {
    const error = new Error("An error occurred while fetching the events");
    error.code = response.status;
    error.info = await response.json();
    throw error;
  }

  const allFlags = await response.json();

  return allFlags;
}

export async function fetchCountry(name) {
  let url = `https://restcountries.com/v3.1/name/${name}?fullText=true`;

  const response = await fetch(url);

  if (!response.ok) {
    const error = new Error("An error occurred while fetching the events");
    error.code = response.status;
    error.info = await response.json();
    throw error;
  }

  const Flag = await response.json();

  return Flag;
}
