export interface Dish{
    disheid: number;
    description: string;
    name: string;
    dishepicture: DishPicture[];
    amount: number;
    dishecategory: DishCategorie;
    status: string;
}

interface DishPicture{
  dishepictureid: number;
  url: string;
  name: string;
}

export interface DishCategorie{
  dishecategoryid: number;
  image: string;
  name: string;
}
