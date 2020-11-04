import { checkUrl } from "./checkUrl"
let geturl = function(){
    let url = document.getElementById('url').value
    return url
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
            
            
            document.querySelector('.score').innerText = `Polarity:${res.score_tag}`;
            document.querySelector('.subj').innerText = `Subjectivity:${res.subjectivity}`;
            document.querySelector('.confidence').innerText = `Confidence Level:${res.confidence}`;
            document.querySelector('.irony').innerText = `Tone:${res.irony}`;

        })
}
else{
    console.log("invalid url")
}
}

export { handleSubmit,geturl }
