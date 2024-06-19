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
  carrinhoGlobal = [
    { nome: "Caneta", qtde: 10, preco: 7.99 },
    { nome: "Impressora", qtde: 0, preco: 649.5 },
    { nome: "Caderno", qtde: 4, preco: 27.1 },
    { nome: "Lapis", qtde: 3, preco: 5.82 },
    { nome: "Tesoura", qtde: 1, preco: 19.2 },
  ];

  arrowFuc?: string;
  fileContent: any = null;

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
  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (!input.files?.length) {
      return;
    }
    const file = input.files[0];
    const reader = new FileReader();
    reader.onload = (e) => {
      this.fileContent = e.target?.result;
    };

    reader.readAsText(file);
  }
  // ==========================================================================================
  funcaoMapear() {
    let array = [3, 2, 4, 5, 6, 3];
    const dobrar = (n: number, i: number, a: number[]) => n * 2 + i + a.length;
    console.log(array.map(dobrar));

    let nomes = ["Alice", "Bruno", "Carla"];
    const first = (texto: string) => texto[0];
    console.log(nomes.map(first));

    const carrinho = [
      { nome: "Caneta", qtde: 10, preco: 7.99 },
      { nome: "Impressora", qtde: 0, preco: 649.5 },
      { nome: "Caderno", qtde: 4, preco: 27.1 },
      { nome: "Lapis", qtde: 3, preco: 5.82 },
      { nome: "Tesoura", qtde: 1, preco: 19.2 },
    ];
    const nomesItem = (item: any) => item.nome;
    const precoPorQtde = (item: any) => item.qtde * item.preco;
    console.log(carrinho.map(nomesItem), carrinho.map(precoPorQtde));
    console.log("teste ->", this.mapPropio(carrinho, nomesItem));
  }
  //=========================================================================================
  //Map Construcao
  mapPropio(array: any[], fn: any) {
    const novoArray: any[] = [];
    for (let i = 0; i < array.length; i++) {
      novoArray.push(fn(array[i], i, array));
    }
    return novoArray;
  }
  //===========================================================================================
  funcaoFiltrar() {
    const array = [3, 2, 5, 6, 8, 4, 1];
    const indPar = (item: number) => item % 2 == 0;
    console.log(array.filter(indPar));
    const nomesItensValidos = (item: any) => item.qtde > 0;
    console.log(
      this.carrinhoGlobal.filter(nomesItensValidos).map((item) => item.nome)
    );
  }
}
