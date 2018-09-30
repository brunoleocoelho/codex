import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServerConnectService } from '../server-connect.service';
import { UserService } from '../services/user-service';
import { Project } from '../models/user.model';


@Component({
    selector: 'app-workspace',
    templateUrl: './workspace.component.html',
    styleUrls: ['./workspace.component.css']
})
export class WorkspaceComponent implements OnInit {

    data: any;
    projects = new Array<Project>();
    project = new Project();

    showForm = false;

    constructor(private rout: Router, private serv: ServerConnectService, private userService: UserService) {
    }

    ngOnInit() {
        const loginStrg = window.localStorage.getItem('user');
        if (loginStrg === null || loginStrg.length === 0) {
            this.rout.navigate(['login']);
        }
        console.log(loginStrg);
        //this.getProjects();
    }

    /** cria um novo projeto para o empreendedor */
    createNewProj(projeto) {
        console.log("NovoProjeto:", projeto);
        alert("Projeto inserido com sucesso!");
    }

    /** busca os projetos já criados atraves do service */
    getProjects() {
        this.serv.getProjects().subscribe(
            ok => {
                this.data = ok;
                // this.segmentos = this.data.segmento;
                // console.log("segmentos:", this.segmentos);
            },
            err => { console.log("Erro.getProjects:", err) }
        );
    }

    addMyProject() {
        this.projects.push(this.project);
        this.project = new Project();
        console.log(this.projects);
        this.showForm = false;
    }

    // loadMyProjectList() {
    // }

}
