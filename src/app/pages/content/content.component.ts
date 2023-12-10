import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { dataFake } from '../../data/dataFake';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent {

  imageCover:string = "";

  contentTitle: string = "";

  contentDescription: string = "";

  private id:string | null = "0" ;

  constructor(private route: ActivatedRoute){}

  ngOnInit(): void{
    this.route.paramMap.subscribe(
      value => 
      this.id = value.get("id")
    )
    this.setValuesToContent(this.id)
  }

  setValuesToContent(id: string | null){
    const result = dataFake.filter(article => article.id == id)[0]

    this.contentTitle = result.title;
    this.contentDescription = result.description;
    this.imageCover = result.imageCover;

  }

}