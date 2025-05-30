import { Component } from '@angular/core';
import { ButtonComponent, ButtonOptions } from '../button/button.component';
import { SUBSCRIBE_BUTTON_OPTIONS } from '../../../constants/button.constants';

@Component({
  selector: 'app-join-newsletter',
  standalone: true,
  imports: [
    ButtonComponent
  ],
  templateUrl: './join-newsletter.component.html',
  styleUrl: './join-newsletter.component.scss'
})
export class JoinNewsletterComponent {
  public readonly subscribeButtonOptions: ButtonOptions = SUBSCRIBE_BUTTON_OPTIONS;
}
