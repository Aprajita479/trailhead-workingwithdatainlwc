import { LightningElement, wire } from 'lwc';
import FirstName_FIELD from '@salesforce/schema/Contact.FirstName';
import LastName_FIELD from '@salesforce/schema/Contact.LastName';
import Email_FIELD from '@salesforce/schema/Contact.Email';
import getContacts from '@salesforce/apex/ContactController.getContacts';
import { reduceErrors } from 'c/ldsUtils';
const COLUMNS = [
    { label: 'First Name', fieldName: FirstName_FIELD.fieldApiName, type: 'text' },
    { label: 'Last Name', fieldName: LastName_FIELD.fieldApiName, type: 'text' },
    { label: 'Email', fieldName: Email_FIELD.fieldApiName, type: 'email' }
];
export default class ContactList extends LightningElement {
    columns = COLUMNS;
    @wire(getContacts)
    contacts;

    get errors() {
        return (this.contacts.error) ?
            reduceErrors(this.contacts.error) : [];
    }
}