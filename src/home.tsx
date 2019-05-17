import * as React from 'react';
import * as Router from 'react-router-dom';

interface Properties {
  nextPageUrl?: string;
}


interface State {
  redirect: string;
}

export class HomePage extends React.Component<Properties, State> {
  constructor(props: Properties) {
    super(props);
    this.state = {
      redirect: ''
    };
    this.goToNextPage = this.goToNextPage.bind(this);
  }

  public render(): JSX.Element {
    if(this.state.redirect) {
      return <Router.Redirect push to={this.state.redirect}/>;
    }
    if(this.state.redirect) {
      return <div/>;
    } else {
      return (
        <div> 
          <button onClick={this.goToNextPage}>Click me!</button>
        </div>
      );
    }
  }

  private goToNextPage() {
    this.setState({redirect: this.props.nextPageUrl});
  }
}

export default HomePage;

