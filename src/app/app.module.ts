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

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    NameEditorComponent,
    ProfileEditorComponent,
    HeroFormComponent,
    HeroFormTemplateComponent,
    ForbiddenNameDirective,
    IdentityRevealedValidatorDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }