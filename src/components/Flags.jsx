import { Link } from "react-router-dom";

const Flags = ({ data, onClick }) => {
  return (
    <section className=" px-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 lg:gap-20  max-sm:px-14 h-full min-h-screen pb-8 ">
      {data.map((country) => (
        <Link key={country.name.official} to={`/${country.name.common}`}>
          <div
            className="w-[100%] pb-7 bg-white rounded-md shadow-[0px_0px_4px_0px_#00000024] max-h-[300px] dark:bg-darkBlue cursor-pointer"
            onClick={() => onClick(country)}
          >
            <img
              src={country.flags.svg}
              alt={country.name.official}
              className="w-full h-[130px] rounded-t-md object-cover"
            />
            <div className="w-full px-5">
              <h2 className="font-bold my-4">{country.name.common}</h2>
              <p>
                <span className="font-bold">Population: </span>
                {country.population}
              </p>
              <p>
                <span className="font-bold">Region: </span>
                {country.region}
              </p>
              <p>
                <span className="font-bold">Capital: </span>
                {country.capital}
              </p>
            </div>
          </div>
        </Link>
      ))}
    </section>
  );
};

export default Flags;
