import { Component, OnInit } from '@angular/core';
import { FishService } from 'src/app/services/fish.service';

@Component({
  selector: 'app-fish-card',
  templateUrl: './fish-card.component.html',
  styleUrls: ['./fish-card.component.css']
})
export class FishCardComponent implements OnInit {

  constructor(public fishSvc:FishService) { }

  ngOnInit() {
  }

}
