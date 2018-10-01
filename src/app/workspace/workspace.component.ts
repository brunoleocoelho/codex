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

    aConvidar = [
        {nome:"Joao Filgueiras", skills: "HTML, CSS, JavaScript", convidado: false, proj:"Projeto Codex" },
        {nome:"Danielle Musser", skills: "Espec.Vendas", convidado: false, proj: "Projeto Codex"},
        {nome:"Fredd Gomes", skills: "HTML, CSS, JavaScript", convidado: false, proj: "App Mobile"},
    ];

    projParticipo = [
        {name: "Cidades Inteligentes", description: "Smart cities"},
        {name: "Energia Solar", description: "Projeto de energia sustentável barata"},
        {name: "Visite um Lugar", description: "Criação de grupos de turismo, para divulgação de pontos turísticos"},
        {name: "Cidadão Seguro", description: "Projeto de apoio na segurança pública"}
    ];

    projConvidado = [
        {name: "Eduação Dinâmica", description: "Ensino de tecnologias nas escolas de Petrópolis", skills: "HTML, CSS", aceitou: false},
    ];
    mostraconvite = true;

    // projects = new Array<Project>();
    // skills = new Array<Skills>();
    project = new Project();
    skill = new Skills();
    otherProject = new Project();

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
        //this.projService.addProjeto(this.project);
        this.usrStrg.projects.push(this.project);
        this.userService.addNewProject(this.usrStrg.id, this.project);
        alert("Projeto inserido com sucesso!");
        this.project = new Project();
        this.usrStrg = JSON.parse(window.localStorage.getItem('user'));
        this.showFormEmp = false;
    }

    // loadMyProjectList() {
    // }

    /** Cria nova capacidade/habilidade para o profissional */
    newSkill() {
        //REGRA DE NEGÓCIO ATÉ 5 COMPETÊNCIAS
        if (this.usrStrg.skills.length < 5) {
            this.usrStrg.skills.push(this.skill);
            console.log("SKILL:", this.skill, "ID-USR:", this.usrStrg.id);
            this.userService.addNewSkill(this.usrStrg.id, this.skill);
            this.skill = new Skills();
            this.usrStrg = JSON.parse(window.localStorage.getItem('user'));
            this.showFormPro = false;
        } else {
            alert("Você atingiu o número máximo de 5 competências para contas 'FREE'!\nAssine o 'Premium'!");
        }
    }

    /** Para que o colaborador se junte ao projeto */
    joinToProject(project: Project){
        let indExist = this.usrStrg.projects.findIndex( x => x.name == project.name)
        if (indExist) {
            alert("Você já se juntou ao projeto '"+ project.name +"' anteriormente!");
        } else {
            this.usrStrg.otherProjects.push(this.project);
            console.log("OtherProject:", this.project, "ID-USR:", this.usrStrg.id);
            this.userService.joinToOtherProject(this.usrStrg.id, this.project);
            this.otherProject = new Project();
            this.usrStrg = JSON.parse(window.localStorage.getItem('user'));
        }
    }

    invite(pessoa){
        let idxpes = this.aConvidar.findIndex( x => x.nome == pessoa.nome);
        if (idxpes != null) {
            this.aConvidar[idxpes].convidado = true;
            alert("Vocês convidou '"+ pessoa.nome +"'");
        }
    }

    allowInvite(proj, aceite){
        if (aceite) {
            alert("Você aceitou este evento");
            this.projParticipo.push(proj);
        } else {
            alert("Você recusou este evento");
        }
        // let idxp = this.projConvidado.findIndex( x => x.name == proj.name);
        // if (idxp != null) {            
        //     // alert("Vocês convidou '"+ pessoa.nome +"'");
        // }
        this.mostraconvite = false;
    }


}
