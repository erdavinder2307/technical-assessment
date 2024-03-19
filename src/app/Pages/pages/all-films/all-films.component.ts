import { Component } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';

@Component({
  selector: 'app-all-films',
  templateUrl: './all-films.component.html',
  styleUrls: ['./all-films.component.scss']
})
export class AllFilmsComponent {
  films: any[] = [];
  loading = true;
  error: any;
  heading = '';
  subheading = '';
  icon = 'pe-7s-drawer icon-gradient bg-happy-itmeo';
  page = 1;
  pageSize = 5;
  collectionSize = 0;
  currentFilms: any[] = [];

  constructor(private apollo: Apollo) { }

  ngOnInit() {
    this.apollo
      .watchQuery({
        query: gql`
        {
          allFilms(first: 100) {
            totalCount
            films {
              title,
              director,
              releaseDate,
              id
            }
          }
        }
        `,
      })
      .valueChanges.subscribe((result: any) => {

        this.films = result.data?.allFilms?.films || [];
        //assign films to currentfilms for pagination

        this.loading = result.loading;
        this.error = result.error;
        this.collectionSize = this.films.length;
      });
  }

  getCurrentFilms() {

    if (this.page != 1) {
      return this.films.slice(this.page * this.pageSize, (this.page + 1) * this.pageSize);
    } else {
      return this.films.slice(0, this.pageSize);

    }
  }

  updateFilms($event: any) {

    this.page = $event.page;
    this.pageSize = $event.pageSize;
  }

}
