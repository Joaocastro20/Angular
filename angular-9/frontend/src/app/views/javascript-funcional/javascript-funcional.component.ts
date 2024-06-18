import { Component, OnInit } from "@angular/core";
import { Formulario } from "./javascript-funcional.model";

@Component({
  selector: "app-javascript-funcional",
  templateUrl: "./javascript-funcional.component.html",
  styleUrls: ["./javascript-funcional.component.css"],
})
export class JavascriptFuncionalComponent implements OnInit {
  formulario: Formulario = {
    numero1: 0,
    numero2: 0,
    resultado: 0,
  };

  arrowFuc?: string;
  fileContent: any= null

  constructor() {}

  ngOnInit(): void {}

  calcular(y: any) {
    return function (x: any) {
      return function (fn: any) {
        return fn(y, x);
      };
    };
  }

  adicionar(x: number, y: number) {
    return x + y;
  }
  subtrair(x: number, y: number) {
    return x - y;
  }
  mutiplicar(x: number, y: number) {
    return x * y;
  }
  dividir(x: number, y: number) {
    return x / y;
  }

  onClickCaucular() {
    this.formulario.resultado = this.calcular(this.formulario.numero1)(
      this.formulario.numero2
    )(this.adicionar);
  }
  //========================================================================================
  onArrowFunction() {
    const teste = (teste?: string) => (this.arrowFuc = ` -> ${2 * 2}`);
    teste();

    //   Array.prototype.ultimo = function () {
    //     console.log(this[this.length - 1]);
    // }
    // const numeros = [1, 2, 3, 4, 5];
    // numeros.ultimo();
  }

  // =========================================================================================

  protected exec(fn: any, a: number | null, b: number | null) {
    return fn(a, b);
  }

  onExecSomar() {
    this.formulario.resultado = this.exec(
      this.adicionar,
      this.formulario.numero1,
      this.formulario.numero2
    );
  }

  onExecSub() {
    this.formulario.resultado = this.exec(
      this.subtrair,
      this.formulario.numero1,
      this.formulario.numero2
    );
  }
  // =========================================================================================
  onFileSelected(event: Event){
    const input = event.target as HTMLInputElement;
    if(!input.files?.length){
      return;
    }
    const file = input.files[0];
    const reader = new FileReader();
    reader.onload = (e) => {
      this.fileContent = e.target?.result;
    };

    reader.readAsText(file)
  }
}
