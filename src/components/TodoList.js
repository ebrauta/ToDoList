import React from 'react'
import './styles.css'

/**
 * Arquivo TodoList (class)
 * 
 * @author Eduardo B. Rauta
 * @version 1.0.0
 * @license ISC
 * 
 * Importações: 
 * React
 * styles.css - estilos CSS aplicados em todos os componentes
 * 
 * Entrada: (state inicial)
 * items da lista
 * 
 * Saída: classe TodoList 
 */
class TodoList extends React.Component {
    constructor(props) {
      super(props);
      this.state = {items: ['Ir à farmácia', 'Ir ao supermercado', 'Ir ao médico']};
  
      this.handleAdd = this.handleAdd.bind(this);
      this.handleRemove = this.handleRemove.bind(this);
      this.input = React.createRef();
    }
    /**
     * Função handleAdd - Insere os items novos na lista
     * 
     * Verifica inicialmente se o valor é vazio (caso afirmativo, dispara um alert)
     * Caso contrário, verifica a lista se já há alguma item igual ao valor (caso afirmativo contabiliza no count)
     * Verifica se o count é 0 (ou seja, o item não está na lista) e insere o item
     * Caso count não seja 0 (ou seja, o item já está na lista) dispara um alert´
     * 
     * ev.preventDefault - evita o comportamento padrão (renderizar novamente a página)
     * 
     * @param ev - botão que dispara a ação
     * 
     * @var valor - valor da caixa de texto referenciada pelo nome 'input'
     * @var items - lista de items do state inicial
     * @var count - contador de auxilio para verificação de quantidade de items únicos na lista
     *  
     */
    handleAdd(ev) {
        let valor = this.input.current.value 
        const items = this.state.items
        let count = 0
        if(valor === '') {
            alert('Insira um valor!')
        } else {
            items.forEach(item => {
                if(item === valor){
                    count++
                }
            })
            if(count === 0){
                this.setState({items: [...items, valor]})
            } else {
                alert('Este valor já existe')
            }
        }
        ev.preventDefault();
    }
    
    /**
     * Função handleRemove - Retira cada item na lista
     *  
     * Verifica inicialmente se a lista não está vazia (caso afirmativo, utiliza o Array.filter criando um novo array da forma que satisfaça a condição)
     * Caso contrário, dispara um alert informando que a lista está vazia´
     * 
     * ev.preventDefault - evita o comportamento padrão (renderizar novamente a página)
     *  
     * @param ev - botão que dispara a ação
     * 
     * @var items - lista de items do state inicial
     *  
     */
    handleRemove(ev) {
        const items = this.state.items
        if( items.length !== 0 ){
            this.setState({items: items.filter(item => item !== ev.target.value)})
        } else {
            alert('Não há mais itens na lista!')
        }
        ev.preventDefault();
    }

    /**
     * Função render - renderiza a lista, entrada de texto e botões
     * 
     * 1- Cria uma div 'conteudo'
     * 2- Cria um form 'formulario'
     * 3- Cria um label
     * 4- Cria uma label
     * 5- Cria um input (caixa de texto) referenciado como input
     * 6- Fecha a label
     * 7- Cria um botao Adicionar que chama a função handleAdd
     * 8- Fecha o form
     * 9- Cria uma ol (lista ordenada)
     * 10- Utiliza a Array.map criando li (itens de lista) com os items da var itemsValue, além de botões Remover, cada um deles chamando a função handleRemove
     * 11- Fecha a ol
     * 12- Fecha adiv
     * 
     * @var itemsValue - lista de items do state inicial
     * 
     */
    render() {
        const itemsValue = this.state.items
        return (
            <div className="conteudo">
                <form className="formulario">
                    <label>
                        <span>Name:</span>
                        <input type="text" ref={this.input} />
                    </label>
                        <button className="btn add" onClick={this.handleAdd}>Adicionar</button>   
                </form>
                <ol>
                    {itemsValue.map((item, index) => <li key={index}><span className="itemRemove"><button className="btn rem" value= {item} onClick={this.handleRemove}>remover item</button></span><span className="itemValue">{item}</span> </li>)}
                </ol>
            </div>
      );
    }
}
//Exporta a classe TodoList
export default TodoList