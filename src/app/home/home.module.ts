import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { WelcomeCardComponent } from './components/welcome-card/welcome-card.component';
import { CardComponent } from '../shared/components/card/card.component';
import { HomeRoutingModule } from './home-routing.module';



@NgModule({
  declarations: [
    HomePageComponent,
    WelcomeCardComponent
  ],
  imports: [
    CommonModule,
    CardComponent,
    HomeRoutingModule
  ]
})
export class HomeModule { }
