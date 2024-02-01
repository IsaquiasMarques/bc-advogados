import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { environment } from "@environments/environment";
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