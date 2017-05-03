import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Cosmetic, Category, Review } from './data-models';

export class MockedDatabaseService implements InMemoryDbService {
  createDb() {
    let categories: Category[] = [
      {id: 1, categoryName: 'Kremy'},
      {id: 2, categoryName: 'Perfumy'},
      {id: 3, categoryName: 'Podkłady'},
    ];
    let cosmetics: Cosmetic[] = [
      {id: 1, name: 'Krem pod oczy', ingredients: '', producer: 'Eveliner', price: 12.50, category: categories[0] },
      {id: 2, name: 'Słodka wiosna', ingredients: '', producer: '', price: 150, category: categories[1] },
      {id: 3, name: 'Podkład matujący', ingredients: '', producer: '', price: 55.13, category: categories[2]},
    ];
    let reviews: Review[] = [
      {id: 1, review: 'Fajne', nickname: 'Maria', cosmetic: cosmetics[0]},
      {id: 2, review: 'Nie podoba mi się', nickname: 'Ela', cosmetic: cosmetics[2]},
    ];
    return {categories, cosmetics, reviews};
  }
}
