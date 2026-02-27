export default class ContactService {
    getContactInfo() {
        return fetch('../../public/demo/data/ContactData/contact.json')
            .then((res) => res.json())
            .then((d) => d.data);
    }
}
