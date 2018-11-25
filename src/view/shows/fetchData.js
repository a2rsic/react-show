import BASE_ENDPOINT from "../../shared/base_url";
import Show from "../../entities/Show";

const fetchData = () => {
    return fetch(BASE_ENDPOINT)
        .then(response => {
            return response.json()
        })
        .then((data) => {
            return data.slice(0, 50)
        })
        .then(data => {
            const showData = data.map(data => {
                return new Show(data.image, data.name, data.id)
            })

            return showData;
        })
}

export { fetchData }