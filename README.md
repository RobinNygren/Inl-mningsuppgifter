Hänga gubbe - inlämningssuppgiftSyfte
Kunna applicera datalogiskt tänkande och gå från idé till kod
Visa förståelse och kunna använda sig av programmeringens byggstenar (variabler, villkor, funktioner, loopar etc)
Krav på funktionalitet
Du ska bygga det klassiska spelet hänga gubbe.
Det ska vara gjort med HTML/CSS/Javascript
Användaren ska kunna mata in med tangentbordet bokstäver
Användaren ska kunna se vilka bokstäver den gissar rätt på och var i ordet de hamnar
Vid varje fel ska en del av gubben visas
Ifall användaren gissar på rätt ord så ska en ”Du vann”-skärm visas med en fråga om man vill spela igen,
Ifall användaren inte hinner gissa rätt ska en ”Du förlorade”-skärm visas med det rätta ordet och en fråga om man vill spela igen.
Du ska enbart kunna gissa på en bokstav i taget.
Ordet får inte vara hårdkodat i Javascript-filen när den ska jämföras. Förslagsvis kan ordet slumpas från en array med ord.
Betygskriterier
Alla krav på funktionalitet är uppfyllda och följs.
Att SVG:en som bifogas i HTML:en används
Spelet fungerar med inga fel i konsolen i developer tools.
Vettiga namn på variabler och funktioner på engelska.
Inlämning via classroom
Länka till Git repository *deadline 17/ 10

_______________________________________________________________________________________________________________


#Plan
Skapa en array, en där du lägger in alla ord du vill ha.
Skapa en array som sparar felaktigt gissade bokstäver.
Slumpa fram ett ord ur en array.
Kontrollerar den gissade bokstaven, mot det rätta ordet.
Skapa en If-sats som kontrollerar om bokstaven finns i ordet.
Om If satsen är sann så har du gissat rätt och en bokstav syns i ordet.
Om If satsen inte är sann så hamnar den gissade bokstaven i en array och nästa del av bilden visas.
Skapa en funktion som slumpar ord ifrån våran array.
Skapa en funktion som kontrollerar ifall den gissade bokstaven är rätt eller fel.
Skapa en funktion som visar _ per antal bokstäver i ordet, och lägger till det rätt gissade bokstaven på rätt plats.
Skapa en funktion som uppdaterar bilden beroende på antalet felaktiga gissningar.
Skapa en funktion som kontrollerar ifall det slumpade ordet är komplett.
Skapa en funktion som startar och nollställer spelet, ska använda sig av slumpa funktionen, visa ordet funktionen och visa bokstaven funktionen.
Skapa popups när man vinner/förlorar med knapp som återställer spelet och gömmer pop upen.