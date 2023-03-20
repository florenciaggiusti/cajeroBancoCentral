import { Cuenta } from './Cuenta.js';
import { Cliente } from "./Cliente.js";

export class CuentaCorriente extends Cuenta {
  static cantidadCuentas = 0;

  constructor(cliente, numero, agencia) {
    super(cliente,numero,agencia,0);
    CuentaCorriente.cantidadCuentas++;
  }

  retirarDeCuenta(valor) {
    valor = valor * 1.05;
    super.retirarDeCuenta(valor);
  }
}