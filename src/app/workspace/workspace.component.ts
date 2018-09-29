import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Project } from '../models/user.model';
import { UserService } from '../services/user-service';

@Component({
    selector: 'app-workspace',
    templateUrl: './workspace.component.html',
    styleUrls: ['./workspace.component.css']
})
export class WorkspaceComponent implements OnInit {

    projects = new Array<Project>();
    project = new Project();

    constructor(private rout: Router,
                private userService: UserService) {
    }

    ngOnInit() {
        const loginStrg = window.localStorage.getItem('user');
        if (loginStrg) {
            if (loginStrg.length === 0) {
                this.rout.navigate(['login']);
            }
        }
    }
    loadMyProjectList() {
    }

    addMyProject() {

    }
}
