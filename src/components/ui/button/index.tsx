import * as React from 'react';
interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    testString: string
}
export class Button extends React.Component<IButtonProps> {
    constructor(props: IButtonProps) {
        super(props);
        // tslint:disable-next-line:no-console
        console.log("Created button with testString: " + props.testString);
    }
    cleanPropsForButtonElement(): any {
        const newProps: IButtonProps = { ...this.props };
        // remove the property we added, so that we can directly pass all props to the button element
        delete newProps.testString;
        return newProps;
    }

    render() {
        return (
            <button {...this.cleanPropsForButtonElement()}>
                {this.props.children}
            </button>
        );
    }
}
