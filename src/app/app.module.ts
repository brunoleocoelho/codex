import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';   
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ServerConnectService } from './server-connect.service';
import { WorkspaceComponent } from './workspace/workspace.component';

/** Rotas da aplicação */
const routes: Routes = [
    { 
        path: 'login', 
        component: LoginComponent 
    },
    { 
        path: 'cadastro', 
        component: CadastroComponent 
    },
    { 
        path: 'home', 
        component: LandingPageComponent 
    },
    { 
        path: 'workspace', 
        component: WorkspaceComponent 
    },
    { 
        path: '', 
        component: LandingPageComponent 
    },
    { 
        path: '**', 
        component: PageNotFoundComponent 
    }
];

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    CadastroComponent,
    LoginComponent,
    PageNotFoundComponent,
    WorkspaceComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
      ServerConnectService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
