async function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = "Data fetched!";
            if (!data) {
                resolve(data);
            } else {
                reject("No data fetched!");
            }
        }, 100);
    });
}

async function displayData() {
    try {
        const data = await fetchData();
        console.log(".then: ", data);
    } catch (error) {
        console.error("Error: ", error);
    }
}

displayData();
