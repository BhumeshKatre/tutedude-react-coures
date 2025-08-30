import React, { Component } from 'react';
import Title from '../../../Components/Title';

class Assignment1Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addNumber: 0
    };
  }

  handlePlusBtn = () => {
    this.setState((prevState) => ({
      addNumber: prevState.addNumber + 1
    }));
  };

  handleMinusBtn = () => {
    this.setState((prevState) => {
      if (prevState.addNumber > 0) {
        return { addNumber: prevState.addNumber - 1 };
      } else {
        alert('Please add a number');
        return null;
      }
    });
  };

  render() {
    const { addNumber } = this.state;

    return (
      <div className="flex justify-center items-center h-screen w-screen">
        <div className="flex flex-col gap-10">
          <div className="w-full text-center text-2xl font-bold">
            <Title Title={'Counter App'} />
          </div>
          <div className="flex items-center w-full border-2 border-gray-400 rounded-3xl">
            <button
              className="bg-red-400 p-0 text-white font-bold text-2xl rounded-tl-2xl rounded-bl-2xl px-5"
              onClick={this.handleMinusBtn}
            >
              -
            </button>
            <p className="px-5 flex items-center">{addNumber}</p>
            <button
              className="bg-green-400 text-white font-bold text-2xl rounded-tr-2xl rounded-br-2xl px-5"
              onClick={this.handlePlusBtn}
            >
              +
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Assignment1Counter;
