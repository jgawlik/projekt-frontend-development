export class Cosmetic {
  public id: number;
  public name: string;
  public ingredients: string;
  public producer: string;
  public price: number;
  public category: Category;
}

export class Category {
  public id: number;
  public categoryName: string;
}

export class Review {
  public id: number;
  public review: string;
  public nickname: string;
  public cosmetic: Cosmetic;
  public raiting: number;
}

export const raitings = [1, 2, 3, 4, 5];
