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
    showForm = false;

    constructor(private rout: Router,
                private userService: UserService) {
    }

    ngOnInit() {
        const loginStrg = window.localStorage.getItem('user');
        if (loginStrg === null || loginStrg.length === 0) {
                this.rout.navigate(['login']);
            }
        console.log(loginStrg);
    }
    loadMyProjectList() {
    }

    addMyProject() {
        this.projects.push(this.project);
        this.project = new Project();
        console.log(this.projects);
        this.showForm = false;
    }
}
