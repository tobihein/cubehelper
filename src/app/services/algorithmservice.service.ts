import { Injectable } from '@angular/core';
import {Algorithmmodel} from '../models/algorithmmodel';

@Injectable({
  providedIn: 'root'
})
export class AlgorithmserviceService {

  constructor() { }

  public getAlgorithms(): Algorithmmodel[] {
    const alg1 = this.createAlgorithm('1', 'CP3R',  ['R' , 'U', 'R\'', 'U', 'R', 'U', 'U', 'R\'']);
    const alg2 = this.createAlgorithm('2', 'CP3L', ['L\'', 'U\'', 'L', 'U\'', 'L\'', 'U', 'U', 'L']);
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
