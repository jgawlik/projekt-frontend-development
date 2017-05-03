import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Cosmetic, Category, Review } from './data-models';

export class MockedDatabaseService implements InMemoryDbService {
  createDb() {
    let categories = [
      {id: 1, categoryName: 'Kremy'},
      {id: 2, categoryName: 'Perfumy'},
      {id: 3, categoryName: 'Podkłady'},
    ];
    let cosmetics = [
      {id: 1, name: 'Krem pod oczy', ingredients: '', producer: 'Eveliner', price: '', category: {id: 1, categoryName: 'Kremy'} },
      {id: 2, name: 'Słodka wiosna', ingredients: '', producer: '', price: '', category: {id: 2, categoryName: 'Perfumy'}  },
      {id: 3, name: 'Podkład matujący', ingredients: '', producer: '', price: '', category: {id: 3, categoryName: 'Podkłady'}},
    ];

     let reviews = [
      {id: 1, review: 'Fajne', nickname: 'Maria', cosmetic: {
        id: 1, name: 'Krem pod oczy', ingredients: '', producer: 'Eveliner', price: '', category: {id: 1, categoryName: 'Kremy'} }},
      {id: 2, review: 'Nie podoba mi się', nickname: 'Ela', cosmetic: {
        id: 3, name: 'Podkład matujący', ingredients: '', producer: '', price: '', category: {id: 3, categoryName: 'Podkłady'
      }}},
    ];
    // return {categories, cosmetics};
    return {categories, cosmetics, reviews};
  }
}
