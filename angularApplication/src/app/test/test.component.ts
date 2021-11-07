import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `<div>|>_ {{ welcomeName() }}</div>
    <div>|>_ {{ siteUrl }}</div>
    <input [id] = "testId"type="text" value="Hari">`,
  styles: [
    `
      div {
        color: red;
      }
    `,
  ],
})
export class TestComponent implements OnInit {
  // creating property
  public name = 'Hari';
  public siteUrl = window.location.href;
  public testId = 'testID'
  constructor() {}

  ngOnInit(): void {}
  welcomeName() {
    return `Welcome ${this.name}`;
  }
}
