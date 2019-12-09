export  function addTodo(text) {
    return {
        type: 'ADD_TODO', // meu reducer vai ouvir e saber o que fazer
        text, // text: text ES6
    }

}
