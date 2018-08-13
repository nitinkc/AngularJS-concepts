import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-warning-alert',
  // BEWARE OF THE Template. Template is used to define in-line html template
  // Use Template URL for pointing to an external File
  templateUrl: './warning-alert.component.html',
  styleUrls: ['./warning-alert.component.css']
})
export class WarningAlertComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
