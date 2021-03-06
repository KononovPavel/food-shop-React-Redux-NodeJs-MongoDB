import {ProductModel} from "./productModel";
import {UserModel} from "./userModel";

export interface OrderModel {
    products: Array<ProductModel>,
    date:string,
    owner: UserModel,
    status:string,
    delivery:string,
    payment:string,
    cost:number
}
