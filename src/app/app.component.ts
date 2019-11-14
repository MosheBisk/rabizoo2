import { Component } from '@angular/core';
import { PagingService } from './services/paging.service';
import { BirdsService } from './services/birds.service';
import { BeastsService } from './services/beasts.service';
import { FishService } from './services/fish.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'rabizoo';

constructor(public paging:PagingService, public birds:BirdsService, public beasts:BeastsService, public fish:FishService){}

getUp(ev){
  console.log('AppComponent  getUp', ev);
  
  switch (this.paging.currentPanel) {
    case 'birds':
        let newBirdIndex = this.getNewCurrentIndex(
          this.birds.currentBirdIndex, ev, this.birds.birds
        )
        this.birds.currentBirdIndex = newBirdIndex
        this.birds.currentBird = this.birds.birds[newBirdIndex]
      break;
    case 'beasts':
        let newBeastIndex = this.getNewCurrentIndex(
          this.beasts.currentBeastIndex, ev, this.beasts.beasts
        )
        this.beasts.currentBeastIndex = newBeastIndex;
        this.beasts.currentBeast = this.beasts.beasts[newBeastIndex];
      break;
    case 'fish':
        let newFishIndex = this.getNewCurrentIndex(
          this.fish.currentFishIndex, ev, this.fish.fish
        )
        this.fish.currentFishIndex = newFishIndex;
        this.fish.currentFish = this.fish.fish[newFishIndex];
      break;
    default:
      break;
  }
}
  private getNewCurrentIndex(current: number, delta: number, array: {}[]):number {
    let max = array.length -1;
    let newIndex = current + delta
    if (newIndex > max) {
      newIndex = 0
    }
    if (newIndex < 0) {
      newIndex = max
    }
    return newIndex
  }


}
