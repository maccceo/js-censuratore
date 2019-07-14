// CENSURATORE
// - Il software riceve in input un lungo testo e una serie di parole da censurare.
// - Restituisce il testo con xxx al posto delle parole censurate.
// - Stampa un “badword index” calcolato come il numero di parole censurate su il numero di parole totali

// # MODALITA' CON INSERIMENTO TRAMITE VARIABILE
// var text = 'Ora non ci sono più dubbi: il circuito di Silverstone continuerà a fare parte del Mondiale di Formula 1. "È il circuito che ha ospitato il primissimo Gran Premio del Campionato del Mondo nel 1950  - si legge nel comunicato ufficiale della Formula 1 - e ora siamo lieti di annunciare che Silverstone continuerà ad essere sede del Gran Premio di Gran Bretagna almeno fino alla fine del 2024". Si tratta dunque di un accordo quinquennale firmato a Londra nella giornata del 9 luglio tra la Formula 1, il British Racing Drivers Club e il Circuito di Silverstone. "Siamo davvero lieti di dare questa notizia", ha detto Chase Carey, Chairman e CEO della Formula 1. "Abbiamo sempre detto che, se vogliamo avere un futuro a lungo termine, il nostro sport deve preservare le sue sedi storiche e Silverstone e la Gran Bretagna rappresentano la culla di questo sport. Oggi la Formula 1 è un sport globale, che si tiene in cinque continenti, guardato da un pubblico di oltre 500 milioni di fan e il nostro obiettivo è quello di far crescere questo numero portando lo sport che amiamo in nuovi paesi, pur mantenendo le sue radici: Silverstone e il Gran Premio di Gran Bretagna sono parte integrante di quella visione".';

// var badWords = ['futuro', 'Chase Carey', 'sport', '500', 'Silverstone', 'circuito', 'visione', 'Gran Bretagna'];

// # MODALITA' CON INSERIMENTO PROMPT
var allClear = false;

var text = prompt("Inserisci il testo da censurare:");
//controllo che l'utente abbia inserito qualcosa
while (allClear == false) {
	if (!text)		text = prompt("Inserisci il testo da censurare:");
	else 			allClear = true;
}
allClear = false;

var badWords = prompt("Inserisci le parole da censurare separate da uno spazio:");
//controllo che l'utente abbia inserito qualcosa
while (allClear == false) {
	if (!badWords)  {
		badWords = prompt("Inserisci le parole da censurare separate da uno spazio:");
	} else {
		allClear = true;
	} 			
}

badWords = badWords.split(' ');

var textCensured = censorizer(text,badWords);
console.log('Parole da censurare: ' + badWords);
console.log('Censurate ' + textCensured.counter + ' parole.');
console.log(textCensured.textCensured);





// # # FUNZIONI # #
function censorizer (text, badWords) {
	var textToCensor = text;		//copia per mantenere il testo originale integro in "text"
	var xxx;
	var counter = 0;
	var result = {};

	// censuro ad una a una le parole che non vogliamo appaiano
	for (var i = 0; i < badWords.length; i++) {
		xxx = xxxGenerator(badWords[i].length);

		//conta il numero di volte che appare la parola da cancellare
		counter += textToCensor.split(badWords[i]).length - 1;
		textToCensor = textToCensor.split(badWords[i]).join(xxx);
	}
	result.textCensured = textToCensor;
	result.counter = counter;
	return result;
}


// genera stringa di "X" della lunghezza di length
function xxxGenerator (length) {
	var xxx = 'X';
	for (var i = 1; i < length; i++) {
		xxx += 'X';
	}
	return xxx;
}