import React from 'react'
import ReactDOM from 'react-dom'
import Header from './components/Header'
import TodoList from './components/TodoList'

/**
 * Arquivo principal App (constante)
 * 
 * @author Eduardo B. Rauta
 * @version 1.0.0
 * @license ISC
 * 
 * Importações:
 * React
 * React-DOM
 * Header - barra de titulo
 * TodoList - entrada de dados + lista
 * 
 * Entrada: function anônima ()
 * Saída: renderização total no arquivo public/index.html (div com id = root)
 */
const App = () => {
    return(
        <div>
            <Header />
            <TodoList />
        </div>
    )
}
ReactDOM.render(<App/>, document.getElementById('root'))