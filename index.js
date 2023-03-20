/*Importación de clases*/
import {Cliente} from './Cliente.js'
import {CuentaCorriente} from './Cuentas/CuentaCorriente.js';
import {CuentaAhorro} from './Cuentas/CuentaAhorro.js';
import { CuentaNomina } from './Cuentas/CuentaNomina.js';
import { Gerente } from './empleados/Gerente.js';
import { Empleado } from './empleados/Empleado.js';
import { Director } from './empleados/Director.js';

const cliente = new Cliente('Leonardo','13804050','123224');
const cliente2 = new Cliente('María','16979808','8989');

const empleado = new Empleado('Juan Perez', '23232323', '10000');
const gerente = new Gerente('Pedro Rivas', '432342323', '12000');
const director = new Director('Elena Moreno', '2121212', '20000');

console.log(empleado.verBonificacion());
console.log(gerente.verBonificacion());
console.log(director.verBonificacion());




