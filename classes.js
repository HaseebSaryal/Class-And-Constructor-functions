
class User {
    constructor(username, id, email, password){
        this.username = username
        this.id = id
        this.email = email
        this.password = password
    }
    login(){
        return `${this.username} has just logged In`
    }
    // In this code "static keyword is used to encrypt data it will not allow anyone to access id or something "
    encryption(){
        return `123`
    }
}
const userss = new User("Faisal", 123, "@gma.", "q23")
// console.log(userss.encryption())

class Teacher extends User{
    constructor(userid, password){  
// by using "super" keyword we can access above values which is written after extends
        super(password)
        this.userid  = userid
        this.password = password
    }

    getPass(){
        return `user pass is: ${this.password}`
    }
    
}
const tedata = new Teacher("we", "akljfdlsj")
console.log(tedata.getPass())