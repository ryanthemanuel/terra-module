import React from 'react';
import ReactDOM from 'react-dom';

import './demo.scss';

import Module from '../src/TerraModule';

const defaultVariety = <Module />;
const primaryVariety = <Module name="primary" variant="terra-Module--primary" />;


ReactDOM.render(defaultVariety, document.getElementById('terra-module-default'));
ReactDOM.render(primaryVariety, document.getElementById('terra-module-primary'));
