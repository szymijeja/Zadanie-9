const obiekt1 = {
    nazwa: "Laptop",
    waga: 2.5,
    cena: 3500
};

const obiekt2 = {
    nazwa: "Telefon",
    waga: 0.2,
    cena: 2500
};

console.log("Obiekt numer 1 nosi nazwę: " + obiekt1.nazwa);
console.log("Obiekt numer 2 nosi nazwę: " + obiekt2.nazwa);

console.log("Oba obiekty w sumie ważą: " + (obiekt1.waga + obiekt2.waga));

if (obiekt1.cena > obiekt2.cena) {
    console.log("Droższym z nich jest obiekt nr: 1");
} else {
    console.log("Droższym z nich jest obiekt nr: 2");
}