import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
<<<<<<< HEAD
import { ServerConnectService } from '../server-connect.service';
=======
import { Project } from '../models/user.model';
import { UserService } from '../services/user-service';
>>>>>>> 6a7d4d603a9f7c3eec5bc0764537246e6dd22787

@Component({
    selector: 'app-workspace',
    templateUrl: './workspace.component.html',
    styleUrls: ['./workspace.component.css']
})
export class WorkspaceComponent implements OnInit {

<<<<<<< HEAD
    incluindo: boolean = false;
    data: any;
    projetos = [];
    segmentos = [];
    novoProj: NovoProjeto;

    constructor(private rout: Router, private serv: ServerConnectService) {
    }

    ngOnInit() {
        let loginStrg = window.localStorage.getItem('login-data')
        if (loginStrg) {
            if (loginStrg.length == 0 || loginStrg.length == null) {
                this.rout.navigate(['login']);
            }
            this.getProjects();
        }
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
                this.projetos = this.data.projetos;
                console.log("projetos:", this.projetos);
                // this.segmentos = this.data.segmento;
                // console.log("segmentos:", this.segmentos);
            },
            err => { console.log("Erro.getProjects:", err)}
        );
=======
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
>>>>>>> 6a7d4d603a9f7c3eec5bc0764537246e6dd22787
    }
}

/** Classe que instancia um novo projeto */
class NovoProjeto{
    titulo;
    segmento;
    competencias;
    detalhes;
}