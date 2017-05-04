export class Cosmetic {
  public id: number;
  public name: string;
  public category: Category;
  public ingredients: string;
  public producer: string;
  public price: number;

  // constructor (cosmetic: any) {
  //    if (cosmetic) {
  //      this.id = cosmetic.id;
  //      this.name = cosmetic.name;
  //      this.ingredients = cosmetic.ingredients;
  //      this.producer = cosmetic.producer;
  //      this.price = cosmetic.price;
  //      if (cosmetic.category) {
  //         this.category = cosmetic.category.map((cat) => new Category(cat));
  //      }
  //    }
  // }
  // constructor(id: number, name: string, category: Category) {
  //   this.id = id;
  //   this.name = name;
  //   this.category = category;
  // }
}

export class Category {
  public id: number;
  public categoryName: string;

  // constructor (category: any) {
  //    if (category) {
  //      this.id = category.id;
  //      this.categoryName = category.categoryName;
  //    }
  // }
  // constructor(id: number, categoryName: string) {
  //     this.id = id;
  //     this.categoryName = categoryName;
  // }
}

export class Review {
  public id: number;
  public review: string;
  public nickname: string;
  public cosmetic: Cosmetic;
  public raiting: number;

  // constructor(@Inject(forwardRef(() => Cosmetic)) cosmetic: Cosmetic) { this.cosmetic = cosmetic; }
  // constructor(id: number, review: string, nickname: string, cosmetic: Cosmetic) {
  //     this.id = id;
  //     this.review = review;
  //     this.review = review;
  //     this.cosmetic = cosmetic;
  // }
}

export const raitings = [1, 2, 3, 4, 5];
