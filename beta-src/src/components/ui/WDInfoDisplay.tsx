import * as React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableContainer,
} from "@mui/material";
import GameMode from "../../enums/GameMode";
import Season from "../../enums/Season";
import Ranking from "../../enums/Ranking";
import IntegerRange from "../../types/IntegerRange";
import GameType from "../../enums/GameType";
import WDLineClamp from "./WDLineClamp";
import Device from "../../enums/Device";

/**
 * game setting datas which would be passed to the component by parent component/ context/redux store
 */

interface WDInfoDisplayProps {
  device: Device;
  gameMode: GameMode;
  gameType: GameType;
  potNumber: IntegerRange<35, 665>;
  rank: Ranking;
  season: Season;
  title: string;
  year: number;
}

const tableCellStyles = {
  border: "none",
  fontSize: "0.7rem",
  p: "0 5px 0 0",
};

const WDInfoDisplay: React.FC<WDInfoDisplayProps> = function ({
  device,
  gameMode,
  gameType,
  potNumber,
  rank,
  season,
  title,
  year,
}) {
  const mobileLandscapeLayout =
    device === Device.MOBILE_LANDSCAPE || device === Device.MOBILE_LG_LANDSCAPE;
  const maximumWeight = mobileLandscapeLayout ? 250 : 345;
  return (
    <TableContainer>
      <Table
        aria-label="A table of game information"
        size="small"
        sx={{
          maxWidth: maximumWeight,
        }}
      >
        <TableHead>
          <TableRow>
            <TableCell
              sx={{
                border: "none",
                fontWeight: 600,
                p: "2px 5px 5px 0",
              }}
            >
              <WDLineClamp
                lineHeight="1.2rem"
                maxHeight="2.4rem"
                WebkitLineClamp={2}
              >
                {title}
              </WDLineClamp>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell sx={tableCellStyles}>
              Pot: {potNumber} - {season} {year}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell sx={tableCellStyles}>
              {gameType}, {gameMode}, {rank}
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default WDInfoDisplay;
