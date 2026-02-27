export default class ProjectService {
    getProjects() {
        return fetch('../../public/demo/data/Work/projects.json')
            .then((res) => res.json())
            .then((d) => d.data);
    }
}
