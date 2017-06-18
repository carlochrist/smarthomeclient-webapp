import { SmarthomeclientWebappPage } from './app.po';

describe('smarthomeclient-webapp App', function() {
  let page: SmarthomeclientWebappPage;

  beforeEach(() => {
    page = new SmarthomeclientWebappPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
