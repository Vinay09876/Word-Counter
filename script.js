function wordCount() {
    let inputTxt = document.getElementById("inputBox");
    let words = getWordCount(inputTxt.value);
    document.getElementById("words").value = words;
    counter(inputTxt.value);
}


function getWordCount(str) {
    let splited = str.trim().split(/\s+/);
    console.log(splited);
    if (splited == '') {
        return 0;
    }
    return splited.length;
}


function counter(str) {
    let charCount = 0;
    let alphaCount = 0;
    let numsCount = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] != " " && str[i] != "\n") {
            charCount++;
        }
        if ((str[i] >= 'a' && str[i] <= 'z') || (str[i] >= 'A' && str[i] <= 'Z')) {
            alphaCount++;
        }
        else if (str[i] >= "0" && str[i] <= "9") {
            numsCount++;
        }
    }
    document.getElementById("chars").value = charCount;
    document.getElementById("alpha").value = alphaCount;
    document.getElementById("nums").value = numsCount;
}
