import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-areas',
  templateUrl: './areas.component.html',
  styleUrl: './areas.component.css'
})
export class AreasComponent implements OnInit, AfterViewInit {

  constructor(
    private changeDetectorRef: ChangeDetectorRef
  ) { }

  @ViewChild('titleElement') titleElement!: ElementRef<HTMLElement>;
  sectionContentOffsetLeft$: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  ngOnInit(): void {
    
  }

  ngAfterViewInit(): void {
    this.sectionContentOffsetLeft$.next(this.titleElement.nativeElement.offsetLeft);
    this.changeDetectorRef.detectChanges();
  }

}
