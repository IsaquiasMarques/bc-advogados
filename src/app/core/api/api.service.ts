import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { ISchedule } from "@data/interfaces/schedule.interface";
import { environment } from "@environments/environment.prod";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class ApiService{

    private http: HttpClient = inject(HttpClient);

    submit(formData: FormData): Observable<any>{
        return this.http.post(`${environment.scheduleEndpoint}`, formData);
    }

}