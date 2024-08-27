import { bootstrapApplication } from '@angular/platform-browser';
import { ReactiveFormComponent } from './app/reactive-form/reactive-form.component';
import { config } from './app/app.config.server';

const bootstrap = () => bootstrapApplication(ReactiveFormComponent, config);

export default bootstrap;
