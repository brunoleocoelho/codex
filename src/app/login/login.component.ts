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
    strg;

    constructor(private http: HttpClientModule,
        private serv: ServerConnectService,
        private rout: Router,
        private userServ: UserService
    ) {

        const loginStrg = window.localStorage.getItem('user');
        if (loginStrg) {
            if (loginStrg.length > 0) {
                this.rout.navigate(['workspace']);
            }
        } else {
            window.alert('cadastre-se');
        }
    }

    ngOnInit() {
    }

    doLogin() {
        const user = JSON.parse(window.localStorage.getItem('user'));
        //Sendo teste redireciona sempre para workspace
        if (user != null) {

            if (user.email === this.usuario && this.senha === user.password) {
                this.rout.navigate(['workspace']);
            } else {
                this.rout.navigate(['login']);
            }
        } else {

            var ok = this.userServ.verifyUser(new User(this.usuario, this.senha));
            if (ok != null) {
                this.rout.navigate(['workspace']);
            }
            else {
                alert("Usuario/senha incorretos!");
            }
            this.rout.navigate(['workspace']);

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
