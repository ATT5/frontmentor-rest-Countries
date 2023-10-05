import search from "../assets/search.svg";
import loadingGif from "../assets/loading.gif";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchFlags } from "../util/http";
import Flags from "../components/Flags";

const FlagsPage = () => {
  const [selectedRegion, setSelectedRegion] = useState("");
  const [filterData, setFilterData] = useState();

  const { data, isLoading, isError } = useQuery({
    queryKey: ["event"],
    queryFn: () => fetchFlags(),
  });

  const handleInput = (event) => {
    const value = event.target.value;
    const searchedCountry = data.filter((country) =>
      country.name.common.toLowerCase().includes(value.toLowerCase())
    );
    setFilterData(searchedCountry);
    console.log(filterData);
  };

  const handleRegionChange = (event) => {
    const value = event.target.value;
    if (value === "world") return setFilterData(data);
    const filter = data.filter((data) => data.region === value);
    setFilterData(filter);
    setSelectedRegion(value);
  };

  const handleFlag = (event) => {
    if (event) setFlag(event);
    setOpen((prev) => !prev);
  };

  return (
    <div className="w-full h-full  bg-veryLightGrayLightModeBackground dark:bg-veryDarkBlueBackground dark:text-white">
      <section className="font-nunito pt-10 w-full h-full">
        <section className=" w-full flex justify-between px-20 mb-10 max-sm:flex-col max-sm:px-4">
          <div className="bg-white flex gap-3 pl-5 pr-[15%] py-3 rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] max-sm:mb-10 dark:bg-darkBlue">
            <img src={search} alt="search" />
            <search fill="gray" />
            <input
              type="text"
              placeholder="Search for a country..."
              className="border-0 text-[12px] focus:border-none outline-none  dark:bg-darkBlue"
              onChange={handleInput}
            />
          </div>
          <select
            name="region"
            id="region"
            className="bg-white p-3  rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] max-sm:w-[50%]  dark:bg-darkBlue"
            onChange={handleRegionChange}
            value={selectedRegion}
          >
            <option value="" disabled hidden>
              Filter by Region
            </option>
            <option value="Africa">Africa</option>
            <option value="Americas">America</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
            <option value="world">World</option>
          </select>
        </section>
        {isLoading && (
          <div className="w-full h-screen flex justify-center items-start ">
            <img src={loadingGif} alt="loading" width={50} height={50} />
          </div>
        )}
        {isError && (
          <div className="w-full h-screen flex justify-center items-start ">
            {"Error Fetching Data :("}
          </div>
        )}
        {!isLoading && (
          <Flags data={!filterData ? data : filterData} onClick={handleFlag} />
        )}
        {filterData && filterData.length === 0 && (
          <p className="text-center h-screen">Could not find any country</p>
        )}
      </section>
    </div>
  );
};

export default FlagsPage;
