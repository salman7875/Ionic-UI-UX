import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {
  constructor() {}
  selected = '';

  ngOnInit() {
    console.log("main")
  }

  handleTabChange(data: any) {
    this.selected = data.tab;
  }
}
