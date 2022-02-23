import eng from "./data/english.json";
import tag from "./data/tagalog.json";

export const getExamData = (
  examNumber: number,
  language: string,
  category: string
) => {
  switch (language) {
    case "english":
      return eng[category].slice(0, examNumber + 1);
    case "tagalog":
      return tag[category].slice(0, examNumber + 1);
    default:
      return [];
  }
};
