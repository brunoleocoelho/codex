import { Component } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    navMenuFixed: boolean = true;
    router;

    constructor(private _router: Router){
        this.router = _router
        console.log("ROUTE:", this.router);
        // if (route.toString) {
            
        // }
        // this.navMenuFixed = false;
    }
}
