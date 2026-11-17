// 9. Saudação pelo horário. Leia hora e minuto. Valide se o horário existe. Se existir, exiba Boa madrugada, Bom dia, Boa tarde ou Boa noite.

const hour = Number(prompt("Hora (0 a 23):"));
const minute = Number(prompt("Minuto (0 a 59):"));

if (
    Number.isInteger(hour) &&
    Number.isInteger(minute) &&
    hour >= 0 &&
    hour <= 23 &&
    minute >= 0 &&
    minute <= 59
) {
    if (hour < 5) {
        console.log("Boa madrugada");
    } else if (hour < 12) {
        console.log("Bom dia");
    } else if (hour < 18) {
        console.log("Boa tarde");
    } else {
        console.log("Boa noite");
    }
} else {
    console.log("Horário inválido");
}