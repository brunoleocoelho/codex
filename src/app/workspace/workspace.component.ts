import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServerConnectService } from '../server-connect.service';
import { UserService } from '../services/user-service';
import { ProjetoServiceService } from "../services/projeto-service.service";
import { Project, Skills, User } from '../models/user.model';


@Component({
    selector: 'app-workspace',
    templateUrl: './workspace.component.html',
    styleUrls: ['./workspace.component.css']
})
export class WorkspaceComponent implements OnInit {

    data: any;
    usrStrg: User;
    
    projects = new Array<Project>();
    project = new Project();

    skills = new Array<Skills>();
    skill = new Skills();
    
    showFormEmp = false;
    showFormPro = false;

    constructor(
        private rout: Router,
        private serv: ServerConnectService,
        private userService: UserService,
        private projService: ProjetoServiceService
    ) { }

    ngOnInit() {
        this.usrStrg = JSON.parse(window.localStorage.getItem('user'));
        if (this.usrStrg === null) {
            this.rout.navigate(['login']);
        }
        console.log(this.usrStrg);
        //this.getProjects();
    }

    /** busca os projetos já criados atraves do service */
    // getProjects() {
    //     let usr = this.userService.verifyUser(this.usrStrg);
    //     this.projects = usr.projects;
    // }


    /** cria um novo projeto para o empreendedor */
    addMyProject() {
        // this.projects.push(this.project);
        this.projService.addProjeto(this.project);
        alert("Projeto inserido com sucesso!");
        this.project = new Project();
        this.showFormEmp = false;
        this.showFormPro = false;
    }

    // loadMyProjectList() {
    // }

    /** Cria nova capacidade/habilidade para o profissional */
    newSkill(){
        this.usrStrg.skills.push(this.skill);
        console.log("SKILL:", this.skill, "ID-USR:", this.usrStrg.id);
        this.userService.addNewSkill(this.usrStrg.id, this.skill);
        this.skill = new Skills();
        this.usrStrg = JSON.parse(window.localStorage.getItem('user'));
    }

}
