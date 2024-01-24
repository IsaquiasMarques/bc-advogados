import { Component, inject } from '@angular/core';
import { ScheduleService } from '@shared/services/header/schedule.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  private scheduleService: ScheduleService = inject(ScheduleService);

  toggleScheduleForm(){
    this.scheduleService.toggleModalForm();
  }

}
