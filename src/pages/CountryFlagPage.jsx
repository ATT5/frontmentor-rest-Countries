import { useParams } from "react-router-dom";
import { fetchCountry } from "../util/http";
import { useQuery } from "@tanstack/react-query";
import Country from "../components/Country";
import loadingGif from "../assets/loading.gif";
const CountryFlagPage = () => {
  const params = useParams();

  const { data, isLoading, isError } = useQuery({
    queryKey: ["event"],
    queryFn: () => fetchCountry(params.flagId),
  });

  return (
    <div className=" dark:bg-veryDarkBlueBackground dark:text-white">
      {!isLoading && <Country data={data} />}
      {isLoading && (
        <div className="w-full h-screen flex justify-center items-start ">
          <img src={loadingGif} alt="loading" width={50} height={50} />
        </div>
      )}
      {isError && <p>{"Something went wrong! :("}</p>}
    </div>
  );
};

export default CountryFlagPage;
