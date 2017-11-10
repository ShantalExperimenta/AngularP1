import { AngularP1Page } from './app.po';

describe('angular-p1 App', () => {
  let page: AngularP1Page;

  beforeEach(() => {
    page = new AngularP1Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
