---
inject: true
to: "<%= style ? 'libs/components/src/Components/' + h.inflection.pluralize(category) + '/' + h.inflection.pluralize(h.changeCase.lower(category)) + '.less' : null %>"
append: true
---
@import './<%=h.inflection.camelize(name)%>/style.less';