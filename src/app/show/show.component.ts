import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  typeShow = 0;
  
  setTypeShow(currentShow: number) {
    // בתוך מחלקה חובה להשתמש ב this
    // גדי לגשת למשתנה שמוגדר בתוך מחלקה
    this.typeShow = currentShow;
  }

}
