import { Component } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';

@Component({
  selector: 'app-all-people',
  templateUrl: './all-people.component.html',
  styleUrl: './all-people.component.scss'
})
export class AllPeopleComponent {
  people: any[] = [];
  loading = true;
  error: any;
  heading = '';
  subheading = '';
  icon = 'pe-7s-drawer icon-gradient bg-happy-itmeo';
  page = 1;
  pageSize = 5;
  collectionSize = 0;

  constructor(private apollo: Apollo) { }

  ngOnInit() {
    this.apollo
      .watchQuery({
        query: gql`
        {
          allPeople(first: 100) {
            totalCount
            people {
              name,
              birthYear,
              gender,
              height,
              id
            }
          }
        }
        `,
      })
      .valueChanges.subscribe((result: any) => {

        this.people = result.data?.allPeople?.people || [];
        this.loading = result.loading;
        this.error = result.error;
        this.collectionSize = this.people.length / this.pageSize;
      });
  }


  getCurrentPeople() {

    if (this.page != 1) {
      return this.people.slice(this.page * this.pageSize, (this.page + 1) * this.pageSize);
    } else {
      return this.people.slice(0, this.pageSize);

    }
  }

  updatePeople($event: any) {

    this.page = $event.page;
    this.pageSize = $event.pageSize;
  }
}