import { CliStompPage } from './app.po';

describe('cli-stomp App', function() {
  let page: CliStompPage;

  beforeEach(() => {
    page = new CliStompPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
