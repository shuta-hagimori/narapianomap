import React from "react";
import WhiteMap from "../img/WhiteMap.png";
import { Pin } from "./Pin";

type pin = {
  Name: string;
  Latitude: number;
  Longitude: number;
};

export function Map() {
  const list = [
    {
      Name: "郡山城ホール",
      Latitude: 34.68526606124521,
      Longitude: 135.83461628469001,
    },
    {
      Name: "奈良公園バスターミナル",
      Latitude: 34.652083653467095,
      Longitude: 135.78210688457872,
    },
  ];
  return (
    <div
      style={{
        margin: "0 auto",
        width: 350,
        height: 350,
        position: "relative",
      }}
    >
      <img
        style={{ position: "absolute", top: 0, left: 0 }}
        src={WhiteMap}
        width={350}
        height={495.486935866983373}
      />
      <svg
        width={350}
        height={495.486935866983373}
        style={{ position: "absolute", top: 0, left: 0 }}
      >
        {list.map((u) => (
          <Pin
            Name={u.Name}
            Latitude={u.Latitude}
            Longitude={u.Longitude}
            key={`${u.Name} ${u.Latitude}`}
          />
        ))}
      </svg>
    </div>
  );
}
