import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Fish } from '../models/fish.module';

@Injectable({
  providedIn: 'root'
})
export class FishService {

  constructor(private http:HttpClient) {
    console.log('ctor FishService');

    http.get('https://raw.githubusercontent.com/MosheBisk/rabizoo/master/docs/rabizoo/src/assets/fish.json')
      .subscribe(data =>{
        this.fish = data as Fish[];
        this.currentFish = this.fish[0];
      })
  }

  fish:Fish[] = [];

  currentFishIndex = 0;
  currentFish:Fish;
}
