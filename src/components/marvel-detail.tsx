import * as React from 'react';
import {connect} from 'react-redux';
import {Character} from '../model/character';
import {State} from '../reducers/state';
import {getMarvel} from '../actions/character';
import Appearances from './appearances';

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
            return <article style={{display: 'flex', flexWrap: 'nowrap'}}>
                <section className="thumbnail" style={{float: 'left', margin: '0 20px', maxWidth: '200px'}}>
                    <img src={this.props.character.thumbnail} style={{maxWidth: '100%'}}/>
                </section>
                <div className="infos" style={{display: 'flex', flexDirection: 'column'}}>
                    <section className="title" style={{padding: '0 10px 10px 10px', border: '1px solid #AAA'}}>
                        <h2 className="name">{this.props.character.name}</h2>
                        <span className="desc" style={{color: '#777'}}>{this.props.character.description}</span>
                    </section>
                    <Appearances title="Comics" appearances={this.props.character.comics}/>
                    <Appearances title="Series" appearances={this.props.character.series}/>
                </div>

            </article>;
        }
        return <div>Character not foud</div>;
    }
}

export const MarvelDetail = connect(mapStateToProps, mapDispatchToProps)(MarvelDetailInternal);