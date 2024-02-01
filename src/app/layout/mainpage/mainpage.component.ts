import { isPlatformBrowser } from '@angular/common';
import { ChangeDetectorRef, Component, Inject, OnInit, PLATFORM_ID, computed, inject, signal } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ISchedule } from '@data/interfaces/schedule.interface';
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
    private changeDetectorRef: ChangeDetectorRef,
    @Inject(PLATFORM_ID) private platformId: any
  ) { }

  scheduleFormGroup: any;
  isLoading$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  formCallback!: { code: number, message: string } | null;

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

  formSumbit(){
    this.isLoading$.next(true);
    const formData: FormData = new FormData();
    formData.append('name', this.scheduleFormGroup.get('name').value);
    formData.append('email', this.scheduleFormGroup.get('email').value);
    formData.append('subject', this.scheduleFormGroup.get('subject').value);
    formData.append('company', this.scheduleFormGroup.get('company').value);
    formData.append('message', this.scheduleFormGroup.get('message').value);

    this.scheduleService.submit(formData).subscribe({
      next: (callback: any) => {
        console.log(callback)
        this.formCallback = { code: callback.code, message: callback.mensagem ?? callback.message }
        this.scheduleFormGroup.reset();
        this.resetCallback();
        this.isLoading$.next(false);
      },
      error: (error: any) => {
        console.log(error)
        this.formCallback = { code: error.status, message: error.error.mensagem ?? error.message }
        this.resetCallback();
        this.isLoading$.next(false);
      }
    });

  }
  
  resetCallback(timer: number = 4){
    if(isPlatformBrowser(this.platformId)){
      setTimeout(() => {
        this.formCallback = null;
  
      }, timer * 1000);
    }
  }
}
