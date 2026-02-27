export default class EducationService {
    getEducation() {
        return fetch('../../../public/demo/data/ProfileData/education.json')
            .then((res) => res.json())
            .then((d) => d.data);
    }
}
