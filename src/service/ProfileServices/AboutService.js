export default class AboutService {
    getAbout() {
        return fetch('../../../public/demo/data/ProfileData/about.json')
            .then((res) => res.json())
            .then((d) => d.data);
    }
}
