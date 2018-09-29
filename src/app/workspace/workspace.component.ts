import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServerConnectService } from '../server-connect.service';

@Component({
    selector: 'app-workspace',
    templateUrl: './workspace.component.html',
    styleUrls: ['./workspace.component.css']
})
export class WorkspaceComponent implements OnInit {

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
    }
}

/** Classe que instancia um novo projeto */
class NovoProjeto{
    titulo;
    segmento;
    competencias;
    detalhes;
}