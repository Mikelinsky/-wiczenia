prompt('Spytaj wyrocznię o zdanie.')
var answerList = [
    'Koniecznie to zrób!',
    'Przemyśl to jeszcze, a potem zrób',
    'Nie ma próbowania, jest robienie',
    'To kiepski pomysł',
    'To jeszcze nie czas, zrób to w przyszłości',
    'Pomelo je się w kuchni'];

var value = Math.floor(Math.random() * 6);

alert('Twoja odpowiedź brzmi: ' + answerList[value]);

