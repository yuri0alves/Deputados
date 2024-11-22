import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Deputado } from '../model/deputado';
import { DeputadosService } from '../model/deputados.service';

@Component({
  selector: 'app-deputados',
  templateUrl: './deputados.component.html',
  styleUrl: './deputados.component.css'
})
export class DeputadosComponent {
  formBusca: FormGroup
  deputado: Deputado[]
  constructor(private fb: FormBuilder, 
              private fs: DeputadosService
  ) {
    this.formBusca = this.fb.group({
      nome: ['', [Validators.required, 
                    Validators.minLength(2)]
              ]
    })

    this.deputado = []
  }
  buscar() {
    const nome = this.formBusca.value.nome
    this.fs.buscarDeputadoPorNome(nome).subscribe(
      res => {
        this.deputado = res.dados
      }
    )
  }
}
