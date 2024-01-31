import { getGlanduRankForName } from "./glandu";

const nameInput = document.getElementById("name-input") as HTMLInputElement;
const checkButton = document.getElementById(
    "check-button"
) as HTMLButtonElement;
const outputSpan = document.getElementById("output-span") as HTMLSpanElement;

const isBlank = (str: string) => !str || /^\s*$/.test(str);

const checkGlanduRank = () => {
    const name = nameInput.value;

    if (isBlank(name)) {
        return;
    }

    const glanduRank = getGlanduRankForName(name);

    nameInput.value = "";
    outputSpan.innerText = glanduRank.describe(name);
};

checkButton.addEventListener("click", checkGlanduRank);
nameInput.addEventListener("keypress", (e) => {
    if (e.code === "Enter") {
        checkGlanduRank();
    }
});
