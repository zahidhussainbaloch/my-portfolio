export default class CertificateService {
    getCertificates() {
        return fetch('../../../public/demo/data/Work/certificates.json')
            .then((res) => res.json())
            .then((d) => d.data);
    }
}
