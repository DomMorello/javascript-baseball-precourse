function isRightAnswer(computerInput, userInput) {
  return computerInput === userInput;
}

export default function getGameResult(computerInput, userInput) {
  if (isRightAnswer(computerInput, userInput)) return "����";
  return "����� �����";
}