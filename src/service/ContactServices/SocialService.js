export default class SocialService {
    getSocialLinks() {
        return fetch('../../../../public/demo/data/ContactData/social.json')
            .then((res) => res.json())
            .then((d) => d.data);
    }
}
