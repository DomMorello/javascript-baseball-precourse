import getComputerInput from "../input/getComputerInput.js";
import getUserInput from "../input/getUserInput.js";

export default function playGame(play) {
  const $userSubmitButton = document.querySelector("#submit");
  const computerInput = getComputerInput();

  $userSubmitButton.addEventListener("click", (event) => {
    event.preventDefault(); // ������ ���ؼ� ��� ������ ���ΰ�ħ�� �ϴ� ���Ƶ�
    const userInput = getUserInput();
    if (userInput) play(computerInput, userInput);
  });
}