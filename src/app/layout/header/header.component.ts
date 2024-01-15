import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit, AfterViewInit {

  constructor() { }

  @ViewChild('headerElement') headerElement!: ElementRef<HTMLElement>;
  @Output() headerElementClientHeight: EventEmitter<number> = new EventEmitter<number>();
  
  ngOnInit(): void {
    
  }

  ngAfterViewInit(): void {
    this.headerElementClientHeight.emit(this.headerElement.nativeElement.clientHeight);
  }

}
