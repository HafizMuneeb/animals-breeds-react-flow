export async function getAnimals() {
   

    const response = await fetch(`https://pets-v2.dev-apis.com/animals`);

    const result = await response.json();
    return result.animals
}
export async function getBreeds(country: String) {
   

    const response = await fetch(`https://pets-v2.dev-apis.com/breeds?animal=${country}`);

    const result = await response.json();
    return result.breeds.slice(0, 3)
}
