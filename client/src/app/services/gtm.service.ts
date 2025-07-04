import { Injectable } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

declare global {
  interface Window {
    dataLayer: any[];
  }
}

@Injectable({
  providedIn: 'root'
})
export class GtmService {

  constructor(private router: Router) {
    this.initRouteTracking();
  }

  /**
   * Инициализация отслеживания маршрутов
   */
  private initRouteTracking(): void {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      this.pushPageView(event.urlAfterRedirects);
    });
  }

  /**
   * Отправка события просмотра страницы
   */
  pushPageView(url: string): void {
    if (typeof window !== 'undefined' && window.dataLayer) {
      window.dataLayer.push({
        event: 'page_view',
        page_path: url,
        page_title: document.title
      });
    }
  }

  /**
   * Отправка пользовательского события
   */
  pushEvent(eventName: string, eventData: any = {}): void {
    if (typeof window !== 'undefined' && window.dataLayer) {
      window.dataLayer.push({
        event: eventName,
        ...eventData
      });
    }
  }

  /**
   * Отправка события клика по кнопке
   */
  pushButtonClick(buttonName: string, buttonLocation: string = ''): void {
    this.pushEvent('button_click', {
      button_name: buttonName,
      button_location: buttonLocation
    });
  }

  /**
   * Отправка события отправки формы
   */
  pushFormSubmit(formName: string, formData: any = {}): void {
    this.pushEvent('form_submit', {
      form_name: formName,
      ...formData
    });
  }

  /**
   * Отправка события загрузки файла
   */
  pushFileDownload(fileName: string, fileType: string = ''): void {
    this.pushEvent('file_download', {
      file_name: fileName,
      file_type: fileType
    });
  }
} 