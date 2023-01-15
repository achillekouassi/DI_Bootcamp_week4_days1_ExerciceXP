import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  copyright= "@2023 par @chille Kouassi";

  constructor() { }

  ngOnInit(): void {
  }

}
