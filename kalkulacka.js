window.onload = function() {
    var vstup1 = document.getElementById("vstup1");
    var vstup2 = document.getElementById("vstup2");
    var vysledek = document.getElementById("vysledek");

    document.getElementById("tlPlus").onclick = function() {
        var cislo1 = parseFloat(vstup1.value);
        var cislo2 = parseFloat(vstup2.value);
        if (isNaN(cislo1) || isNaN(cislo2)) {
            vysledek.innerHTML = "Chyba: Zadejte platná čísla!";
        } else {
            vysledek.innerHTML = cislo1 + cislo2;
        }
    };

    document.getElementById("tlMinus").onclick = function() {
        var cislo1 = parseFloat(vstup1.value);
        var cislo2 = parseFloat(vstup2.value);
        if (isNaN(cislo1) || isNaN(cislo2)) {
            vysledek.innerHTML = "Chyba: Zadejte platná čísla!";
        } else {
            vysledek.innerHTML = cislo1 - cislo2;
        }
    };

    document.getElementById("tlKrat").onclick = function() {
        var cislo1 = parseFloat(vstup1.value);
        var cislo2 = parseFloat(vstup2.value);
        if (isNaN(cislo1) || isNaN(cislo2)) {
            vysledek.innerHTML = "Chyba: Zadejte platná čísla!";
        } else {
            vysledek.innerHTML = cislo1 * cislo2;
        }
    };

    document.getElementById("tlDeleno").onclick = function() {
        var cislo1 = parseFloat(vstup1.value);
        var cislo2 = parseFloat(vstup2.value);
        if (isNaN(cislo1) || isNaN(cislo2)) {
            vysledek.innerHTML = "Chyba: Zadejte platná čísla!";
        } else if (cislo2 === 0) {
            vysledek.innerHTML = "Chyba: Nelze dělit nulou!";
        } else {
            vysledek.innerHTML = cislo1 / cislo2;
        }
    };
};
