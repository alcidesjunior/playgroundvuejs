Vue.component('menu-principal',{
	template: "#paises"
});
Vue.component('contato',{
	template:"#contato"
});
/*
O objetivo é compartilhar dados do componente 1
para o componente 2.
*/
Vue.component('component1',{
	template: "#comp1",
	data(){
		return {
			dados: [{nome: "Alcides"},{nome: "Joao"},{nome: "Marcos"},{nome: "Mariano"}]
		}
	}
});
Vue.component('component2',{
	template: "#comp2",
	props: ['items']
});
new Vue({
	el: "#app"
});

//todolist

Vue.component("form-todo",{
	template: "#formulario"
});

Vue.component("");