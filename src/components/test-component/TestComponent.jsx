import React, { PureComponent } from 'react';

class TestComponent extends PureComponent {
  render() {
    const { component, onClick } = this.props;
    const { hidden } = component;
    return (
      <>
        {/* <checkbox/> Force Allow */}
        <div className={hidden ? 'hidden' : ''}>
          <p>info</p>
        </div>
        <div>
          <button type="button" onClick={onClick}>
            Press
          </button>
        </div>
      </>
    );
  }
}

export default TestComponent;
