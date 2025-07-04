import {ChangeDetectionStrategy, Component} from '@angular/core';
import {GtmService} from '../../../services/gtm.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactComponent {
  lat = 55.762105;
  lng = 37.555265;

  constructor(private gtmService: GtmService) {}

  onEmailClick() {
    this.gtmService.pushEvent('email_click', {
      email_type: 'contact',
      email_address: 'welcome@thesaurus-trainings.ru',
      page_location: 'contact_page'
    });
  }
}
