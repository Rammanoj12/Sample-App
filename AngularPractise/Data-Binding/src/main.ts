import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { ReactiveFormComponent } from './app/reactive-form/reactive-form.component';

bootstrapApplication(ReactiveFormComponent, appConfig)
  .catch((err) => console.error(err));
