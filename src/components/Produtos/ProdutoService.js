
export default class ProdutoService {
  static get Produtos() {
    return fetch('http://localhost:4000/produtos')
      .then(data => data.json())
  }
}
