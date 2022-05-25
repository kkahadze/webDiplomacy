/* eslint-disable no-bitwise */
import * as React from "react";
import { Box, Button, Stack } from "@mui/material";
import Territories from "../../../data/Territories";
import {
  gameApiSliceActions,
  gameOrder,
} from "../../../state/game/game-api-slice";
import { useAppDispatch, useAppSelector } from "../../../state/hooks";
import WDBuildUnitButtons from "./WDBuildUnitButtons";
import Territory from "../../../enums/map/variants/classic/Territory";

type Position = "left" | "right" | "top" | "bottom";

interface WDOrderTypeButtonProps {
  territory: Territory;
  unitSlotName: string;
  position: Position;
  text: string;
  clickHandler: () => void;
}

const WDFlyoutButton: React.FC<WDOrderTypeButtonProps> = function ({
  territory,
  unitSlotName,
  position,
  text,
  clickHandler,
}): React.ReactElement {
  const dispatch = useAppDispatch();
  const labelId = `${territory}-${unitSlotName}-unit-slot`;
  const label: SVGTextElement = document.getElementById(
    labelId,
  ) as unknown as SVGTextElement;
  const territoryElem: SVGSVGElement = document.getElementById(
    `${territory}-territory`,
  ) as unknown as SVGSVGElement;
  if (!label) return <Box />; // throw Error(labelId);
  const unitX =
    Number(territoryElem.getAttribute("x")) +
    Number(label.getAttribute("x")) +
    20;
  const unitY =
    Number(territoryElem.getAttribute("y")) +
    Number(label.getAttribute("y")) +
    20;

  const fontSize = 24;
  const rw = 55 + fontSize * text.length * 0.4;
  const rh = 45 + fontSize;
  const rBorder = 35;
  const rFill = "rgba(0,0,0,.7)";
  const groupStyle: React.CSSProperties = {
    cursor: "pointer",
  };
  let shiftX = 0;
  let shiftY = 0;
  const shiftOffset = 50;
  if (position === "top") {
    shiftY = -(rh / 2 + shiftOffset);
  } else if (position === "bottom") {
    shiftY = +(rh / 2 + shiftOffset);
  } else if (position === "left") {
    shiftX = -(rw / 2 + shiftOffset);
  } else if (position === "right") {
    shiftX = +(rw / 2 + shiftOffset);
  } else {
    throw Error(position);
  }
  const svgX = unitX - rw / 2 + shiftX;
  const svgY = unitY - rh / 2 + shiftY;

  /*
   * r is the circle radius
  cx and cy are offsets
  rx and ry and rounded edges
   */
  return (
    <svg
      x={svgX}
      y={svgY}
      filter="drop-shadow(10px 10px 18px #222222)"
      onClick={clickHandler}
    >
      <g style={groupStyle}>
        <rect
          x={0}
          y={0}
          fill="white"
          width={rw}
          height={rh}
          rx={rBorder}
          ry={rBorder}
        />
        <text
          x={rw / 2}
          y={rh / 2}
          textAnchor="middle"
          alignmentBaseline="middle"
          fontFamily="Roboto"
          fontSize={fontSize}
          fill="black"
        >
          {text}
        </text>
      </g>
    </svg>
  );
};

export default WDFlyoutButton;
