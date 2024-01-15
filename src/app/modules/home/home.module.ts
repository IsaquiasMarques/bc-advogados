import { NgModule } from '@angular/core';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './components/container/home.component';
import { SharedModule } from '@shared/shared.module';
import { HeroComponent } from './components/views/hero/hero.component';
import { AboutComponent } from './components/views/about/about.component';
import { AreasComponent } from './components/views/areas/areas.component';
import { ResponsabilityComponent } from './components/views/responsability/responsability.component';
import { ContactsComponent } from './components/views/contacts/contacts.component';


@NgModule({
  declarations: [
    HomeComponent,
    HeroComponent,
    AboutComponent,
    AreasComponent,
    ResponsabilityComponent,
    ContactsComponent
  ],
  imports: [
    SharedModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
