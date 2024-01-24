import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { TbMapShare } from "react-icons/tb";
import { Span } from "next/dist/trace";

export interface Name {
  common: string;
  official: string;
  nativeName: string;
}

export interface NativeName {
  [key: string]: {
    offical: string;
    common: string;
  };
}
 
export interface Currency {
  name: string;
  symbol: string;
}

export interface Maps {
  googleMaps: string;
  openStreetMaps: string;
}

export interface Flags {
  png: string;
  svg: string;
}

export interface CoatofArms {
  png: string;
  svg: string;
}

export interface CountryProp {
  name: Name;
  tld: string[];
  topLevelDomain: string[];
  population: number;

  currencies?: {
    [key: string]: Currency;
  };

  languages: {
    [key: string]: string;
  };

  region: string;
  subregion: string;
  maps: Maps;
  captial?: string[];
  flags: Flags;
  coatofArms: CoatofArms;
}

function CountryCard(props: CountryProp) {
 
  
  return (
    <>
      <div className=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 max-w-sm overflow-hidden min-h-[22rem] w-[30rem]">
        <Link href={`/${props.name.common}`}>
          <CountryImage src={props.flags.svg} />
        </Link>
        <div className="p-5 flex flex-col items-start justify-between">
          <Link href={`/${props.name.common}`}>
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {props.name.common}
            </h5>
          </Link>
          <p className="mb-3 font-semibold text-gray-800 dark:text-gray-400 ">
            {props.name.official}
          </p>
          <div className="mb-3">
            <span className="font-semibold">Population : </span>
            <span>{new Intl.NumberFormat().format(props.population)}</span>
          </div>
          <div className="mb-3">
            <span className="font-semibold">Languages : </span>
            {props.languages && 
               <span>{Object.values(props.languages).join(', ')}</span>
            }
            
          </div>
          <div className="mb-3">
            <span className="font-semibold">Region : </span>
            <span>{props.region}</span>
          </div>
          <div className="flex items-center justify-between w-full">
            <Link
              href={`/${props.name.common}`}
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Learn more
              <svg
                className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </Link>
             
            <Link href={`${props.maps.googleMaps}`} target="_blank" className="flex">
                <span>Map -</span><TbMapShare className="font-bold" size={25}/>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default CountryCard;

function CountryImage({ src }: { src: string }) {
  return (
    // <div className=''>
    <Image
      src={src}
      alt="flag-image"
      width={150}
      height={150}
      className="rounded-t-lg w-full hover:scale-[1.1] transition-all border-b-2 object-cover object-center"
    />
    // </div>
  );
}


