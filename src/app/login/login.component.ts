import { Component, OnInit } from '@angular/core';
import { ServerConnectService } from '../server-connect.service';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';

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
                private rout: Router
                ) {

        const loginStrg = window.localStorage.getItem('user');
        if (loginStrg) {
            if (loginStrg.length > 0 ) {
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
         if (user != null) {
            if (user.email === this.usuario && this.senha === user.password) {
                this.rout.navigate(['workspace']);
            } else {
                this.rout.navigate(['login']);
            }
        }else{
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
