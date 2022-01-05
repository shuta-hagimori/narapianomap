import { ReactComponent as PinSvg } from "../svg/pin.svg";
import React, { useCallback, useState } from "react";

interface Props {
  Name: string;
  Latitude: number;
  Longitude: number;
}
export function Pin(props: Props) {
  const [mouseIn, setMouseIn] = useState<boolean>(false);
  const onMouseEnter = useCallback(() => {
    setMouseIn(true);
  }, []);
  const onMouseLeave = useCallback(() => {
    setTimeout(() => {
      setMouseIn(false);
    }, 1000);
  }, []);
  const onClick = useCallback(() => {}, []);
  return (
    <g
      style={{ cursor: "pointer" }}
      onMouseMove={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
    >
      <PinSvg
        width={mouseIn ? 30 : 20}
        height={mouseIn ? 30 : 20}
        x={(34.8183067007652 - props.Latitude) * 960 - (mouseIn ? 5 : 0)}
        y={(props.Longitude - 135.49296078988743) * 200 - (mouseIn ? 10 : 0)}
      />
      {mouseIn ? (
        <text
          x={(34.8183067007652 - props.Latitude) * 960 - (mouseIn ? 5 : 0)}
          y={
            30 +
            (props.Longitude - 135.49296078988743) * 200 -
            (mouseIn ? 10 : 0)
          }
        >
          {props.Name}
        </text>
      ) : undefined}
    </g>
  );
}
