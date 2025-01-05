// Tato funkce se spustí automaticky po načtení celé stránky
window.onload = function() {
    // Získání čísel které uživatel zadal a vysledku
    var vstup1 = document.getElementById("vstup1");
    var vstup2 = document.getElementById("vstup2");
    var vysledek = document.getElementById("vysledek");

    // Tlačítko pro sčítání
    document.getElementById("tlPlus").onclick = function() {
        var cislo1 = parseFloat(vstup1.value);
        var cislo2 = parseFloat(vstup2.value);
        // Ověřění jestli uživatel zadal číslo
        if (isNaN(cislo1) || isNaN(cislo2)) {
            vysledek.innerHTML = "Chyba: Zadejte platná čísla!";
        } else {
            vysledek.innerHTML = cislo1 + cislo2;
        }
    };

    // Tlačítko pro odčítání
    document.getElementById("tlMinus").onclick = function() {
        var cislo1 = parseFloat(vstup1.value);
        var cislo2 = parseFloat(vstup2.value);
        // Ověřění jestli uživatel zadal číslo
        if (isNaN(cislo1) || isNaN(cislo2)) {
            vysledek.innerHTML = "Chyba: Zadejte platná čísla!";
        } else {
            vysledek.innerHTML = cislo1 - cislo2;
        }
    };

    // Tlačítko pro násobení
    document.getElementById("tlKrat").onclick = function() {
        var cislo1 = parseFloat(vstup1.value);
        var cislo2 = parseFloat(vstup2.value);
        // Ověřění jestli uživatel zadal číslo
        if (isNaN(cislo1) || isNaN(cislo2)) {
            vysledek.innerHTML = "Chyba: Zadejte platná čísla!";
        } else {
            vysledek.innerHTML = cislo1 * cislo2;
        }
    };

    // Tlačítko pro dělení
    document.getElementById("tlDeleno").onclick = function() {
        var cislo1 = parseFloat(vstup1.value);
        var cislo2 = parseFloat(vstup2.value);
        if (isNaN(cislo1) || isNaN(cislo2)) {
            vysledek.innerHTML = "Chyba: Zadejte platná čísla!";
        } 
        // Ověření jestli se nedělí nulou
        else if (cislo2 === 0) {
            vysledek.innerHTML = "Chyba: Nelze dělit nulou!";
        } else {
            vysledek.innerHTML = cislo1 / cislo2;
        }
    };
};
