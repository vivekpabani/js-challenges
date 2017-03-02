
/*
  Logic:

  Reverse the encoding process.
  For every new character, current hash is multiplied with 37 and then index is added.
  So, in reverse process:
    extract the index of last char by hash modulo 37 and append the char of that index to answer.
    get the hash before this letter by dividing the hash by 37.
  Do this until hash becomes 7 (the default value)
  Return the reverse of answer, since all char are added from end to start to the answer.
*/

function encodeString(str) {

    var h = 7;
    var letters = ["a","c","d","e","g","i","l","m","n","o","p","r","s","t","u","w"];

    for (var i = 0; i < str.length; i++) {

        var letter = str[i];
        var index = letters.indexOf(letter);

        h = (h * 37) + index;
    }

    return h;
}

function decodeHash(hash) {

    var letters = ["a","c","d","e","g","i","l","m","n","o","p","r","s","t","u","w"];
    var answer = [],
        index;

    while (hash > 7) {

        index = hash % 37;
        answer.push(letters[index]);
        hash = Math.floor(hash/37);
    }

    return answer.reverse().join("");
}

function randomStr(letters) {

    var strLen = 0,
        str = "",
        randomInd = 0,
        limit = letters.length;
        i = 0;

    strLen = getRandomInt(0, 10);

    for (i = 0; i < strLen; ++i) {
        randomInd = getRandomInt(0, limit);
        str = str + letters[randomInd];
    }

    return str;
}

function getRandomInt(min, max) {

    min = Math.ceil(min);
    max = Math.floor(max);

    return Math.floor(Math.random() * (max - min)) + min;
}
