export class Contact{
    id:number;
    firstName:string;
    lastName:string;
    email:string;
    type:"Friend"|"Work"|"Family";
    description:string;
    phone:string;

    constructor(id,firstName,lastName,email,type,description,phone){
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.type = type;
        this.description = description;
        this.phone = phone;
    }
}