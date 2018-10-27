import * as React from 'react';
import { Button } from './components';
interface IState {
    clickCount: number;
    messages: string[]
}

export default class App extends React.Component<{}, IState> {
    // [Required] Must initalize the non nullable properties on state at construction
    state = {
        clickCount: 0,
        messages: new Array<string>()
    };

    button1OnClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        // [Start Optional] Just to show we can access the event methods :)
        event.preventDefault();
        // [End Optional]
        const messages = this.state.messages;
        messages.push(`Button Clicked at: ${event.pageX}:${event.pageY}`);
        this.setState({ clickCount: this.state.clickCount + 1, messages });

    }
    render() {
        return (
            <div>
                <Button testString="Test" onClick={this.button1OnClick}>Button</Button>
                {this.state.clickCount}
                <pre>
                    {this.state.messages.map((item, index) => <p style={{ margin: 0 }} key={index}>{item}</p>)}
                </pre>
            </div>
        );
    }
}