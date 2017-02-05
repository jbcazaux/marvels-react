import * as React from 'react';
import Marvel from './marvel';
import {connect} from 'react-redux';
import {Character} from '../model/character';
import {State} from '../reducers/state';
import {getMarvel} from '../actions/character';

interface OwnProps {
    readonly params?: { id: number };
}

interface StateProps {
    readonly character: Character;
    readonly characterId: number;
}

interface DispatchProps {
    readonly getMarvel: (id: number) => void;
}

type Props = StateProps & OwnProps & DispatchProps;

const mapStateToProps = (state: State, ownProps: OwnProps): StateProps => {
    return {
        character: state.character,
        characterId: ownProps.params ? ownProps.params.id : 0
    };
};

const mapDispatchToProps = (dispatch: Function): DispatchProps => {
    return {
        getMarvel: (id: number) => dispatch(getMarvel(id))
    };
};

export class MarvelDetailInternal extends React.Component<Props, void> {

    componentDidMount(): void {
        this.props.getMarvel(this.props.characterId);
    }

    componentWillReceiveProps(nextProps: Props): void {
        if (nextProps.characterId && nextProps.characterId !== this.props.characterId) {
            this.props.getMarvel(this.props.characterId);
        }
    }

    render() {
        if (this.props.character.id !== Character.NULL.id) {
            return <Marvel character={this.props.character}/>;
        }
        return <div>Character not foud</div>;
    }
}

export const MarvelDetail = connect(mapStateToProps, mapDispatchToProps)(MarvelDetailInternal);