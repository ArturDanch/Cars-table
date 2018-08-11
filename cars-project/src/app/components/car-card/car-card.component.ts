import { Component, OnInit, Input } from '@angular/core';
import { Cars_interface} from "../../interfaces/cars.interface";

@Component({
  selector: 'app-car-card',
  templateUrl: './car-card.component.html',
  styleUrls: ['./car-card.component.scss']
})
export class CarCardComponent implements OnInit {
  @Input() public myCar: Cars_interface;

  constructor() { }

  ngOnInit() {
  }

}
