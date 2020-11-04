function checkUrl(url){
    const valid_url_regex = /^(ftp|http|https):\/\/[^ "]+$/;
    if (valid_url_regex.test(url)){
        return true
    }
    else{
        return false
    }
}
export{checkUrl}