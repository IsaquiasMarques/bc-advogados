import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {

  showModalForm = signal(false);
  hideModalAfterTime = signal(true);
  isFirstLoad = signal(true);

  constructor(
    @Inject(PLATFORM_ID) private platformId: any
  ) { }

  openModal(){
    this.showModalForm.update(value => true);
  }

  closeModal(){
    this.showModalForm.update(value => false);
  }

  toggleModalForm(){
    this.hideModalAfterTime.update(val => true);
    this.isFirstLoad.update(val => false);
    this.showModalForm.update(value => !value);
    // console.log(this.showModalForm());
    if(!this.showModalForm()){
      setTimeout(() => {
          console.log("É suposto desaparecer agora")
          this.hideModalAfterTime.update(val => false);
      }, 1000);
    }

    this.cutPageHeight();

  }

  cutPageHeight(){

    if(isPlatformBrowser(this.platformId)){
      let body = document.querySelector('body') as HTMLElement;
      
      if(this.showModalForm()){
        body.style.height = '90vh';
        body.style.overflow = 'hidden';
      }else{
        body.style.height = 'auto';
        body.style.overflow = 'auto';
      }

    }

  }

}
