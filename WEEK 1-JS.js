<script>

Vue.component('todo-item', {
template: '\
<li>\
{{ title }}\
<button v-on:click="$emit(\'remove\')">Remove</button>\
</li>\
',
props: ['title']
})

function save_ck(ckbox) {
var ckbox = document.getElementById(ckbox.id);
ckbox.checked ? ckbox.disabled = true : '';
}

document.addEventListener('DOMContentLoaded', function () {
new Vue({
el: '#todo-list-example',
data: {
newTodoText: '',
todos: [
{
id: 1,
},
{
id: 2,
},
{
id: 3,
}
],
nextTodoId: 4
},
methods: {
addNewTodo: function () {
this.todos.push({
id: this.nextTodoId++,
title: this.newTodoText
})
this.newTodoText = ''
}
}
})
})

Vue.component('todo-item', {
template:
props: ['title']
})

document.addEventListener('DOMContentLoaded', function () {
<!DOCTYPE html>
<html lang="en">

<head>
<script src="https://unpkg.com/vue/dist/vue.min.js"></script>
<script>


Vue.component('todo-item', {
template: '\
<li>\
{{ title }}\
<button v-on:click="$emit(\'remove\')">Remove</button>\
</li>\
',
props: ['title']
})

document.addEventListener('DOMContentLoaded', function () {
new Vue({
el: '#todo-list-example',
data: {
newTodoText: '',
todos: [
{
id: 1,
title: '0-6 yeaes old',
},
{
id: 2,
title: '6-10 years old',
},
{
id: 3,
title: '10-25 years old'
},
{
  id: 4,
title: '25-50 years old'
},
{
  id: 5,
title: '50-100 years old'
}
],
},

})
})