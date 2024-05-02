import { useQuery } from "react-query";
import findAllLaborsService from "../services/findAllLaborsService";

export const useFindAllLaborsQuery = () =>
  useQuery({
    queryFn: findAllLaborsService,
    queryKey: ["labors-interview"],
    staleTime: 3000,
  });
