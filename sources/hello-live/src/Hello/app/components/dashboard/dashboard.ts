import {Component, OnInit} from 'angular2/core';
import {Http} from "angular2/http";

@Component({
    templateUrl: 'app/components/dashboard/dashboard.html'
})
export class DashboardComponent implements OnInit{
    private _games : any[];

    constructor(private _http:Http) {
    }

    ngOnInit():any {
        // TODO: Refactor ;(
        this._http.get("http://10.211.55.3:7777/api/games/list")
            .subscribe(
                (result) => this._games = result.json(),
                (error) => console.log(error.toJSON())
            );
    }
}