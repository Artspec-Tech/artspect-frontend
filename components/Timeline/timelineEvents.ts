import { timelineItem } from "./timelineItemInterface";

const timelineEvents: timelineItem[] = [
  {
    title: "Orientation",
    date: "9 Jul",
    dotColor: "#888AC1",
    leftMargin: ['-0.4rem', '-0.4rem', '-0.7rem', '-1.138rem'],
    dateStart: new Date(2022, 6, 9),
    dateEnd: new Date(2022, 6, 9)
  },
  {
    title: "Art Fair",
    date: "9 Jul - 30 Jul",
    dotColor: "#BBDBF0",
    rightMargin: ['-0.8rem', '-1.7rem', '-2.3rem', '-3rem'],
    dateStart: new Date(2022, 6, 9),
    dateEnd: new Date(2022, 6, 30)
  },
  {
    title: "Workshop Period",
    date: "16 Jul - 24 Jul",
    dotColor: "#A3D390",
    leftMargin: ['-1rem', '-1.6rem', '-2.3rem', '-3rem'],
    rightMargin: ['-1rem', '-4.8rem', '-6.8rem', '-8.3rem'],
    dateStart: new Date(2022, 6, 16),
    dateEnd: new Date(2022, 6, 24)
  },
  {
    title: "Artwork Selection Announcement",
    date: "7 Aug",
    dotColor: "#F5D26C",
    leftMargin: ['-1rem', '-4.8rem', '-6.6rem', '-8.3rem'],
    rightMargin: ['-1rem', '-1.6rem', '-2.3rem', '-3rem'],
    dateStart: new Date(2022, 7, 7),
    dateEnd: new Date(2022, 7, 7)
  },
  {
    title: "Exhibition Period",
    date: "19 Aug - 26 Aug",
    dotColor: "#F17858",
    dateStart: new Date(2022, 7, 19),
    dateEnd: new Date(2022, 7, 26)
  },
];

export default timelineEvents;
