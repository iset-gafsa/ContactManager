export class Contact{

    firstName:string;
    lastName:string;
    email:string;
    type:"Freind"|"Work"|"Family";
    description:string;
    phone:string;

    constructor(firstName,lastName,email,type,description,phone){
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.type = type;
        this.description = description;
        this.phone = phone;
    }
}