export default class customError {
    static createError(name,message,code){
        const error=new Error(message);
        error.name=name
        error.code=code
        console.log(error.name)
        console.log(error.code)
        console.log(error.message)
        throw error
    }
}
