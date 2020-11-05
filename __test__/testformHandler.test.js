import { conf_score } from "../src/client/js/formHandler"
test('we are sure',()=>{
    expect(conf_score(60)).toEqual("SURE")
    
})