import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PhotoProviderService {

  constructor(public http: HttpClient) { 
    console.log('Hello PhotoProvider Provider');
  }
}
