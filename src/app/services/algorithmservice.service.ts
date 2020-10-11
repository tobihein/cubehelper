import {Injectable} from '@angular/core';
import {Algorithmmodel} from '../models/algorithmmodel';

@Injectable({
  providedIn: 'root'
})
export class AlgorithmserviceService {
  private algorithms: Algorithmmodel[];

  constructor() {
    const tperm = this.createAlgorithm('tperm', 'T-Perm', 'R U R\' U\' R\' F R R U\' R\' U\' R U R\' F\'');
    const yperm = this.createAlgorithm('yperm', 'Y-Perm', 'F R U\' R\' U\' R U R\' F\' R U R\' U\' R\' F R F\'');
    const jpermRight = this.createAlgorithm('jperm_right', 'J-Perm_Right', 'R U R\' F\' R U R\' U\' R\' F R R U\' R\' U\'');
    const jpermLeft = this.createAlgorithm('jperm_left', 'J-Perm Left', 'L\' U\' L F L\' U\' L U L F\' L\' L\' U L U');
    const eperm = this.createAlgorithm('eperm', 'E-Perm', 'L U\' R D D R\' U L\' R U\' L D D L\' U R\'');
    const aperm1 = this.createAlgorithm('aperm1', 'A-Perm 1', '');
    const aperm2 = this.createAlgorithm('aperm2', 'A-Perm 2', null);
    const fperm = this.createAlgorithm('fperm', 'F-Perm', 'R\' U\' F\' R U R\' U\' R\' F R2 U\' R\' U\' R U R\' U R');
    const vperm = this.createAlgorithm('vperm', 'V-Perm', 'R\' U R\' Dw\' R\' F\' R2 U\' R\' U R\' F R F');
    const gperm1 = this.createAlgorithm('gperm1', 'G-Perm 1');
    const gperm2 = this.createAlgorithm('gperm2', 'G-Perm 2');
    const gperm3 = this.createAlgorithm('gperm3', 'G-Perm 3');
    const gperm4 = this.createAlgorithm('gperm4', 'G-Perm 4');
    const hperm = this.createAlgorithm('hperm', 'H-Perm');
    const rpermLeft = this.createAlgorithm('rperm_left', 'R-Perm Left');
    const rpermRight = this.createAlgorithm('rperm_right', 'R-Perm Right');
    const upermLeft = this.createAlgorithm('uperm_left', 'U-Perm Left');
    const upermRight = this.createAlgorithm('uperm_right', 'U-Perm Right');
    const nperm1 = this.createAlgorithm('nperm1', 'N-Perm 1');
    const nperm2 = this.createAlgorithm('nperm2', 'N-Perm 2');
    const zperm = this.createAlgorithm('zperm', 'Z-Perm');
    this.algorithms = [tperm, yperm, jpermRight, jpermLeft, eperm, zperm, vperm, aperm1, aperm2, fperm, gperm1, gperm2, gperm3, gperm4, hperm, rpermLeft, rpermRight, upermLeft, upermRight, nperm1, nperm2];
  }

  public getAlgorithms(): Algorithmmodel[] {
    return this.algorithms;
  }

  public invertAlgorithm(id: string) : string[] {
    const org = this.algorithms.find(alg => alg.getId() == id);
    return this.invert(org.getMoves());
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

  private invert(moves: string[]): string[] {
    const inverted: string[] = [];
    moves.forEach ( m => {
      if(m.endsWith('\'')) {
        inverted.push(m.substring(0, m.length-1))
      } else {
        inverted.push(m + '\'');
      }
    });
    return inverted;
  }
}
