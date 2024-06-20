import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about/about.component';
import { CardComponent } from './card/card.component';



@NgModule({
  declarations: [
    AboutComponent,
    CardComponent
  ],
  imports: [
    CommonModule
  ]
  
})
export class AboutUsModule { }
