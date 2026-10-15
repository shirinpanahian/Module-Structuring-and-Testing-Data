export function countChar(stringOfCharacters, findCharacter) {
  let count = 0;
  let position = stringOfCharacters.indexOf(findCharacter);

  while (position !== -1) {
    count++;
    position = stringOfCharacters.indexOf(findCharacter, position + 1);
  }

  return count;
}
