import { Component, OnInit } from '@angular/core';
import { SharedDataService } from '../shared-data.service';
import { SwapiService } from '../swapi.service';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {
  private selectedItem: any;
  public items = [];

  constructor(private fishSvc: SharedDataService, private swapiSvc: SwapiService) {}

  ngOnInit() {
    this.swapiSvc.getPlanets().subscribe(
      data => {
        this.items = (<any> data).results.map(x => x.name); //casting data to any allows ts to know it has results properties
      },
      
      error => console.log(error)

    );
  }
  // add back when alpha.4 is out
  // navigate(item) {
  //   this.router.navigate(['/list', JSON.stringify(item)]);
  // }
}
