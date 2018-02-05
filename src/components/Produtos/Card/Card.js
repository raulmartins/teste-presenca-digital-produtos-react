import React from 'react'
import styled from 'styled-components'
import breakpoints from './../../../shared'
import celular from './../../../assets/celular.svg'
import tv from './../../../assets/tv.svg'
import internet from './../../../assets/internet.svg'
import fixo from './../../../assets/fixo.svg'


const Card = ({ produto }) => {
  let icon = ''
  icon = selectIcon(produto, icon)
  const canais = produto.listaCanais || []

  //const moeda = new RegExp('^\d+([.,]\d{1,X})?$')

  return (
    <WrapperCard>
      <CardBody>
        <CardHeader>
          <Svg>
            <image data-image="image" xlinkHref={icon} width="100%" height="100%" />
          </Svg>
          <span>{produto.nome}</span>
          <p>{produto.descricao}</p>
        </CardHeader>
        <CardContent>
          <Canais>
            {canais.map(canal => <Categoria key={canal.id}>{canal.categoria}</Categoria>)}
          </Canais>
          <CardContentDescription>
            <p>De:{produto.precoDe}</p>
            <p>Por:{produto.preco}</p>
            <p>Adesão:{produto.adesao}</p>
            <p>{produto.instalacao ? `Instalação: ${produto.instalacao}` : '' }</p>
          </CardContentDescription>
        </CardContent>
        <Selo>{produto.tipo}</Selo>
      </CardBody>
    </WrapperCard>
  )
}

const Categoria = styled.p`
`

const WrapperCard = styled.div`
  margin: 10px;
  width: 200px;
  height: 300px;
  padding: 5px;
  border-radius: 5px;
  border: solid 2px #000;

  ${breakpoints.small`
    width: 100%;

  `};
`

const CardBody = styled.div`

  ${breakpoints.small`
    transform: translateX(12em);
  `};
`

const Svg = styled.svg`
  width: 20px;
  height: 20px;
  margin-right: 10px;
`

const CardHeader = styled.div`
  display:flex;
  justify-content: center;
  transform: translateX(0.2rem);
  align-items: center;
  width: 12rem;
  height: 4rem;
  font-family: 'Roboto', sans-serif;
  position:relative;


  > p {
    transform: translatex(-4rem)translateY(1.5rem);
    font-size: 10px;
    font-family: 'Roboto', sans-serif;
  }
`

const CardContent = styled.div`
  display:flex;
  transform: translateX(0.2rem);
  flex-direction:column;
  width: 12rem;
  height: 12rem;
  font-family: 'Roboto', sans-serif;
  position:relative;

`
const Canais = styled.div`
  padding-left: 1.3em;
  display: flex;
  flex-flow: column wrap;
  width: 100%;
  height: 70%;
`

const CardContentDescription = styled.div`
  padding-left: 3em;
  display: flex;
  flex-flow: column wrap;
  justify-content: space-between;
  transform: translateY(8rem);
  width: 12rem;
  height: 4rem;
  font-family: 'Roboto', sans-serif;
  font-size: 8px;
  position: absolute;

  > p {
    line-height:0;
  }
`

const Selo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  transform: translateX(0.2rem) translateY(0.5rem);
  width: 12rem;
  height: 2rem;
  border-radius: 5px;
  font-family: 'Roboto', sans-serif;
  font-size: 20px;
  position: relative;
  background:orange;
`

export default Card
function selectIcon(produto, icon) {
  switch (produto.tipo) {
    case 'celular':
      icon = celular
      break
    case 'tv':
      icon = tv
      break
    case 'fixo':
      icon = fixo
      break
    case 'internet':
      icon = internet
  }
  return icon
}

