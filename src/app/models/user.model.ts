export class User {
    email: string;
    password: string;
    passwordComfirm: string;
    id: number;
    skills = new Array<Skills>();
    projects = new Array<Project>();
    otherProjects = new Array<Project>();

    constructor(email?: string,
                password?: string,
                id?: number) {
        this.id = id;
        this.email = email;
        this.password = password;

    }
}

export class Skills {
    name: string;
    id: number;
}

export class Project {
    name: string;
    description: string;
    skills: Array<string>;
    skill: string;
}
