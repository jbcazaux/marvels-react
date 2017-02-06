import * as React from 'react';
import {Character} from '../model/character';

interface Props {
    readonly url: Character.Url;
}

const ExtLink = ({url}: Props) =>
    <span style={{marginRight: '5px'}}>
        <a href={url.url} target="_blank" style={{color: '#777', textDecoration: 'none'}}>
            <img height="10px" width="10px" src={require('./link.png')}/>{url.type}
        </a>
    </span>;

export default ExtLink;