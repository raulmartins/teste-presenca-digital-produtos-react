import React, { Component } from 'react'
import styled from 'styled-components'
import Card from './Card'
import ProdutoService from './ProdutoService'

class ProdutoList extends Component {
  constructor() {
    super()

    this.state = {
      cards: []
    }
  }

  componentWillMount() {
    ProdutoService
      .Produtos
      .then(cards => {
        this.setState({ cards })
      })
  }

  render() {
    return (
      <WrappeCards>
        {this.state.cards.map(produto => (
          <Card key={produto.id} produto={produto} />
        ))}
      </WrappeCards>
    )
  }
}

const WrappeCards = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-content: center;
  justify-content:

`
export default ProdutoList
