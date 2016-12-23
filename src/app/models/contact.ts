export class Contact {
    public _id: string;
    public firstName: string;
    public lastName: string;
    public phoneNumber: string;
    public address: string;
    constructor(_id: string,
        firstName: string,
        lastName: string,
        phoneNumber: string,
        address: string,
        __v?: number) {
        this._id = _id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.phoneNumber = phoneNumber;
        this.address = address;
    }
}
