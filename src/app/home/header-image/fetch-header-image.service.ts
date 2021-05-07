import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ConstantsService } from 'src/app/global/constants.service';

@Injectable({
  providedIn: 'root',
})
export class FetchHeaderImageService implements OnInit {

  constructor(private http: HttpClient) {}

  ngOnInit() {}

  fetchImage() {
    
    return this.http.get(ConstantsService.getUnsplashSourceApi());
  }
}
