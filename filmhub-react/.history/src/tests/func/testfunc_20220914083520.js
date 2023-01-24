import { func } from "./func"


test('func test', ()=> {
    expect(func(4)+2*func(23)-func(25)).toBe(1)
})

test('return incorrect', ()=> {
    expect(func(4)+2*func(23)-func(25)).not.toBe(1)
})