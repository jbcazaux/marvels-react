import * as React from 'react';
import Character from './model/character';

interface Props {
    readonly character: Character;
}

export default class Marvel extends React.Component<Props, void> {
    render() {
        return <div >
            <div className="thumbnail" style={{border: '1px solid #AAA'}}>
                <img style={{width: '100px', height: '100px'}} src={this.props.character.thumbnail}/>
            </div>
            <div style={{border: '1px solid #AAA'}} className="name">{this.props.character.name}</div>
            <div style={{border: '1px solid #AAA'}} className="links">
                {this.props.character.urls.map(url =>
                    <span key={url.type}>
                        <a href={url.url} target="_blank">{url.type}</a>
                    </span>)}
            </div>
        </div>;
    }
}