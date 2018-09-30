import { Injectable } from '@angular/core';
import { User, Project } from '../models/user.model';

@Injectable({
    providedIn: 'root'
})
export class ProjetoServiceService {

    projetos = new Array<Project>();

    constructor() { 
        this.initProjects();
    }
    
    initProjects(){
        this.projetos.push(new Project(
            'Plataforma Web',
            'Plataforma de desenvolvimento de ideias',
            [],
            'Financeiro',
            1 
        ));
        this.projetos.push(new Project(
            'App Mobile',
            'App para venda de produtos alimenticios',
            [],
            'Comércio',
            1 
        ));
        this.projetos.push(new Project(
            'Projeto de bikes',
            'Projetos de criação de bikes cmpartilhadas',
            [],
            'Mobilidade',
            1 
        ));
    }

    /** Retorna os projetos */
    getProjects(){
        return this.projetos;
    }

    /** Salva um novo projeto */
    addProjeto(projeto: Project){
        this.projetos.push(projeto);
    }
}
