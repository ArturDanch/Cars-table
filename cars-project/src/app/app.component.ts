import { Component, OnInit } from '@angular/core';

import { CARS_ARRAY } from './constants/cars.constant';
import * as _ from 'lodash';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  public carsArray;
  public tableDisp;
  public  gritDisp;
  public viewMode = 'grid';
  public ngOnInit() {
    setTimeout(() => {
      this.getCars();
    }, 500);
  }
  public getCars = () => {
    this.carsArray = _.cloneDeep(CARS_ARRAY);
  };
  public sortCars = (sortValue: string) => {
    this.carsArray =_.sortBy(this.carsArray, [sortValue])
  };
  public changeView = () => {
    if ( this.tableDisp === true ) {
      this.tableDisp = false;
      this.gritDisp = false;
      this.viewMode = 'grid';
   } else {
      this.tableDisp = true;
      this.gritDisp = true;
      this.viewMode = 'table';
    }
  }
  public filterCars = (filterValue: string) => {
    this.getCars();
    switch (filterValue) {
      case 'new':
        this.carsArray = _.filter(this.carsArray, (car) => {
          return car.year > 2012;
        });
        break;
      case 'old':
        this.carsArray = _.filter(this.carsArray, (e) => {
          return e.year <= 2012;
        });
        break;
      case
      'expensive'
      :
        this.carsArray = _.filter(this.carsArray, (e) => {
          return e.price >= 100000
            ;
        });
        break;
      case 'germany':
        this.carsArray = _.filter(this.carsArray, {country: 'Germany'});
        break;
      case 'italy':
        this.carsArray = _.filter(this.carsArray, {country: 'Italy'});
        break;
      case 'france':
        this.carsArray = _.filter(this.carsArray, {country: 'France'});
        break;
      case 'ukraine':
        this.carsArray = _.filter(this.carsArray, {country: 'Ukraine'});
        break;
      case 'japan':
        this.carsArray = _.filter(this.carsArray, {country: 'Japan'});
        break;
      default:
        this.getCars();

    }
  }
}

