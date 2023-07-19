import { UserFacade } from "@org/users";
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'org-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'shop';
  /**
   *
   */
  constructor(private userFacade:UserFacade) {}
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.userFacade.init();
  }
}
