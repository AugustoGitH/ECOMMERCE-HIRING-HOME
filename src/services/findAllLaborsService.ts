import laborsData from "../../mock/labors.json";
import { Labor } from "../types/labor";
const findAllLaborsService = async () => {
  const labors: Labor[] = JSON.parse(JSON.stringify(laborsData));
  await new Promise((res) => setTimeout(res, 400));
  return labors;
};

export default findAllLaborsService;
