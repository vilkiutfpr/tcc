---
to: libs/components/src/Components/<%=h.inflection.pluralize(category)%>/<%=h.inflection.camelize(name)%>/<%=h.inflection.camelize(name)%>.stories.js
---

import React from 'react'
import { storiesOf } from '@storybook/react'
import CBM<%=h.inflection.camelize(name)%> from './<%=h.inflection.camelize(name)%>'

storiesOf('<%=h.inflection.pluralize(h.inflection.camelize(category))%>.<%=h.inflection.camelize(name)%>', module).add('Simple', () => (
    <CBM<%=h.inflection.camelize(name)%> />
))
