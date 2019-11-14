import { Component, OnInit } from '@angular/core';
import { FishService } from 'src/app/services/fish.service';

@Component({
  selector: 'app-fish-panel',
  templateUrl: './fish-panel.component.html',
  styleUrls: ['./fish-panel.component.css']
})
export class FishPanelComponent implements OnInit {

  constructor(public fishSvc:FishService) { }

  ngOnInit() {
  }

}
