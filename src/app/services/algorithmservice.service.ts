import { Injectable } from '@angular/core';
import {Algorithmmodel} from '../models/algorithmmodel';

@Injectable({
  providedIn: 'root'
})
export class AlgorithmserviceService {

  constructor() { }

  public getAlgorithms(): Algorithmmodel[] {
    const alg1 = this.createAlgorithm('1', 'first',  ['R' , 'U\'', 'L', 'D']);
    const alg2 = this.createAlgorithm('2', 'second', ['L', 'R\'', 'D', 'L\'']);
    return [alg1, alg2 ];
  }

  private createAlgorithm(id: string, name: string, moves: string[]): Algorithmmodel {
    const alg = new Algorithmmodel();
    alg.setId(id);
    alg.setName(name);
    alg.setMoves(moves);
    return alg;
  }
}
