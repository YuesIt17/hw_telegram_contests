import { parseDateTimeToInt, prepareData } from "./prepareData";

const inputData = {
  "columns":[
    ["x",1542412800000,1542499200000,1542585600000,1542672000000,1542758400000,1542844800000,
        1542931200000,1543017600000,1543104000000,1543190400000,1543276800000,1543363200000],
    ["y0",37,20,32,39,32,35,19,65,36,62,113,69]
  ],
  "types":{
    "y0":"line",
    "x":"x"
  },
  "names":{
    "y0":"#0",
  },
  "colors":{
    "y0":"#3DC23F",
  }
};

describe('Prepare data for chart', () => {
  test('Check prepare data', () => {
    const outputData = {
      lines: [
        {
          color: "#3DC23F",
          name: "#0",
          points: "1,10 6,0",
          type: "line",
        },
      ],
      maxDataX: 11,
      maxDataY: 20,
    }
    expect(prepareData(inputData)).toEqual(outputData);
  });

  test('Check parse format date time to int', () => {
    expect(parseDateTimeToInt('1542412800000', 1)).toBe(6);
  });
});
