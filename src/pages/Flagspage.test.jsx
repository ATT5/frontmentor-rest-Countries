import { expect, describe, test } from "vitest";
import { render, screen } from "@testing-library/react";
import FlagsPage from "./FlagsPage";
import { QueryClientProvider } from "@tanstack/react-query";
import { query } from "../util/http";

describe("flags page ", () => {
  test("render page", async () => {
    render(
      <QueryClientProvider client={query}>
        <FlagsPage />
      </QueryClientProvider>
    );

    const region = await screen.getByText("Filter by Region");

    expect(region).toBeDefined();
  });
});
