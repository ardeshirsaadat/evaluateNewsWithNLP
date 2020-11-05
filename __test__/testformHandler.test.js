import { conf_score } from "../src/client/js/formHandler"
test('we are sure',()=>{
    expect(conf_score(60)).toEqual("SURE")
    
})
test('we are sure',()=>{
    expect(conf_score(30)).not.toEqual("SURE")
    
})
test('we are sure',()=>{
    expect(conf_score(90)).toEqual("SURE")
    
})
test('we are sure',()=>{
    expect(conf_score(100)).toEqual("SURE")
    
})
test('we are sure',()=>{
    expect(conf_score(0)).not.toEqual("SURE")
    
})