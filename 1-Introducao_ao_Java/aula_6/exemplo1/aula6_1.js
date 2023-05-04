const nome = "Davi Vidal";
const dataNascimento = "2005-06-22";
const anoAtual = new Date().getFullYear();
const dataNascimentoTipoDate = new Date(dataNascimento);
const momentoAtual = new Date();
let proximoAniversario =
  momentoAtual.getMonth() > dataNascimentoTipoDate.getMonth() ||
  (momentoAtual.getMonth() === dataNascimentoTipoDate.getMonth() &&
    momentoAtual.getDay() >= dataNascimentoTipoDate.getDay())
    ? new Date(`${anoAtual + 1}-06-22`)
    : new Date(`${anoAtual}-06-22`);

const diasAteProximoAniversario = Math.floor(
  (proximoAniversario.getTime() - momentoAtual.getTime()) /
    (1000 * 60 * 60 * 24)
);
console.log(`${nome}, seu próximo aniversário é em ${diasAteProximoAniversario} dias`);
