// Import the js file to test

import { checkUrl } from "../src/client/js/checkUrl"
test('as expected',()=>{
    expect(checkUrl("https://www.hello.com")).toBeTruthy()
    expect(checkUrl("www.google.com")).toBeFalsy()
})
test('as expected',()=>{
    expect(checkUrl("https://www.google.com")).toBeTruthy()
    expect(checkUrl("https ://www.google.com")).toBeFalsy()
})
test('as expected',()=>{
    expect(checkUrl("https://www.bing.com")).toBeTruthy()
    expect(checkUrl("https:\\www.bing.com")).toBeFalsy()
})
test('as expected',()=>{
    expect(checkUrl("https://www.gmail.com")).toBeTruthy()
    expect(checkUrl("www.http://www.k.com")).toBeFalsy()
})
test('as expected',()=>{
    expect(checkUrl("https://www.udacity.com")).toBeTruthy()
    expect(checkUrl("https:/www.bing.com")).toBeFalsy()
})