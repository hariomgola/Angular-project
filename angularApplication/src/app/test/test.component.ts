import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `<div>|>_ {{ welcomeName() }}</div>
    <div>|>_ {{ siteUrl }}</div>
    <input [id]="testId" type="text" value="Hari" />
    <input disabled="false" [id]="testId" type="text" value="Hari" />
    <input disabled="{{ false }}" [id]="testId" type="text" value="Hari" />
    <input [disabled]="false" [id]="testId" type="text" value="Hari" />
    <input [disabled]="isDisabled" [id]="testId" type="text" value="Hari" />
    <h2 class="text-success">Hari Success</h2>
    <h2 [class]="successClass">Hari Success</h2>
    <h2 [class]="successClass" class="text-special">Hari Success</h2>
    <h2 [class.text-danger]="hasError">Hari Conditional check</h2>

    <h2 [ngClass]="messageClasses">Hari Conditional check</h2>
    <button (click)="onClick($event)">Event Binding</button>
    {{ eventData }}
    <button (click)="eventData = 'Passing direct value'">Direct Event</button>

    <br />
    <input #myInput type="text" />
    <button (click)="referenceVariable(myInput)">Log</button>

    <br />
    <input [(ngModel)]="twoWayBinding" type="text" />
    {{ twoWayBinding }}`,
  styles: [
    `
      .text-success {
        color: green;
      }
      .text-danger {
        color: red;
      }
      .text-special {
        font-style: italic;
      }
    `,
  ],
})
export class TestComponent implements OnInit {
  // creating property
  public name = 'Hari';
  public siteUrl = window.location.href;
  public testId = 'testID';
  public isDisabled = true;
  public successClass = 'text-success';

  // conditional class check
  public hasError = true;
  public isSpecial = true;
  public messageClasses = {
    'text-success': !this.hasError,
    'text-danger': this.hasError,
    'text-special': this.isSpecial,
  };

  // event binding
  public eventData = '';
  onClick(event: any) {
    console.log(`---> This is a example of event binding`, event);
    this.eventData = event.type;
  }

  // Template Reference varaible
  referenceVariable(value: any) {
    console.log(`--> Template reference variable value - ${value}`);
  }

  // two way binding
  public twoWayBinding = '';

  constructor() {}

  ngOnInit(): void {}
  welcomeName() {
    return `Welcome ${this.name}`;
  }
}
