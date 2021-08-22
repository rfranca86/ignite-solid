import * as CreateUserController from "./CreateUserController"
import * as CreateUserUseCase from "./CreateUserUseCase"

// @ponicode
describe("handle", () => {
    let inst: any
    let inst2: any

    beforeEach(() => {
        inst = new CreateUserUseCase.CreateUserUseCase({})
        inst2 = new CreateUserController.CreateUserController(inst)
    })

    test("0", () => {
        let callFunction: any = () => {
            inst2.handle(undefined, undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
