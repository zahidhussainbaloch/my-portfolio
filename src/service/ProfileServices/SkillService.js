export default class SkillService {
    getSkills() {
        return fetch('../../../public/demo/data/ProfileData/skills.json')
            .then((res) => res.json())
            .then((d) => d.data);
    }
}
