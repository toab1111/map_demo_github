import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { SearchComponent } from './search-multi/search.component';
import { HttpClientModule } from '@angular/common/http';

import {ApiService} from '../app/services/api.service';
import { SidebarComponent } from './sidebar/sidebar.component';
import { LayoutMapComponent } from './layouts/layout-map/layout-map.component';
import { AddPolygonComponent } from './polygon_workspace/add-polygon/add-polygon.component';
import { EditPolygonComponent } from './polygon_workspace/edit-polygon/edit-polygon.component';
import { LayoutAddPolyComponent } from './layouts/layout-add-poly/layout-add-poly.component';



@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    SidebarComponent,
    LayoutMapComponent,
    AddPolygonComponent,
    EditPolygonComponent,
    LayoutAddPolyComponent,

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgSelectModule,

  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
