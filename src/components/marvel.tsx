import * as React from 'react';
import {Character} from '../model/character';
import {Link} from 'react-router';
import ExtLink from './ext-link';

interface Props {
    readonly character: Character;
}

const Marvel = ({character}: Props) => {
    const border = '1px solid #AAA';
    return <div style={{border, width: '180px', margin: '20px'}}>
        <div className="thumbnail" style={{height: '100px'}}>
            <Link to={`/marvels/${character.id}`}>
                <img
                    style={{maxHeight: '100%', maxWidth: '100%', margin: 'auto', display: 'block'}}
                    src={character.thumbnail}/>
            </Link>
        </div>
        <div className="name"
             style={{
                 borderTop: border,
                 borderBottom: border,
                 whiteSpace: 'nowrap',
                 overflow: 'hidden',
                 textOverflow: 'ellipsis'
             }}>
            {character.name}
        </div>
        <div className="links">
            {character.urls.map(url => <ExtLink key={url.type} url={url}/>)}
        </div>
    </div>;
};
export default Marvel;