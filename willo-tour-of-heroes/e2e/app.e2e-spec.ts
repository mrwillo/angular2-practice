import { WilloTourOfHeroesPage } from './app.po';

describe('willo-tour-of-heroes App', () => {
  let page: WilloTourOfHeroesPage;

  beforeEach(() => {
    page = new WilloTourOfHeroesPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
