import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GraphQLModule } from './graphql.module';
import { HttpClientModule } from '@angular/common/http';
import { APOLLO_OPTIONS } from 'apollo-angular';
import { HttpLink } from 'apollo-angular/http';
import { InMemoryCache } from '@apollo/client/core';
import { BasicGraphComponent } from './basic-graph/basic-graph.component';
import { HeaderComponent } from './Components/header/header.component';
import { UserBoxComponent } from './Components/header/elements/user-box/user-box.component';
import { IconsComponent } from './Components/icons/icons.component';
import { PageTitleComponent } from './Components/page-title/page-title.component';
import { AllFilmsComponent } from './Pages/pages/all-films/all-films.component';
import { RegularComponent } from './Components/Tables/regular/regular.component';
import { TablesMainComponent } from './Components/Tables/tables-main/tables-main.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SearchBoxComponent } from './Components/header/elements/search-box/search-box.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SidebarComponent } from './Components/sidebar/sidebar.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { DashboardComponent } from './Pages/dashboard/dashboard.component';
import { AllPeopleComponent } from './Pages/pages/all-people/all-people.component';
import { AllPlanetsComponent } from './Pages/pages/all-planets/all-planets.component';
import { FormsModule } from '@angular/forms';
import { NgbPaginationModule, NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';

import { PaginationComponent } from './Pages/pagination/pagination.component';



@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [
    AppComponent,
    DashboardComponent,
    BasicGraphComponent,
    HeaderComponent,
    UserBoxComponent,
    IconsComponent,
    PageTitleComponent,
    PaginationComponent,
    AllFilmsComponent,
    AllPeopleComponent,
    AllPlanetsComponent,
    TablesMainComponent,
    RegularComponent,
    SearchBoxComponent,
    SidebarComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GraphQLModule,
    HttpClientModule,
    FontAwesomeModule,
    NgbModule,
    FormsModule,
    NgbPaginationModule,
    NgbTypeaheadModule
  ],
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory(httpLink: HttpLink) {
        return {
          cache: new InMemoryCache(),
          link: httpLink.create({
            uri: 'https://swapi-graphql.netlify.app/.netlify/functions/index',
          }),
        };
      },
      deps: [HttpLink],
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
