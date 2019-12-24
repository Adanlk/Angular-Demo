import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './components/form/form.component';

import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { NameEditorComponent } from './name-editor/name-editor.component';
import { ProfileEditorComponent } from './profile-editor/profile-editor.component';
import { HeroFormComponent } from './hero-form/hero-form.component';
import { HeroFormTemplateComponent } from './hero-form-template/hero-form-template.component';
import { ForbiddenNameDirective } from './forbidden-name.directive';
import { IdentityRevealedValidatorDirective } from './identity-revealed.directive';
import { HeroBioComponent } from './hero-bio/hero-bio.component';
import {HeroBiosAndContactsComponent, HeroBiosComponent} from './hero-bios/hero-bios.component';
import { HeroOfTheMonthComponent } from './hero-of-the-month/hero-of-the-month.component';
import { HeroContactComponent } from './hero-contact/hero-contact.component';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    NameEditorComponent,
    ProfileEditorComponent,
    HeroFormComponent,
    HeroFormTemplateComponent,
    ForbiddenNameDirective,
    IdentityRevealedValidatorDirective,
    HeroBioComponent,
    HeroBiosComponent,
    HeroOfTheMonthComponent,
    HeroContactComponent,
    HeroBiosAndContactsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  /* 依赖注入 */
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
