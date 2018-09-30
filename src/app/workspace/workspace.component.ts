import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServerConnectService } from '../server-connect.service';
import { UserService } from '../services/user-service';
import { ProjetoServiceService } from "../services/projeto-service.service";
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

    showFormEmp = false;
    showFormPro = false;

    constructor(
        private rout: Router,
        private serv: ServerConnectService,
        private userService: UserService,
        private projService: ProjetoServiceService
    ) { }

    ngOnInit() {
        const loginStrg = window.localStorage.getItem('user');
        if (loginStrg === null || loginStrg.length === 0) {
            this.rout.navigate(['login']);
        }
        console.log(loginStrg);
        //this.getProjects();
    }

    /** busca os projetos já criados atraves do service */
    getProjects() {
        this.projects = this.projService.getProjects();
        // .subscribe(
        //     ok => {
        //         this.data = ok;
        //         this.projects = this.data;
        //         // console.log("segmentos:", this.segmentos);
        //     },
        //     err => { console.log("Erro.getProjects:", err) }
        // );
    }

    /** cria um novo projeto para o empreendedor */
    addMyProject() {
        // this.projects.push(this.project);
        this.projService.addProjeto(this.project);
        alert("Projeto inserido com sucesso!");
        console.log(this.projects);
        this.project = new Project();
        this.showFormEmp = false;
        this.showFormPro = false;
    }

    // loadMyProjectList() {
    // }

}
