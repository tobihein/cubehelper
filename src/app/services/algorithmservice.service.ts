import { Injectable } from '@angular/core';
import {Algorithmmodel} from '../models/algorithmmodel';

@Injectable({
  providedIn: 'root'
})
export class AlgorithmserviceService {

  constructor() { }

  public getAlgorithms(): Algorithmmodel[] {
    const alg1 = this.createAlgorithm('1', 'first');
    const alg2 = this.createAlgorithm('2', 'second');
    return [alg1, alg2 ];
  }

  private createAlgorithm(id: string, name: string): Algorithmmodel {
    const alg = new Algorithmmodel();
    alg.setId(id);
    alg.setName(name);
    return alg;
  }
}
