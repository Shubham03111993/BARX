import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import {FetchService} from '../fetch.service';

@Component({
  selector: 'app-fetch',
  templateUrl: './fetch-data.component.html',
  styleUrls: ['./fetch-data.component.css']
})

@Injectable()
export class FetchDataComponent implements OnInit {
  dataFromURL: any;

  constructor(private fetchService: FetchService ) { }

  ngOnInit(): void {
    this.fetchService.getData().subscribe((data) => {
      this.dataFromURL = JSON.stringify(data['results']);
    });
  }
}
