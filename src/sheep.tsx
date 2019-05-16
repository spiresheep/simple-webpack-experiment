import * as React from 'react';

interface State {
  redirect: string;
}

export class SheepPage extends React.Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      redirect: ''
    };
  }

  public render(): JSX.Element {
    return (
      <div>
        <pre>
          <div>    ,'```--'''  ``-''-.</div>
          <div>   ,'            ,-- ,-'.</div>
          <div>   (//           `"'| 'a \</div>
          <div>      \              |--._/</div>
          <div>    \    _;-._,    /</div>
          <div>     \__/\\   \__,'</div>
          <div>      ||  `'   \|\\</div>
          <div>        \\        \\`'</div>
          <div>       `'        `'</div>
        </pre>
        </div>
      );
    }
  }

export default SheepPage;
