import {Component, Input, OnInit} from '@angular/core';
import { AlgorithmserviceService } from 'src/app/services/algorithmservice.service';
import {Algorithmmodel} from '../../models/algorithmmodel';
import {MoveComponent} from '../move/move.component';

@Component({
  selector: 'app-algorithm',
  templateUrl: './algorithm.component.html',
  styleUrls: ['./algorithm.component.css']
})
export class AlgorithmComponent implements OnInit {
  @Input() private algorithm: Algorithmmodel;
  private showInverted: boolean;
  
  constructor(private algorithmService: AlgorithmserviceService) { }

  ngOnInit(): void {
  }

  public getAlgorithm(): Algorithmmodel{
    return this.algorithm;
  }

  public getInvertedAlgorithm(): string[] {
    return this.algorithmService.invertAlgorithm(this.algorithm.getId());
  }

  public toggle(): void {
    this.showInverted=!this.showInverted;
  }
  public show(): boolean {
    return this.showInverted;
  }
}
