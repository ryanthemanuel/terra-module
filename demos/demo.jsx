import React from 'react';
import ReactDOM from 'react-dom';

import './demo.scss';

import TerraModule from '../src/TerraModule';

const defaultVariety = <TerraModule />;
const primaryVariety = <TerraModule name="primary" variant="terra-Module--primary" />;


ReactDOM.render(defaultVariety, document.getElementById('terra-module-default'));
ReactDOM.render(primaryVariety, document.getElementById('terra-module-primary'));
