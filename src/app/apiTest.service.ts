import { Injectable } from "@angular/core";
import {HttpClient} from "@angular/common/http"



@Injectable()
export class ApiTestService{

    //Total Base Url https://www.reddit.com/r/aww/.json
    apiBaseUrl:string = "https://www.reddit.com/r/";
    constructor(private http: HttpClient) { }

    getSubreddit(sub:string):any{
        //this returns the observable object which can be used to pull out the array of Jsons from

        let url=this.apiBaseUrl+sub+"/.json";

        return this.http.get(url);
    }
}