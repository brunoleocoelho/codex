import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class ServerConnectService {

    /** URLs do serviço da API */
    host     = "http://localhost/codex";

    constructor(public http: HttpClient) { }

    /** Efetua o login do usuário via POST */
    loginToServer(usr, pwd) {
        let url = this.host + '/login.php'; //?usuario='+ usr + "&senha="+pwd;
        console.log("Usr", usr);
        console.log("Pwd", pwd);
        let params = new HttpParams();
        params.append('usuario', usr);
        params.append('senha', pwd);
        console.log("HttpHeaders: ", params);
    
        return this.http.post(url, {params});
    }

    /** Busca os projetos na base*/
    getProjects() {
        let url = this.host + '/projetoslista.php'; //?usuario='+ usr + "&senha="+pwd;    
        return this.http.get(url);
    }
}
