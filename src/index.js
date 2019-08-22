import _ from 'lodash';

function component() {
    const element = document.createElement('div');

    element.innerHTML = _.join(['你好', 'webpack'], ' ');

    return element;
}

document.body.appendChild(component());