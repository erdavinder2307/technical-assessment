import { Component, Input } from '@angular/core';
import { faStar, faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-page-title',
  templateUrl: './page-title.component.html',
})
export class PageTitleComponent {

  faStar = faStar;
  faPlus = faPlus;

  @Input() heading: any;
  @Input() subheading: any;
  @Input() icon: any;

}
