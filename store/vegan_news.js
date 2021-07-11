export const actions = {
    fetchVeganNews() {
        const myHeaders = new Headers();
        myHeaders.append("apikey", process.env.AKVN);

        var requestOptions = {
            method: "GET",
            redirect: "follow",
            headers: myHeaders
        };

        fetch("https://api.promptapi.com/vegan_news", requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log("error", error));
    }
};
