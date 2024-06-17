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
}
