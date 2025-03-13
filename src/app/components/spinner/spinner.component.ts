import { Component } from '@angular/core';
import { AnimationOptions, LottieComponent } from 'ngx-lottie';

@Component({
  selector: 'app-spinner',
  standalone: true,
  imports: [LottieComponent],
  templateUrl: './spinner.component.html',
  styleUrl: './spinner.component.scss',
})
export class SpinnerComponent {
  animationOptions: AnimationOptions = {
    path: 'assets/lotties/spinner.json',
    loop: true,
    autoplay: true,
  };
}
