import { getGlanduRankForName } from "./glandu";

const nameInput = document.getElementById("name-input") as HTMLInputElement;
const checkButton = document.getElementById(
    "check-button"
) as HTMLButtonElement;
const outputSpan = document.getElementById("output-span") as HTMLSpanElement;

const checkGlanduRank = () => {
    const name = nameInput.value;
    const glanduRank = getGlanduRankForName(name);

    nameInput.value = "";
    outputSpan.innerText = `${name} est un ${glanduRank.title}`;
};

checkButton.addEventListener("click", checkGlanduRank);
nameInput.addEventListener("keypress", (e) => {
    if (e.code === "Enter") {
        checkGlanduRank();
    }
});
