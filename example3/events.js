//Usando el patrón factory
classAppextendsReact.Componen{
	constructor(props) {
		super(props);
		this.state = { name: 'test' };
	}
	handleClick(name) {
		return event => {
			this.setState({
				name: name.split('').reverse().join('')
			});
		};
	}
	render() {
		return (
			<button onClick={this.handleClick(this.state.name)}>
				Click me {this.state.name}!
			<button>
		);
	}
}

//Usando arrow functions
classAppextendsReact.Component{
	constructor(props) {
		super(props);
		this.state = { name: 'test' };
	}
	handleClick(name, event) {
		this.setState({
			name: name.split('').reverse().join('')
		});
	}
	render() {
    return (
      <button onClick={event => this.handleClick(this.state.name, event)}>
        Click me {this.state.name}!
      <button>
    );
  }
}

//Cache de funciones
classAppextendsReact.Component{
  constructor(props) {
    super(props);
    this.state = { name: 'test' };
    this.cache = {};
  }
  handleClick(name) {
    return event => {
      this.setState({
        name: name.split('').reverse().join('')
      });
    };
  }
  render() {
    let handleClick = this.cache[this.state.name];

    if (!handleClick) {
      handleClick = this.handleClick(this.state.name);
      this.cache[this.state.name] = handleClick;
    }

    return (
      <button onClick={handleClick}>
        Click me {this.state.name}!
      <button>
    );
  }
}

//Aplicación parcial
functionhandleClick(name, event) {
  returnthis.setState({
    name: name.split('').reverse().join(''),
  });
}

classAppextendsComponent{
  constructor(props) {
    super(props);
    this.state = { name: 'Platzi' };
    this.handleClick = handleClick.bind(this, this.state.name);
  }

  componentWillUpdate(nextProps, nextState) {
    if (nextState.name !== this.state.name) {
      this.handleClick = handleClick.bind(this, nextState.name);
    }
  }

  render() {
    return (
      <buttononClick={this.handleClick}>
        Click me {this.state.name}!
      </button>
    );
  }
}

//Implementación

const sumar = (n1, n2) => n1 + n2;
const sumar5 = sumar.bind(null, 5);
console.log(sumar5(10)); // 10
