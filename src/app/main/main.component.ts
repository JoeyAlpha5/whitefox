import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { InfoComponent } from '../info/info.component';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  viewMore(){
    this.dialog.open(InfoComponent,{height:'800px',width:'600px'});
  }

}
