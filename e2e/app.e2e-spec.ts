import { ProjektFrontendDevelopmentPage } from './app.po';

describe('projekt-frontend-development App', () => {
  let page: ProjektFrontendDevelopmentPage;

  beforeEach(() => {
    page = new ProjektFrontendDevelopmentPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
