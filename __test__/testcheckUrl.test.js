// Import the js file to test

import { checkUrl } from "../src/client/js/checkUrl"
test('as expected',()=>{
    expect(checkUrl("https://www.hello.com")).toBeTruthy()
    expect(checkUrl("www.google.com")).toBeFalsy()
})