export default class ExperienceService {
    getExperience() {
        return fetch('../../../public/demo/data/ProfileData/experience.json')
            .then((res) => res.json())
            .then((d) => d.data);
    }
}
