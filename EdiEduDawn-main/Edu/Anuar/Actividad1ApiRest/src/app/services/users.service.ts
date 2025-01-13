import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { IUsuarios } from '../interfaces/iusuarios';
import { lastValueFrom } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class UsersService {

  httpClient = inject(HttpClient);
  private baseUrl : string = 'https://peticiones.online/api/users';

  constructor() { }

  
  getAllWithPromises(): Promise<IUsuarios[]> {
    return lastValueFrom(this.httpClient.get<any>(this.baseUrl))
      .then(response => response.results); 
  }

  getById(id: string): Promise<IUsuarios> {
    return lastValueFrom(this.httpClient.get<IUsuarios>(`${this.baseUrl}/${id}`));
    
  }

  insert(user: IUsuarios): Promise<IUsuarios>{
    return lastValueFrom(this.httpClient.post<IUsuarios>(this.baseUrl, user));
  }

  update(user: IUsuarios): Promise<IUsuarios>{
    return lastValueFrom(this.httpClient.put<IUsuarios>(`${this.baseUrl}/${user._id}`, user));
  }

  delete(iduser: string) : Promise<IUsuarios>{
    return lastValueFrom(this.httpClient.delete<IUsuarios>(`${this.baseUrl}/${iduser}`));
  }

}
