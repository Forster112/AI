function talk(){
    let know ={
        "Hi":"Hello",
        "How Are You?":"Great !",
        "Bye":"Have A Nice Day !",
        "Hello":"Hi , Whats Up",
        "Good morning":"Morning",
        "How was your night":"Great",
        "Good evening":"How was your day",
        "My day is fine":"That's awesome",
        "Not good":"Whats wrong! What happen",
        "Had a long day":"Just take it easy"
    };
    let user = document.getElementById('userBox').value;
    document.getElementById('chatLog').innerHTML = user + "<br>";
    if(user in know){
        document.getElementById('chatLog').innerHTML = know[user] + "<br>";
    }else{
        document.getElementById('chatLog').innerHTML = "I do not understand .";
    }
}