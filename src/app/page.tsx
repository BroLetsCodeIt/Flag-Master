"use client";
import CountryCard, { CountryProp } from "@/components/CountryCard";
import fetchCountries from "./action";
import { UseQueryResult, useQuery } from "react-query";

import SkeletonPage from "@/components/ui/Skeleton";
export default function Home() {
  const { isLoading ,isError, data } = useQuery<CountryProp[]>({
    queryKey: ["countries"],
    queryFn: () => {
      return fetchCountries();
    },
  });

  if (isLoading) {
    return (
      <div className="w-full h-screen flex items-center justify-evenly container mx-auto  gap-20 flex-wrap z-[-10] pt-[10rem] dark:invert">
        <SkeletonPage/>
      </div>
    );
  }

  if (isError) {
    return <div>{isError}</div>;
  }

  // console.log(data);
  return (
    <>
      <div className="container mx-auto w-full  flex pt-[5rem] h-screen flex-wrap gap-10 items-center justify-evenly">
        {data?.map((dt,i) => {
          return (
            <>
              
                <CountryCard
                  key={i}
                  {...dt}
                  // maps={dt.maps}
                  // flags={dt.flags}
                  // name={dt.name}
                  // tld={dt.tld}
                  // topLevelDomain={dt.topLevelDomain}
                  // population={dt.population}
                  
                  // languages={dt.languages}
                  // region={dt.region}
                  // subregion={dt.subregion}
                  // coatofArms={dt.coatofArms}
                />
              
            </>
          );
        })}
      </div>
    </>
  );
}
