import * as React from 'react';
import Marvel from './marvel';
import {connect} from 'react-redux';
import Character from './model/character';
import {getMarvels} from './actions/characters';
import {State} from './reducers/state';

interface OwnProps {
    readonly title: string;
}

interface StateProps {
    readonly characters: ReadonlyArray<Character>;
}

interface DispatchProps {
    readonly getMarvels: () => void;
}

type Props = StateProps & OwnProps & DispatchProps;

const mapStateToProps = (state: State, ownProps: OwnProps): StateProps & OwnProps => {
    return {
        characters: state.characters,
        title: ownProps.title
    };
};

const mapDispatchToProps = (dispatch: Function): DispatchProps => {
    return {
        getMarvels: () => dispatch(getMarvels())
    };
};

export class MarvelsInternal extends React.Component<Props, void> {

    componentDidMount(): void {
        this.props.getMarvels();
    }

    render() {
        return (<div>
            <h2>{this.props.title}</h2>
            <ul>
                {this.props.characters.map(c => <Marvel key={c.id} character={c}/>)}
            </ul>
        </div>);
    }
}

export const Marvels = connect(mapStateToProps, mapDispatchToProps)(MarvelsInternal);