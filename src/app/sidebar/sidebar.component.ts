import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  

  fname:any =""

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {

      // this.route.params.subscribe((params: Params) => {

      //   console.log(params);
        

      //   // this.fname = params['name'];
      
      // });

      this.fname = this.route.snapshot.paramMap.get('name')

    
  }

}
