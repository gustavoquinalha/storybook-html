import { document } from 'global';
import { storiesOf } from '@storybook/html';
import { action } from '@storybook/addon-actions';
import { withLinks } from '@storybook/addon-links';
import centered from '@storybook/addon-centered/html';

// css
import '../assets/css/master.css';

// components
import welcome from '../assets/components/welcome.html';

storiesOf('Components', module)
  .addDecorator(centered)
  .add('Welcome', () => welcome);

storiesOf('Atoms', module)
  .addDecorator(centered)

  .add(
    'Branding',
    () => '<h1>Branding</h1>'
  )

  .add(
    'Typography',
    () => '<h1>Hello World</h1><h2>Hello World</h2><h3>Hello World</h3><h4>Hello World</h4>'
  )

  .add(
    'Colors',
    () => '<h1>Colors</h1>'
  )

  .add(
    'Shadows',
    () => '<h1>Shadows</h1>'
  )

  .add(
    'Icons',
    () => '<h1>Icons</h1>'
  )

  .add(
    'Buttons',
    () => '<h1>Buttons</h1>'
  )

  .add(
    'Grid',
    () => '<h1>Grid</h1>'
  )

  .add(
    'Forms',
    () => '<h1>Forms</h1>'
  )

  .add(
    'Labels',
    () => '<h1>Labels</h1>'
  )

  .add(
    'Motion',
    () => '<h1>Motion</h1>'
  )

  .add(
    'Avatars',
    () => '<h1>Avatars</h1>'
  )

  .add(
    'Spaces',
    () => '<h1>Spaces</h1>'
  )

  .add('button', () => {
    const button = document.createElement('button');
    button.className = 'btn';
    button.innerHTML = 'Hello Button';
    button.addEventListener('click', action('Click'));
    return button;
  });
