export default class ClientService {
    getClients() {
        return fetch('../../public/demo/data/Work/clients.json')
            .then((res) => res.json())
            .then((d) => d.data);
    }
}
