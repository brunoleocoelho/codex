import { Component, OnInit } from '@angular/core';
import { ServerConnectService } from '../server-connect.service';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from '../app-routing.module';
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

    constructor(private http: HttpClientModule, private serv: ServerConnectService, private rout: Router) {
        let loginStrg = window.localStorage.getItem('login-data')
        if (loginStrg) {
            if (loginStrg.length > 0 ) {
                this.rout.navigate(['workspace']);
            }
        }
    }

    ngOnInit() {
    }

    doLogin() {
        this.serv.loginToServer(this.usuario, this.senha).subscribe(
            ok => {
                this.dados = ok;
                window.localStorage.setItem('login-data', this.dados.usuario);
                this.rout.navigate(['workspace']);
                console.log(this.dados);
            },
            err => { console.log('Senha errada', err) }
        )

    }
}
