import { ChangeDetectorRef, Component, OnInit, computed, inject, signal } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ScheduleService } from '@shared/services/header/schedule.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrl: './mainpage.component.css'
})
export class MainpageComponent implements OnInit {

  public scheduleService = inject(ScheduleService);

  constructor(
    private changeDetectorRef: ChangeDetectorRef
  ) { }

  scheduleFormGroup: any;

  headerComponentClientHeight$: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  
  ngOnInit(): void {
    this.scheduleFormGroup = new FormGroup({
      name: new FormControl('', [ Validators.required ]),
      email: new FormControl('', [ Validators.required, Validators.email ]),
      subject: new FormControl('', [ Validators.required ]),
      company: new FormControl('', [ Validators.required ]),
      message: new FormControl('', [ Validators.required ])
    });
  }

  headerComponentClientHeight(componentClientHeight: any){
    this.headerComponentClientHeight$.next(componentClientHeight);
    this.changeDetectorRef.detectChanges();
  }
  
  toggleScheduleForm(){
    this.scheduleService.toggleModalForm();
  }

}
