import * as React from 'react';
import Marvel from './marvel';
import Character from './model/marvel';

interface Props {
    readonly title: string;
}

export class Marvels extends React.Component<Props, void> {
    render() {
        return (<div>
            <h2>{this.props.title}</h2>
            <ul>
                <li><Marvel character={new Character('01', 'jbc')}/></li>
            </ul>
        </div>);
    }
}