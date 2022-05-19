import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  stip:boolean=true;
  constructor() { }

  ngOnInit(): void {
  }
  clicked()
  {
    this.stip=true;
  }
  noclicked()
  {
    this.stip=false
  }
}
