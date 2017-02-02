import * as React from 'react';
import Character from './model/marvel';

interface Props {
    readonly character: Character;
}

export default class Marvel extends React.Component<Props, void> {
    render() {
        return <div>
            {this.props.character.name}
        </div>;
    }
}