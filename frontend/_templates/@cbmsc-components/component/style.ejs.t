---
to: "<%= style ? 'libs/components/src/Components/' + h.inflection.pluralize(h.inflection.camelize(category)) + '/' + h.inflection.camelize(name) + '/style.less' : null %>"
# libs/components/src/Components/<%h.inflection.pluralize(h.inflection.camelize(category))%>/<%h.inflection.camelize(name)%>/style.less
---
.cbm-<%=h.changeCase.param( name ) %> {}
