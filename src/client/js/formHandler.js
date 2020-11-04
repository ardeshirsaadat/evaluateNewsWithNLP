function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('url').value
    
    // checkForName(formText)

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
        
        
        document.querySelector('.score').innerText = res.score_tag;
        document.querySelector('.subj').innerText = res.subjectivity;
        document.querySelector('.confidence').innerText = res.confidence;
        document.querySelector('.irony').innerText = res.irony;

    })
}

export { handleSubmit }
