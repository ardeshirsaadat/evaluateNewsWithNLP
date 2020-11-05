import { checkUrl } from "./checkUrl"
// get url
let geturl = function(){
    let url = document.getElementById('url').value
    return url
}
// confidece score analysis
let conf_score = function(score){
    if (score >=50){
        return "SURE"
    }
    else{
        return "NOT SURE"
    } 
}

function handleSubmit(event) {
    event.preventDefault()


    // check what text was put into the form field
    let formText = geturl()
    
    // checkUrl
    if (Client.checkUrl(formText)){

        console.log("::: Form Submitted :::")
        // post url to server
        fetch('http://localhost:8080/post',{
            method: "POST",
            // cache: "no-cache",
            credentials: "same-origin",
            headers: {
                "Content-Type": "application/json",
            },        
            body:JSON.stringify({'key':formText}),       
            
        })
        .then(res => res.json())
        .then(function(res) {
            console.log(res)
            console.log(conf_score(res.confidence))
            
            document.querySelector('.score').innerText = `Polarity:${res.score_tag}`;
            document.querySelector('.subj').innerText = `Subjectivity:${res.subjectivity}`;
            document.querySelector('.confidence').innerText = `Confidence Level:${conf_score(res.confidence)}`;
            document.querySelector('.irony').innerText = `Tone:${res.irony}`;

        })
}
else{
    console.log("invalid url")
}
}

export { handleSubmit,geturl,conf_score }
