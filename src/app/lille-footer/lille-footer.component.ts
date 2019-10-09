import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lille-footer',
  templateUrl: './lille-footer.component.html',
  styleUrls: ['./lille-footer.component.css']
})
export class LilleFooterComponent implements OnInit {

  constructor() { }


  get_date(){
    return new Date().getFullYear()
  }
  
  ngOnInit() {
  }

}