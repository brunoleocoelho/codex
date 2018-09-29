import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-workspace',
    templateUrl: './workspace.component.html',
    styleUrls: ['./workspace.component.css']
})
export class WorkspaceComponent implements OnInit {

    incluindo: boolean = false;
    // grpList: [];

    constructor(private rout: Router) {
    }
    
    ngOnInit() {
        let loginStrg = window.localStorage.getItem('login-data')
        if (loginStrg) {
            if (loginStrg.length == 0) {
                this.rout.navigate(['login']);
            }
        }
    }

}
