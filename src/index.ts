import { IAAgressiva, IADefensiva } from "./ai";
import { Soldado, Regimento } from "./units";

const iaAgressiva = new IAAgressiva();
const iaDefensiva = new IADefensiva();

const s1 = new Soldado("Arqueiro Alpha", iaAgressiva);
const s2 = new Soldado("Guardião Beta", iaDefensiva);

const pelotaoFrente = new Regimento("Pelotão de Choque");
pelotaoFrente.adicionar(s1);
pelotaoFrente.adicionar(s2);

const exercitoPrincipal = new Regimento("Exército Imperial");
exercitoPrincipal.adicionar(pelotaoFrente);
exercitoPrincipal.adicionar(new Soldado("Cavaleiro Real", iaAgressiva));

console.log("=== TESTE 1: EXÉRCITO ORIGINAL ===");
exercitoPrincipal.atacar();

console.log("\n=== TESTE 2: EXÉRCITO CLONADO (REFORÇO) ===");
const exercitoReforco = exercitoPrincipal.clone();
exercitoReforco.atacar();