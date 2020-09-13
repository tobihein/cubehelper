import {Component, Input, OnInit} from '@angular/core';
import {Algorithmmodel} from '../../models/algorithmmodel';

@Component({
  selector: 'app-algorithm',
  templateUrl: './algorithm.component.html',
  styleUrls: ['./algorithm.component.css']
})
export class AlgorithmComponent implements OnInit {
  @Input() private algorithm: Algorithmmodel;

  constructor() { }

  ngOnInit(): void {
  }

}
