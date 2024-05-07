import React from 'react';

class LifeCycle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: ''
    };
  }

  onFormUpdate = (event) => {
    this.setState({ inputValue: event.target.value });
  };

  onFormSubmit = (event) => {
    event.preventDefault();
    console.log('Значение формы:', this.state.inputValue);
  };

  componentDidMount() {
    console.log('Component mounted');
  }

  componentDidUpdate() {
    console.log('Component updated');
  }

  componentWillUnmount() {
    console.log('Component will unmount');
  }

  render() {
    return (
      <UserInputForm 
        value={this.state.inputValue} 
        handleChange={this.onFormUpdate} 
        handleSubmit={this.onFormSubmit} 
      />
    );
  }
}

function UserInputForm({ value, handleChange, handleSubmit }) {
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={value} onChange={handleChange} />
      <button type="submit">Отправить</button>
    </form>
  );
}

    
export default LifeCycle;