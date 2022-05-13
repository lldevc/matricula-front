import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo(ruta: string) {
    return browser.get(browser.baseUrl + ruta) as Promise<any>;
  }

  getTitleText() {
    return element(by.css('app-root h1')).getText() as Promise<string>;
  }

   getTextOfElementById(id: string) {
    return  element(by.id(id)).getText() as Promise<string>;
  }

   getTextOfElement(T: string) {
    return element(by.css(T)).getText() as Promise<string>;
  }
}
