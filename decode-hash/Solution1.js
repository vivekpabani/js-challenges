
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
