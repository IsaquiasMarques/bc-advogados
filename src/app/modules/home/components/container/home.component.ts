import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  @HostListener('window:scroll', ['$event']) scrollEvent(){

    let windowHeight = window.innerHeight;
    let sliderLeft = document.querySelectorAll('div.slide-from-left') as NodeListOf<HTMLElement> || null;
    let sliderRight = document.querySelectorAll('div.slide-from-right') as NodeListOf<HTMLElement> || null;
    
    let sliderBottom = document.querySelectorAll('div.slide-from-bottom') as NodeListOf<HTMLElement> || null;
    
    sliderLeft.forEach(element => {
      let revealTop = element.getBoundingClientRect().top;
      let revealPoint = 150;

      if(revealTop < (windowHeight - revealPoint)){
        element.classList.add('active');
      }else{
        element.classList.remove('active');
      }

    });

    sliderRight.forEach(element => {
      let revealTop = element.getBoundingClientRect().top;
      let revealPoint = 150;

      if(revealTop < (windowHeight - revealPoint)){
        element.classList.add('active');
      }else{
        element.classList.remove('active');
      }
    });

    sliderBottom.forEach(element => {
      let revealTop = element.getBoundingClientRect().top;
      let revealPoint = 150 + 0;

      if(revealTop < (windowHeight - revealPoint)){
        element.classList.add('active');
      }else{
        element.classList.remove('active');
      }
    });

  }

}
