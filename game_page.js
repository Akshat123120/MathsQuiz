function send(){
    get_word = document.getElementById("word").value;
    wordings = get_word.toLowerCase();
    console.log("LowerCase - " + wordings);

    charAt1 = word.charAt(1)
    console.log(charAt1);

    divide = Math.floor(word.length/2);
    charAt2 = word.charAt(divide);
    console.log(charAt2)

    minus = word.length - 1;
    charAt3 = word.charAt(minus);
    console.log(charAt3)

    remove_charAt1 = word.replace(charAt1,"_");
    remove_charAt2 = remove_charAt1.replace(charAt2,"_");
    remove_charAt3 = remove_charAt2.replace(charAt3,"_");
    console.log(remove_charAt3);

    question_word = "<h4 id = 'word_display'> Q." + remove_charAt3 + "</h4>";
    input_box = "<br>Answer :<input type = 'text' id ='input'>";
    check_button = "</br></br><button class = 'btn btn-info' onclick ='check();'>Check</button>";
    row = question_word + input_box + check_button;
    document.getElementById("output").innerHTML = row;
    document.getElementById("word").value ="";
}

question_turn = "player1";
answer_turn = "player2";
