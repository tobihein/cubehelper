import {Component, Input, OnInit} from '@angular/core';
import {Algorithmmodel} from '../../models/algorithmmodel';
import {MoveComponent} from '../move/move.component';

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

  public getAlgorithm(): Algorithmmodel{
    return this.algorithm;
  }
}
