import arrowBack from "../assets/arrow-back.svg";
import { Link } from "react-router-dom";

const Country = ({ data }) => {
  const flag = data[0];
  return (
    <section className="sm:mx-20 min-h-screen h-full mx-7 pt-11">
      <Link to="/">
        <button className="shadow-[0_3px_10px_rgb(0,0,0,0.2)] flex gap-2 px-6 py-1 justify-center  mb-16 rounded-md  dark:bg-darkBlue dark:text-white">
          <img src={arrowBack} alt="arrow back" width={20} height={15} /> Back
        </button>
      </Link>
      <section className="flex justify-around gap-10 flex-col md:flex-row">
        <img
          src={flag.flags.svg}
          alt="flag"
          className="sm:w-[40%] sm:h-[20%]"
        />
        <main>
          <h2 className="font-bold text-3xl w-full mb-7">{flag.name.common}</h2>
          <div className="flex gap-10 max-lg:flex-col">
            <div>
              <p>
                <span className="font-bold leading-10">Native Name: </span>
                {Object.values(flag.name.nativeName)[0].official}
              </p>
              <p>
                <span className="font-bold leading-7">Population: </span>
                {flag.population}
              </p>
              <p>
                <span className="font-bold leading-7">Region: </span>
                {flag.region}
              </p>
              <p>
                <span className="font-bold leading-7">Sub Region: </span>
                {flag.subregion}
              </p>
              <p>
                <span className="font-bold leading-7">Capital: </span>
                {flag.capital}
              </p>
            </div>
            <div>
              <p>
                <span className="font-bold leading-7">Top Level Domain: </span>
                {flag.tld[0]}
              </p>
              <p>
                <span className="font-bold leading-7">Currencies: </span>
                {Object.values(flag.currencies)[0].name}
              </p>
              <p>
                <span className="font-bold leading-7">Languages: </span>
                {Object.values(flag.languages).join(", ")}
              </p>
            </div>
          </div>

          {flag.borders && (
            <div className="mt-10 flex  gap-4 items-center sm:w-full">
              <span className="font-bold">Border Countrys:</span>
              {flag.borders.map((border) => (
                <p className="font-normal rounded-lg  shadow-[0_3px_10px_rgb(0,0,0,0.2)] py-1 px-3 dark:bg-darkBlue">
                  {border}
                </p>
              ))}
            </div>
          )}
          {!flag.borders && (
            <p className="rounded-lg mt-10 lg:w-[30%]  text-center shadow-[0_3px_10px_rgb(0,0,0,0.2)] py-1 px-3 dark:bg-darkBlue">
              No Borders
            </p>
          )}
        </main>
      </section>
    </section>
  );
};

export default Country;
