class ToDoService {
    
    baseUrl = "https://jsonplaceholder.typicode.com/todos/";

    getData(id) {
        return fetch(this.baseUrl + id).then(response => response.json());
    }
}