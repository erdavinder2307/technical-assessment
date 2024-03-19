

import { Component } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';

@Component({
  selector: 'app-all-planets',
  templateUrl: './all-planets.component.html',
  styleUrls: ['./all-planets.component.scss']
})
export class AllPlanetsComponent {
  planets: any[] = [];
  loading = true;
  error: any;
  heading = '';
  subheading = '';
  icon = 'pe-7s-drawer icon-gradient bg-happy-itmeo';
  page = 1;
  pageSize = 5;
  collectionSize = 0;
  currentPeople: any[] = [];


  constructor(private apollo: Apollo) { }

  ngOnInit() {
    this.apollo
      .watchQuery({
        query: gql`
        {
          allPlanets(first: 100) {
            totalCount
            planets {
              name,
              diameter,
              gravity,
              population,
              id
            }
          }
        }
        `,
      })
      .valueChanges.subscribe((result: any) => {
        debugger;
        this.planets = result.data?.allPlanets?.planets || [];
        this.loading = result.loading;
        this.error = result.error;
        this.collectionSize = this.planets.length;
      });
  }

  getCurrentPlanets() {
    debugger;
    if (this.page != 1) {
      return this.planets.slice(this.page * this.pageSize, (this.page + 1) * this.pageSize);
    } else {
      return this.planets.slice(0, this.pageSize);

    }
  }

  updatePlanets($event: any) {
    debugger;
    this.page = $event.page;
    this.pageSize = $event.pageSize;
  }
}
