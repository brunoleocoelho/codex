import { Component, OnInit } from '@angular/core';
import { ServerConnectService } from '../server-connect.service';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { UserService } from '../services/user-service';
import { User } from '../models/user.model';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    /** Variaveis do componente */
    usuario: string;
    senha: string;
    dados: any;
    userStrg: User;

    constructor(private http: HttpClientModule,
        private serv: ServerConnectService,
        private rout: Router,
        private userServ: UserService
    ) {
        this.usuario = '';
        this.senha = '';
        this.userStrg = JSON.parse(window.localStorage.getItem('user'));
        this.doLogin();
        // if (this.userStrg != null) {
        //     if (this.userStrg.length > 0) {
        //         this.rout.navigate(['workspace']);
        //     }
        // } else {
        //     window.alert('cadastre-se');
        // }
    }

    ngOnInit() {
    }

    doLogin() {
        //this.userStrg = JSON.parse(window.localStorage.getItem('user'));
        //Sendo teste redireciona sempre para workspace
        if (this.userStrg != null) {

            if (this.userStrg.email === this.usuario 
                && this.senha === this.userStrg.password) {
                this.rout.navigate(['workspace']);
            } 
            // else {
            //     window.alert('Cadastre-se!');
            //     this.rout.navigate(['cadastro']);
            // }

        } else {

            if (this.usuario.length != 0 && this.senha.length != 0) {
                let usr = new User(); //this.usuario, this.senha
                usr.email = this.usuario;
                usr.password = this.senha;
                var okusr = this.userServ.verifyUser(usr);

                if (okusr != null) {
                    window.localStorage.setItem('user', JSON.stringify(okusr));
                    this.rout.navigate(['workspace']);
                }
                else {
                    alert("Usuario/senha incorretos!");
                }
            }

        }
        // this.serv.loginToServer(this.usuario, this.senha).subscribe(
        //     ok => {
        //         this.dados = ok;
        //         window.localStorage.setItem('login-data', this.dados.usuario);
        //         this.rout.navigate(['workspace']);
        //         console.log(this.dados);
        //     },
        //     err => { console.log('Senha errada', err) }
        // )
    }
}
