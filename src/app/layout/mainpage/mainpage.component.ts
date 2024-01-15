import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrl: './mainpage.component.css'
})
export class MainpageComponent implements OnInit {

  constructor(
    private changeDetectorRef: ChangeDetectorRef
  ) { }

  headerComponentClientHeight$: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  ngOnInit(): void {
    
  }

  headerComponentClientHeight(componentClientHeight: any){
    this.headerComponentClientHeight$.next(componentClientHeight);
    this.changeDetectorRef.detectChanges();
  }

}
