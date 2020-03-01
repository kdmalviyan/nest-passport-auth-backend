import { Document } from 'mongoose';
export class User extends Document {
    readonly fname: String;
    readonly lname: String;
    readonly role: String;
    readonly password: String;
    readonly email: String;
}