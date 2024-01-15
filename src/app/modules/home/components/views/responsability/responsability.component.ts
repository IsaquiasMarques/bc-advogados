import { isPlatformBrowser } from '@angular/common';
import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, Inject, Injectable, OnInit, PLATFORM_ID, ViewChild } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-responsability',
  templateUrl: './responsability.component.html',
  styleUrl: './responsability.component.css'
})
export class ResponsabilityComponent implements OnInit, AfterViewInit {

  constructor(
    private chageDetectorRef: ChangeDetectorRef,
    @Inject(PLATFORM_ID) private platformId: any
  ) {}

  @ViewChild('limitedContainerElement') limitedContainerElement!: ElementRef<HTMLElement>;
  sectionBodyPaddingLeft$: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  screenWidth: number = 0;

  ngOnInit(): void {
    
    if(isPlatformBrowser(this.platformId)){
      this.screenWidth = window.screen.width;
    }
    
  }

  ngAfterViewInit(): void {
    this.sectionBodyPaddingLeft$.next(this.limitedContainerElement.nativeElement.offsetLeft);
    
    this.chageDetectorRef.detectChanges();
  }

}
