import { Component, OnInit } from '@angular/core';
import {Algorithmmodel} from '../../models/algorithmmodel';
import {AlgorithmserviceService} from '../../services/algorithmservice.service';

@Component({
  selector: 'app-algorithmlist',
  templateUrl: './algorithmlist.component.html',
  styleUrls: ['./algorithmlist.component.css']
})
export class AlgorithmlistComponent implements OnInit {

  private algorithms: Algorithmmodel[] = [];
  constructor(private algorithmService: AlgorithmserviceService ) { }

  ngOnInit(): void {
    this.algorithms = this.algorithmService.getAlgorithms();
  }

}
