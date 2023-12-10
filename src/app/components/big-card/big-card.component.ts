
import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-big-card',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './big-card.component.html',
  styleUrl: './big-card.component.css'
})
export class BigCardComponent {

  @Input()
  imageCover: string = "";
  
  @Input()
  cardTitle: string = "";

  @Input()
  cardDescription: string = "";

  @Input()
  Id: string = "0";

}
