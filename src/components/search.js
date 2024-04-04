import React, { useState } from 'react'
import { AsyncPaginate } from "react-select-async-paginate";
import { geoApiOptions, GEO_API_URL } from "../api";

const Search = ({ weatherData  }) => {


    const [cityName, setCityName] = useState(null);
    const [searchData, setSearchData] = useState(null);


    const handleOnSearchChange = async (searchData) => {
        const searchedData =  weatherData.find(district => district.district.toLowerCase() === searchData.toLowerCase());
        setSearchData(searchedData);
      }
 

      console.log("search data",searchData);



  return (
    <div >
         <div className="flex items-center max-w-md mx-auto bg-white rounded-md">
                <input
                    type="search"
                    className="w-full px-4 py-1 text-gray-800 rounded-full focus:outline-none"
                    placeholder="search"
                    value={searchData}
                    onChange={handleOnSearchChange}
                />
        </div>

    </div>
  )
}

export default Search