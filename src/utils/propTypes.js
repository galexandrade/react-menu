import { string, number, bool, func, object, oneOf, oneOfType, exact } from 'prop-types';

export const stylePropTypes = (name) => ({
  [name ? `${name}ClassName` : 'className']: oneOfType([string, func]),
  [name ? `${name}Styles` : 'styles']: oneOfType([object, func])
});

// Menu, SubMenu and ControlledMenu
export const menuPropTypes = {
  className: string,
  ...stylePropTypes('menu'),
  ...stylePropTypes('arrow'),
  arrow: bool,
  offsetX: number,
  offsetY: number,
  align: oneOf(['start', 'center', 'end']),
  direction: oneOf(['left', 'right', 'top', 'bottom']),
  position: oneOf(['auto', 'anchor', 'initial']),
  overflow: oneOf(['auto', 'visible', 'hidden'])
};

// Menu and ControlledMenu
export const rootMenuPropTypes = {
  ...menuPropTypes,
  containerProps: object,
  initialMounted: bool,
  unmountOnClose: bool,
  transition: oneOfType([
    bool,
    exact({
      open: bool,
      close: bool,
      item: bool
    })
  ]),
  transitionTimeout: number,
  boundingBoxRef: object,
  boundingBoxPadding: string,
  reposition: oneOf(['auto', 'initial']),
  repositionFlag: oneOfType([string, number]),
  viewScroll: oneOf(['auto', 'close', 'initial']),
  submenuOpenDelay: number,
  submenuCloseDelay: number,
  portal: bool,
  theming: string,
  onItemClick: func
};

// Menu and SubMenu
export const uncontrolledMenuPropTypes = {
  instanceRef: oneOfType([object, func]),
  onMenuChange: func
};

export const menuDefaultProps = {
  offsetX: 0,
  offsetY: 0,
  align: 'start',
  direction: 'bottom',
  position: 'auto',
  overflow: 'visible'
};

export const rootMenuDefaultProps = {
  ...menuDefaultProps,
  reposition: 'auto',
  viewScroll: 'initial',
  transitionTimeout: 500,
  submenuOpenDelay: 300,
  submenuCloseDelay: 150
};
