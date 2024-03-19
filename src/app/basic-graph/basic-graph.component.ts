import { Component, OnInit } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';

@Component({
  selector: 'app-basic-graph',
  templateUrl: './basic-graph.component.html',
  styleUrls: ['./basic-graph.component.scss']
})
export class BasicGraphComponent implements OnInit {
  films: any[] = [];
  loading = true;
  error: any;

  constructor(private apollo: Apollo) { }

  ngOnInit() {
    this.apollo
      .watchQuery({
        query: gql`
        {
          allFilms(last:1) {
          totalCount,
           films{
             title
             id
           }
          }
        }
        `,
      })
      .valueChanges.subscribe((result: any) => {

        this.films = result.data?.allFilms?.films || [];
        this.loading = result.loading;
        this.error = result.error;
      });
  }
}