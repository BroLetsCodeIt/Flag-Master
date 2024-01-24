"use client";
import CountryCard, { CountryProp } from "@/components/CountryCard";
import fetchCountries from "./action";
import { UseQueryResult, useQuery } from "react-query";
import { FaFilter } from "react-icons/fa";
import SkeletonPage from "@/components/ui/Skeleton";
import SearchField from "@/components/SearchField";
import { useEffect, useState } from "react";
export default function Home() {

  const [searchTerm , setSearchTerm] = useState("");
  const [filterData , setFilterData ] = useState<CountryProp[] | undefined>([]);
  const { isLoading, isError, data:CountryData } = useQuery<CountryProp[]>({
    queryKey: ["countries"],
    queryFn: () => {
      return fetchCountries();
    },
  });

 

   useEffect(()=>{
    let data = CountryData ; 
    if(searchTerm){
      data = data?.filter((item)=> item.name.common.toLowerCase().includes(searchTerm.trim().toLowerCase()));
    }
 
    setFilterData(data);
   },[searchTerm , CountryData])

  if (isLoading) {
    return (
      <div className="w-full h-screen flex items-center justify-evenly container mx-auto  gap-20 flex-wrap z-[-10] pt-[10rem] dark:invert">
        <SkeletonPage />
      </div>
    );
  }

  if (isError) {
    return <div>{isError}</div>;
  }

 

  function handleOnChangeSearch(e:React.ChangeEvent<HTMLInputElement>) {
    setSearchTerm(e.target.value);
  } 


 
  console.log(filterData);
  // console.log(data);
  return (
    <>
      <section className="pt-[10rem] container mx-auto flex items-center justify-between px-[4.7rem]  gap-3 w-full">
        {/* search bar */}

         <SearchField value={searchTerm} onChange={handleOnChangeSearch}/>

        {/* filter  */}
       <div className="flex w-[30%] items-center gap-2 justify-center">
       <label htmlFor="countries" className="block mb-2  font-medium text-gray-900 dark:text-white "><FaFilter  size={30}/></label>
        <select
          id="countries"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option selected>Select</option>
          <option value="US">Region</option>
          <option value="CA">Country</option>
          <option value="FR">Captial</option>
          <option value="DE">Germany</option>
        </select>
        </div>
      </section>

      <div className="container mx-auto w-full  flex pt-[5rem] h-screen flex-wrap gap-10 items-center justify-evenly">
        {filterData?.map((dt, i) => {
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
