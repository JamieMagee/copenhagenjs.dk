import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import SettingsMenu from '../components/SettingsMenu'

storiesOf('SettingsMenu', module).add('Default', () => (
  <SettingsMenu clickLogout={action('logout')}></SettingsMenu>
))
