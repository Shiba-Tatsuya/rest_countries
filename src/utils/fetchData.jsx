

export const fetchData = async (url)=> {
    const res= await fetch(url);
    var data = await res.json();

    return data;
}