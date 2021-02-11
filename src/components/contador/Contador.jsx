import React from 'react';

import './Contador.css';

class Contador extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            passo: 1,
            valor: 0
        };

        this.mudaPasso = this.mudaPasso.bind(this);
        this.aumentaValor = this.aumentaValor.bind(this);
        this.diminuiValor = this.diminuiValor.bind(this);
        this.resetaValor = this.resetaValor.bind(this);
    }

    mudaPasso(event) {
        this.setState({
            passo: event.target.value
        });
    }

    aumentaValor() {
        this.setState({
            valor: this.state.valor + Number.parseInt(this.state.passo)
        });
    }

    diminuiValor() {
        this.setState({
            valor: this.state.valor - this.state.passo
        });
    }

    resetaValor() {
        this.setState({
            valor: 0
        });
    }

    render() {
        document.title = "Contador";
        document.body.style.background = "#4f5b66";
        return (
            <div className="contador__container-contador">
                <div className="contador__sub-container">
                    <h1>Contador</h1>
                    <label>Passo</label>
                    <input type="text" value={this.state.passo} onChange={this.mudaPasso}></input>
                    <label>Valor: {this.state.valor}</label>
                    <div className="buttons">
                        <button onClick={this.aumentaValor}>Aumentar</button>
                        <button onClick={this.diminuiValor}>Diminuir</button>
                        <button onClick={this.resetaValor}>Resetar</button>
                    </div>
                </div>
            </div>
        ) 
    }
}

export default Contador;