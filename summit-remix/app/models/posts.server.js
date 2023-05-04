export async function getPosts () {
    const response = await fetch(`${process.env.API_URL}/posts?populate=image`)
    const result = await response.json()
    console.log(result)
    return result
}

export async function getPost(url){
    const response = await fetch(`${process.env.API_URL}/posts?filters[url]=${url}&populate=image`)
    const JSON = await response.json();
    console.log(JSON)
    return JSON

}