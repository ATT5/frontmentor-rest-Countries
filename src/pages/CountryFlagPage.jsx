import { describe, test } from "vitest";
import { render } from "@testing-library/react";
import { MemoryRouter, Routes } from "react-router-dom";
import { QueryClientProvider } from "@tanstack/react-query";
import CountryFlagPage from "./CountryFlagPage";
import { query } from "../util/http";

// Manually mock the fetchCountry function
jest.mock("../util/http", () => ({
  fetchCountry: async () => "mexico",
}));

describe("CountryFlagPage", () => {
  test("renders without errors", async () => {
    const { getByText } = render(
      <MemoryRouter initialEntries={["/country-id"]} initialIndex={0}>
        <QueryClientProvider client={query}>
          <Routes>
            <Routes element={<CountryFlagPage />} />
          </Routes>
        </QueryClientProvider>
      </MemoryRouter>
    );

    // Your test assertions go here
    const pageTitle = getByText("CountryFlagPage Title");
    expect(pageTitle).toBeInTheDocument();
  });
});
