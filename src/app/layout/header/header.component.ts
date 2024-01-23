import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, EventEmitter, OnInit, Output, ViewChild, inject } from '@angular/core';
import { ScheduleService } from '@shared/services/header/schedule.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit, AfterViewInit {
  private scheduleService = inject(ScheduleService);

  @ViewChild('headerElement') headerElement!: ElementRef<HTMLElement>;
  @Output() headerElementClientHeight: EventEmitter<number> = new EventEmitter<number>();
  
  ngOnInit(): void {
    
  }

  ngAfterViewInit(): void {
    this.headerElementClientHeight.emit(this.headerElement.nativeElement.clientHeight);
  }

  toggleScheduleForm(){
    this.scheduleService.toggleModalForm();
    // this.scheduleService.openModal();
  }

}
