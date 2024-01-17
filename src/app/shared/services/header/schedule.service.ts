import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {

  showModalForm = signal(false);

  constructor() { }

  toggleModalForm(){
    this.showModalForm.update(value => !value);
  }

}
