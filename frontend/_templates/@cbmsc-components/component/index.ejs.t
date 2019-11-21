---
to: libs/components/src/Components/<%=h.inflection.pluralize(category)%>/<%=h.inflection.camelize(name)%>/index.js
---

export { default as CBM<%=h.inflection.camelize(name)%> } from './<%=h.inflection.camelize(name)%>'
