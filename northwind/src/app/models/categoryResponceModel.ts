import { Category } from "./category";
import { ResponseModel } from "./responseModel";

export default interface CategoryResponceModel extends ResponseModel{
    data: Category[]
}