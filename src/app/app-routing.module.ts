import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LayoutMapComponent} from './layouts/layout-map/layout-map.component'
import {SidebarComponent} from './sidebar/sidebar.component'
import {LayoutAddPolyComponent} from './layouts/layout-add-poly/layout-add-poly.component'
import {AddPolygonComponent} from './polygon_workspace/add-polygon/add-polygon.component'
import {EditPolygonComponent} from'./polygon_workspace/edit-polygon/edit-polygon.component'

const routes: Routes = [{
  path:'',component:LayoutMapComponent,
  children:[
            {path:"data/:name",component:SidebarComponent},]

  },
  {
    path:"add_poly",component:LayoutAddPolyComponent,
    children:[
              {path:"",component:AddPolygonComponent}]
    },{
      path:"edit_poly/:name",component:EditPolygonComponent,
      }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
