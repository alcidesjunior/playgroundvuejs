new Vue({
	el: "#app2",
	data: {
		mensagem: "testando v-text",
		titulo: "<strong>Testando v-htm</strong>",
		erro: true,
		nome: "Alcides",
		items:[{
			id: 1,
			nome: "Alcides"
		},{
			id:2,
			nome: "Marcio"
		},{
			id:3,
			nome: "Abreu"
		}],
		imagens: [{
			path:"http://mikedolbear.com/wp-content/uploads/2018/03/Colaiuta_Vinnie-Image2.jpg",
			width: 200,
			height: 200
			}
		],
		classe: 'red',
		msg_clicou: null

	},
	methods:{
		clicou(){
			this.msg_clicou = "Aeeeeeee"
		}
	}
})