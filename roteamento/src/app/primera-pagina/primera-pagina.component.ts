import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-primera-pagina',
  templateUrl: './primera-pagina.component.html',
  styleUrls: ['./primera-pagina.component.css']
})
export class PrimeraPaginaComponent {

  constructor(
    private router: Router 
  ) { }

  moverParaSegundaPagina(){
    this.router.navigate(["segunda-pagina"]);
  }

}
