import {Injectable} from '@angular/core';
import {Algorithmmodel} from '../models/algorithmmodel';

@Injectable({
  providedIn: 'root'
})
export class AlgorithmserviceService {

  constructor() {
  }

  public getAlgorithms(): Algorithmmodel[] {
    const tperm = this.createAlgorithm('3', 'T-Perm', 'R U R\' U\' R\' F R R U\' R\' U\' R U R\' F\'');
    const yperm = this.createAlgorithm('4', 'Y-Perm', 'F R U\' R\' U\' R U R\' F\' R U R\' U\' R\' F R F\'');
    const jpermRight = this.createAlgorithm('5', 'J-Perm_Right', 'R U R\' F\' R U R\' U\' R\' F R R U\' R\' U\'');
    const jpermLeft = this.createAlgorithm('6', 'J-Perm Left', 'L\' U\' L F L\' U\' L U L F\' L\' L\' U L U');
    const eperm = this.createAlgorithm('7', 'E-Perm', 'L U\' R D D R\' U L\' R U\' L D D L\' U R\'');
    const npermLeft = this.createAlgorithm('8', 'N-Perm Left', '');
    const npermRight = this.createAlgorithm('9', 'N-Perm Right', null);
    const zperm = this.createAlgorithm('10', 'Z-Perm');
    const vperm = this.createAlgorithm('11', 'V-Perm');
    return [tperm, yperm, jpermRight, jpermLeft, eperm, npermLeft, npermRight, zperm, vperm];
  }

  private createAlgorithm(id: string, name: string, moves = ''): Algorithmmodel {
    const alg = new Algorithmmodel();
    alg.setId(id);
    alg.setName(name);
    if ( moves != null ) {
      alg.setMoves(moves.split(' ').filter(s => s));
    } else {
      alg.setMoves([]);
    }
    return alg;
  }
}
