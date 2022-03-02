import eng from "./data/english.json";
import tag from "./data/tagalog.json";

export const getExamData = (
  examNumber: number,
  language: string,
  category: string
) => {
  switch (language) {
    case "english":
      return sortArr(eng[category].slice(0, examNumber + 1));
    case "tagalog":
      return sortArr(tag[category].slice(0, examNumber + 1));
    default:
      return [];
  }
};

const sortArr = (arr: any[]) => arr.sort((a, b) => 0.5 - Math.random());
