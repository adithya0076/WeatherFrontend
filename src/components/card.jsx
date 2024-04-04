import React from "react";

const Card = ({ searchData }) => {

  console.log("Data in card component",searchData);



  return (
    ( searchData &&
    <div>
      <img
        src={`assets/${searchData.weatherCondition}.png`}
        alt="Weather Icon"
        className="h-225 w-auto object-cover"
      />
      <div className="bg-cardOverlay p-4 rounded-lg ">
        <span className="text-textColor text-lg">Feels Like </span>
        <p className="font-bold text-textColor text-7xl float-right">
          {Math.round(searchData.temperature)}°c
        </p>
        <p className="font-bold text-textColor text-lg relative">
          {searchData.weatherCondition}
        </p>
        <p className="font-bold text-textColor text-lg relative">{searchData.district}</p>
        <hr />
        <p className="text-base font-medium text-textColor  relative">
        Pressure : {Math.round(searchData.pressure)}
        </p>
        <p className="text-base font-medium text-textColor  relative">
          Humidity : {Math.round(searchData.humidity)}
        </p>
      </div>
    </div>)
  );
};

export default Card;
