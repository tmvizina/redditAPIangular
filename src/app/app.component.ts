import { Component } from '@angular/core';
import { ApiTestService } from './apiTest.service';
import { Reddit } from './reddit';


import { Logger } from './logger.service';
import { stringify } from '@angular/compiler/src/util';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[ApiTestService]
})
export class AppComponent {
  title = 'RedditAPI';

  reddit:Reddit={}as Reddit;
  


  constructor( private api: ApiTestService) { }



  callReddit(sub:string){
      let response = this.api.getSubreddit(sub);

      response.subscribe(
        (data:Reddit) => this.reddit=
        {
          kind:data.kind,
          data:data.data

        }
      );
    }

    callsingleReddit(sub:string){
      let response = this.api.getSubreddit(sub);

      response.subscribe(
        (data:Reddit) => this.reddit=
        {
          kind:data.kind,
          data:data.data

        }
      );
    }


    
}
