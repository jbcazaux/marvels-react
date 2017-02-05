import * as React from 'react';
import Character from './model/character';
import {Link} from 'react-router';

interface Props {
    readonly character: Character;
}

export default class Marvel extends React.Component<Props, void> {
    render() {
        const border = '1px solid #AAA';
        return <div style={{border, width: '180px', margin: '20px'}}>
            <div className="thumbnail" style={{height: '100px'}}>
                <Link to={`/marvels/${this.props.character.id}`}>
                    <img
                        style={{maxHeight: '100%', maxWidth: '100%', margin: 'auto', display: 'block'}}
                        src={this.props.character.thumbnail}/>
                </Link>
            </div>
            <div style={{
                borderTop: border,
                borderBottom: border,
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis'
            }}
                 className="name">{this.props.character.name}</div>
            <div className="links">
                {this.props.character.urls.map(url =>
                    <span key={url.type} style={{marginRight: '5px'}}>
                        <a href={url.url} target="_blank" style={{color: '#777', textDecoration: 'none'}}>
                            <img height="10px" width="10px" src={require('./link.png')}/>{url.type}
                        </a>
                    </span>)}
            </div>
        </div>;
    }
}