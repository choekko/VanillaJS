const ENDPOINT = 'https://jsonplaceholder.typicode.com/'

const getPosts = async() => {
    const url = ENDPOINT + 'posts'
    try {
        let response = await fetch(url);
        if (!response.ok) {
            throw new Error('서버 상태 이상')
        }
        else {
            return await response.json();
        }
    } catch (e) {
        console.log(e);
    }
}

export default getPosts;