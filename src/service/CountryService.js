export default class CountryService {
    getCountries() {
        return fetch('../../public/demo/data/countries.json')
            .then((res) => res.json())
            .then((d) => d.data);
    }
}
