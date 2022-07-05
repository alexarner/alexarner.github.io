import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule, NbLayoutModule, NbCardModule, NbAccordionModule, NbToastrService, NbToastrModule, NbTabsetModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { CvModule } from './cv/cv.module';
import { PasswordPageComponent } from './password-page/password-page.component';
import { TimeFormatPipe } from './time-format.pipe';


@NgModule({
	declarations: [
		AppComponent,
  		PasswordPageComponent,
		TimeFormatPipe
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		NbThemeModule.forRoot({ name: 'dark' }),
		NbLayoutModule,
		NbEvaIconsModule,
		NbCardModule,
		NbAccordionModule,
		NbToastrModule,
		NbTabsetModule,
		CvModule,
		NbToastrModule
		
	],
	providers: [
		
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
