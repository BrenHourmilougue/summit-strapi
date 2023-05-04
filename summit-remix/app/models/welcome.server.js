export async function getWelcome(){
    const response = await fetch(`${process.env.API_URL}/welcome-post?populate=image`)
    const JSON = await response.json()
    // console.log(JSON) funca OK
    return JSON
}