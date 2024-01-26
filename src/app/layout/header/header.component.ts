import { isPlatformBrowser } from '@angular/common';
import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, EventEmitter, Inject, OnInit, Output, PLATFORM_ID, ViewChild, inject, signal } from '@angular/core';
import { scrollToElement } from '@shared/helpers/scoll/scroller';
import { ScheduleService } from '@shared/services/header/schedule.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit, AfterViewInit {
  public scheduleService = inject(ScheduleService);
  @Inject(PLATFORM_ID) private platformId: any

  @ViewChild('headerElement') headerElement!: ElementRef<HTMLElement>;
  @ViewChild('headerContainerElementRef') headerContainerElementRef!: ElementRef<HTMLElement>;

  headerMaxHeightHiddenMenu = signal(85);
  headerMaxHeightShowingMenu = signal(0);
  showMenu = signal(false);

  @Output() headerElementClientHeight: EventEmitter<number> = new EventEmitter<number>();
  
  ngOnInit(): void {
    
  }

  ngAfterViewInit(): void {
    this.headerElementClientHeight.emit(this.headerContainerElementRef.nativeElement.clientHeight);
    this.headerMaxHeightHiddenMenu.update(value => this.headerContainerElementRef.nativeElement.clientHeight);

    let totalChildrensHeight: number = 0;

    for (let index = 0; index < this.headerElement.nativeElement.children.length; index++) {
      totalChildrensHeight += this.headerElement.nativeElement.children[index].clientHeight;
    }

    this.headerMaxHeightShowingMenu.update(val => totalChildrensHeight);

  }

  screenWidth(): number{
    return (isPlatformBrowser(this.platformId)) ? window.screen.width : 1536;
  }

  toggleScheduleForm(){
    this.scheduleService.toggleModalForm();
  }

  openMenu(): void{
    this.showMenu.update(val => true);
  }

  closeMenu(): void{
    this.showMenu.update(val => false);
  }

  toggleMenu(): void{
    this.showMenu.update(val => !val);
  }

  scrollToElement(elementClassName: string, marginAbove: number = 50): void{
    scrollToElement(elementClassName, marginAbove);
  }

  scrollToElementHindingMenu(elementClassName: string, marginAbove: number = 50): void{
    this.scrollToElement(elementClassName, marginAbove);
    this.closeMenu();
  }
}
