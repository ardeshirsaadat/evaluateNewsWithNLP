function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('url').value
    // checkForName(formText)

    console.log("::: Form Submitted :::")
    // post url to server
    fetch('http://localhost:8080/post',{
        method: 'POST',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            "Content-Type":  'application/json',
          },
          body: JSON.stringify(formText),
          
    })
    .then(res => res.json())
    .then(function(res) {
        console.log(res)
    })
}

export { handleSubmit }
