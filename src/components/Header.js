import React from 'react'
import './styles.css'

/**
 * Arquivo Header (constante)
 *  
 * @author Eduardo B. Rauta
 * @version 1.0.0
 * @license ISC
 * 
 * Importações:
 * React
 * styles.css - estilos CSS aplicados em todos os componentes
 * 
 * Entrada: function anônima () e const TitStyle
 * Saída: constante Header
 */

 /**
  * Constante TitStyle
  * 
  * Retorna uma span com classe determinada pelo CSS e o filho como prop
  * 
  * @param {children} - recebe os filhos do Nó (o que está dentro da tag) 
  */
const TitStyle = ({ children }) => {
    return <span className="titulo">{children}</span>
}

/**
 * Constante Header - renderiza o título
 * 
 * 1- Cria um TitStyle
 * 2- Fecha a TitStyle
 * 
 */
const Header = () => {
    return (
    <TitStyle>
        To Do List
    </TitStyle>
    )
}

export default Header