import getComputerInput from "../input/getComputerInput.js";
import getUserInput from "../input/getUserInput.js";

export default function gameEventHandler(play) {
  const $userSubmitButton = document.querySelector("#submit");
  const computerInput = getComputerInput(); //let���� �ٲ�� ������� �� ���Ҵ��� �� ���� ���̴�

  $userSubmitButton.addEventListener("click", (event) => {
    event.preventDefault(); // ������ ���ؼ� ��� ������ ���ΰ�ħ�� �ϴ� ���Ƶ�
    const userInput = getUserInput();
    if (userInput) play(computerInput, userInput);
  });
}