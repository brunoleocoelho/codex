import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

@Injectable()
export class UserService {

    users = new Array<User>();
    constructor() {
        this.users.push(new User('test@test', '123', 0));
        this.users.push(new User('test2@test', '123', 1));
        this.users.push(new User('tes3@test', '123', 2));
        this.users.push(new User('tes4@test', '123', 3));
    }

    userAlreadyExists(email: string): boolean {
        const res = this.users.find(u => u.email === email);
        if (res !== null) {
            return true;
        }
        return false;
    }

    /** Verifica s se usuario existe */
    verifyUser(user: User){
        var achou = this.users.indexOf(user);
        if ( achou ) {
            return this,user[achou];
        }
    }
}
