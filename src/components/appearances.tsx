import * as React from 'react';
import {Md5} from 'ts-md5/dist/md5';

interface Props {
    readonly title: string;
    readonly appearances: ReadonlyArray<string>;
}

const li = {color: '#777', borderTop: '1px solid #AAA', marginTop: '2px', paddingTop: '2px'};
const Appearances = ({title, appearances}: Props) =>
    <section className="comics">
        <h4 style={{color: '#777'}}>{title}</h4>
        <ul style={{listStyle: 'none', padding: '0', margin: '0'}}>
            {appearances.map((comic: string) =>
                <li key={Md5.hashStr(comic).toString()} style={li}>{comic}</li>)}
        </ul>
    </section>;

export default Appearances;