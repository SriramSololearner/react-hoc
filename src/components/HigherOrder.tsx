import React from "react";




const HigherOrder = (data: any, Component: any) => {
  return class extends React.Component {
    state = { data: data };

    render() {
      return (
        <>
          <h1>Hello!</h1>
          <Component data={this.state.data} {...this.props} />
        </>
      );
    }
  };
};

export default HigherOrder;
