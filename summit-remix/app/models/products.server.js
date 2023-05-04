export async function getProducts () {
    const response = await fetch(`${process.env.API_URL}/equipment?populate=image`)
    const result = await response.json()
    return result
}

export async function getProduct(url){
    const response = await fetch(`${process.env.API_URL}/equipment?filters[url]=${url}&populate=image`)
    const JSON = await response.json();
    console.log(JSON)
    return JSON

}