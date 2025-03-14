import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoadingService } from './services/loading.service';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { AlertService } from './services/alert.service';
import { Alert, AlertComponent } from './components/alert/alert.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NavbarComponent,
    SpinnerComponent,
    CommonModule,
    AlertComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'blog-app-fe';
  private readonly loadingService = inject(LoadingService);
  private readonly alertService = inject(AlertService);
  loading: boolean = false;
  alerts$ = this.alertService.alerts$;

  ngOnInit(): void {
    this.loadingService.loading$.subscribe((value) => (this.loading = value));
  }

  closeAlert(alert: Alert) {
    this.alertService.close(alert);
  }
}
