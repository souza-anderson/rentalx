import { CategoriesRepository } from "../../repositories/implementations/CategoriesRespository";
import { ListCategoriesController } from "./ListCategoriesController";
import { ListCategoriesUseCase } from "./ListCategoriesUseCase";

const categoriesRepository = CategoriesRepository.getInstance();
const listCategoriesUseCase = new ListCategoriesUseCase(categoriesRepository);
const listCategoriesContoller = new ListCategoriesController(
  listCategoriesUseCase
);

export { listCategoriesContoller };
