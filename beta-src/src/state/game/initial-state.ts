import { GameState } from "../interfaces/GameState";

const initialState: GameState = {
  apiStatus: "idle",
  error: null,
  overview: {
    anon: "Yes",
    date: "Spring, 1901",
    drawType: "draw-votes-public",
    excusedMissedTurns: 4,
    gameOver: "No",
    members: [
      {
        country: "",
        countryID: 0,
        id: 855,
        online: false,
        userID: 6,
      },
      {
        country: "",
        countryID: 0,
        id: 856,
        online: true,
        userID: 5,
      },
    ],
    minimumBet: 5,
    name: "",
    pauseTimeRemaining: null,
    phase: "",
    phaseMinutes: 14400,
    playerTypes: "",
    pot: 10,
    potType: "",
    processStatus: "",
    processTime: null,
    startTime: 0,
    turn: 0,
    variant: {
      id: 1,
      mapID: 1,
      name: "Classic",
      fullName: "Classic",
      description: "The standard Diplomacy map of Europe.",
      author: "Avalon Hill",
      countries: [
        "England",
        "France",
        "Italy",
        "Germany",
        "Austria",
        "Turkey",
        "Russia",
      ],
      variantClasses: {
        drawMap: "Classic",
        adjudicatorPreGame: "Classic",
      },
      codeVersion: null,
      cacheVersion: null,
      coastParentIDByChildID: {
        "76": 8,
        "77": 8,
        "78": 32,
        "79": 32,
        "80": 20,
        "81": 20,
      },
      coastChildIDsByParentID: {
        "8": [76, 77],
        "32": [78, 79],
        "20": [80, 81],
      },
      terrIDByName: null,
      supplyCenterCount: 34,
      supplyCenterTarget: 18,
    },
    variantID: 1,
  },
  status: {
    gameID: 2,
    countryID: 0,
    variantID: 1,
    potType: "",
    turn: 0,
    phase: "",
    gameOver: "No",
    pressType: "",
    phases: [],
    standoffs: [],
    occupiedFrom: [],
    votes: null,
    orderStatus: "",
    status: "",
  },
};

export default initialState;
