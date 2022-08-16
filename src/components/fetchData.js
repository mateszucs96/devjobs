export const fetchData = async () => {
    const port = process.env.PORT || 3000;

    const res = await fetch(`http://localhost:${port}/data/data1.json`)
    const data = await res.json();
    console.log(data)
    return data;
}

