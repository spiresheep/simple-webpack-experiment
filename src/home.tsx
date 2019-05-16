import * as React from 'react';

interface State {
  redirect: string;
}

export class HomePage extends React.Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      redirect: ''
    };
  }

  public render(): JSX.Element {
    if(this.state.redirect) {
      return <div/>;
    } else {
      return (
        <div> 
          Click the navigation buttons!
        </div>
      );
    }
  }
}

export default HomePage;

