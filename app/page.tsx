import { fetchCars } from "@utils";
import { HomeProps } from "@types";
import { fuels, yearsOfProduction } from "constants";
import { CarCard, ShowMore, SearchBar, CustomFilter, Hero} from "@comonents";
import { manufacturers } from "./constants";

export default async function Home({ searchParams }: HomeProps) {
  const allCars = await fetchCars({
    manufacturers: searchParams.manufacture || "",
    year: searchParams.year || 2024,
    fuel: searchParams.fuel || "",
    limit: searchParams.limit || 10,
    model: searchParams.model || "",
  }),

  const isDataEmpty = !Array.isArray(allCars)
}