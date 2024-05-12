import React from 'react';

class LifeCycle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: ''
    };
  }

  onFormUpdate = (event) => {
    this.setState({ 
      inputValue: event.target.value,
      isSubmitDisabled: (event.target.value === 'реакт') ? true : false
    });
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
        isSubmitDisabled={this.state.isSubmitDisabled}
      />
    );
  }
}

function UserInputForm({ value, handleChange, handleSubmit, isSubmitDisabled }) {
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={value} onChange={handleChange} />
      <button type="submit" disabled={isSubmitDisabled} >Отправить</button>
      <button onClick={() => document.querySelector('input').focus()}>Фокус</button>
      <FragmentComponent/>
    </form>
  );
}

const list = [{
  id: 'greek-salad',
  name: 'Greek Salad',
  ingredients: ['tomatoes', 'cucumber', 'onion', 'olives', 'feta']
}, {
  id: 'hawaiian-pizza',
  name: 'Hawaiian Pizza',
  ingredients: ['pizza crust', 'pizza sauce', 'mozzarella', 'ham', 'pineapple']
}, {
  id: 'hummus',
  name: 'Hummus',
  ingredients: ['chickpeas', 'olive oil', 'garlic cloves', 'lemon', 'tahini']
}];

function FragmentComponent(){
  return(
    <ul>
      {list.map((item)=><li key={item.id}>{item.name}</li>)}
    </ul>
  )
}

export default LifeCycle;