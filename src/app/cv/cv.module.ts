import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CvComponent } from './cv.component';
import { NbToastrModule, NbToastrService } from '@nebular/theme';



@NgModule({

	imports: [
		CommonModule
	],
	declarations: [
		CvComponent
	],
	
	exports: [
		CvComponent
	]
})
export class CvModule { }
