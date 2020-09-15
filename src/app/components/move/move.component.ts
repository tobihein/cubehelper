import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-move',
  templateUrl: './move.component.html',
  styleUrls: ['./move.component.css']
})
export class MoveComponent implements OnInit {
   @Input() private description: string;

  constructor() { }

  ngOnInit(): void {
  }

  public getDescription(): string {
    return this.description;
  }
  public getFilename(): string {
    return this.description.replace(/\'/g, 'i');
  }
}
