import { Injectable } from '@angular/core';
import { User, Skills } from '../models/user.model';

@Injectable()
export class UserService {

    users: Array<User>;

    constructor() {

        let usrList: Array<User> = JSON.parse(window.localStorage.getItem('usersList'));
        if (usrList === null) {
            this.users = new Array<User>();
            this.users.push(new User('test@test', '123', 0));
            this.users.push(new User('test2@test', '123', 1));
            this.users.push(new User('tes3@test', '123', 2));
            this.users.push(new User('tes4@test', '123', 3));
            window.localStorage.setItem('usersList', JSON.stringify(this.users));
        }
        else {
            this.users = usrList;
        }

        console.log("UserService.users:", this.users);

    }

    userAlreadyExists(email: string): boolean {
        const res = this.users.find(u => u.email === email);
        if (res !== null) {
            return true;
        }
        return false;
    }

    /** Verifica s se usuario existe */
    verifyUser(user: User): User{
        // var achou = this.users.indexOf(user);
        var achou = this.users.findIndex( x => x.email == user.email);
        if ( achou != null ) {
            return this.users[achou];
        }
    }

    /** Adiciona capacidade/especialidade */
    addNewSkill(id, skill: Skills){
        this.users[id].skills.push(skill);
        let usr = this.users[id];
        console.log("USRSERVICE USR", usr);
        window.localStorage.setItem('user', JSON.stringify(usr));
        window.localStorage.setItem('usersList', JSON.stringify(this.users));
        this.users =  JSON.parse(window.localStorage.getItem('usersList'));
    }
}
