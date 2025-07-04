import { Directive, ElementRef, Input, HostListener } from '@angular/core';
import { GtmService } from '../services/gtm.service';

@Directive({
  selector: '[appGtmClick]'
})
export class GtmClickDirective {

  @Input() gtmEventName: string = 'button_click';
  @Input() gtmEventData: any = {};

  constructor(
    private el: ElementRef,
    private gtmService: GtmService
  ) {}

  @HostListener('click', ['$event'])
  onClick(event: Event): void {
    const element = this.el.nativeElement;
    const buttonText = element.textContent?.trim() || element.innerText?.trim() || '';
    const buttonName = this.gtmEventData.button_name || buttonText || 'unknown_button';
    
    this.gtmService.pushEvent(this.gtmEventName, {
      button_name: buttonName,
      button_location: this.gtmEventData.button_location || this.getButtonLocation(),
      ...this.gtmEventData
    });
  }

  private getButtonLocation(): string {
    // Определяем расположение кнопки на основе DOM структуры
    const element = this.el.nativeElement;
    
    // Проверяем, есть ли родительский контейнер с классом
    const parent = element.closest('[class*="page"], [class*="component"], [class*="section"]');
    if (parent) {
      const classes = Array.from(parent.classList) as string[];
      const locationClass = classes.find((cls: string) => 
        cls.includes('page') || cls.includes('component') || cls.includes('section')
      );
      return locationClass || 'unknown_location';
    }
    
    return 'unknown_location';
  }
} 