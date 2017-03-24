import { GameAngularPage } from './app.po';

describe('game-angular App', () => {
  let page: GameAngularPage;

  beforeEach(() => {
    page = new GameAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
