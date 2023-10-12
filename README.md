# Inlamningsuppgifter

1. Skapa en array, en där du lägger in alla ord du vill ha.
2. Skapa en array som sparar felaktigt gissade bokstäver.
3. Slumpa fram ett ord ur en array.
4. Kontrollerar den gissade bokstaven, mot det rätta ordet.
5. Skapa en If-sats som kontrollerar om bokstaven finns i ordet.
6. Om If satsen är sann så har du gissat rätt och en bokstav syns i ordet.
7. Om If satsen inte är sann så hamnar den gissade bokstaven i en array och nästa del av bilden visas.
8. Skapa en funktion som slumpar ord ifrån våran array.
9. Skapa en funktion som kontrollerar ifall den gissade bokstaven är rätt eller fel.
10. Skapa en funktion som visar _ per antal bokstäver i ordet, och lägger till det rätt gissade bokstaven på rätt plats.
11. Skapa en funktion som uppdaterar bilden beroende på antalet felaktiga gissningar.
12. Skapa en funktion som kontrollerar ifall det slumpade ordet är komplett.
13. Skapa en funktion som startar och nollställer spelet, ska använda sig av slumpa funktionen, visa ordet funktionen och visa bokstaven funktionen.1. 14. Skapa en array, en där du lägger in alla ord du vill ha.
_______________________________________________________________________________________________________________________
Beskrivning

Slumpa Ord:
När användaren klickar på knappen "Slumpa ett ord och starta spelet!" slumpas ett ord från en array

Visa Ord:
Det slumpade ordet visas först som understreck, ett för varje bokstav i ordet. Detta visas i wordBox.

Gissning:
Användaren kan ange en bokstav i input fältet och klicka på knappen "Gissa!" för att gissa en bokstav i ordet.
Gissade bokstäver:
Gissade bokstäver sparas i en array för att kunna hålla koll på redan gjorda gissningar. Gissade bokstäver visas i guessedLetterBox.

Uppdatera Visat Ord:
Om användaren gissar rätt bokstav uppdateras strecken med de gissade bokstäverna på rätt positioner i wordBox.

Försök kvar:
Vid varje felaktig gissning minskas en räknare med antal försök kvar.

Visa Hangman:
För varje stekg som räknaren över försök kvar går ned så visas en ny del av HangMan
