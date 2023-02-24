import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  name : string = "mon Petit Sebounet";
  timer = 0;
  interval: any;
  currentZoneIndex : number = 0;

  constructor() {}

  ngOnInit() {}

  formatTime(time: number) {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    const currentZone = this.currentZoneIndex + 1;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')} - Zone ${currentZone}`;
  }
  changeZone() {
    this.currentZoneIndex++;
    if(this.currentZoneIndex >= 15) {
      this.currentZoneIndex = 0;
    }
    clearInterval(this.interval);
    this.startTimer();
  }

  startTimer() {
    this.interval = setInterval(() => {
      this.timer++;
      if (this.timer % 16 == 0) {
        this.changeZone();
      }
    }, 1000);
  }

  pauseTimer() {
    clearInterval(this.interval);
  }

  resetTimer() {
    this.timer = 0;
    clearInterval(this.interval);
    this.currentZoneIndex = 0;
  }
}
