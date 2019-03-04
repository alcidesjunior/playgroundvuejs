new Vue({
		el: "#app",
		data:{
			pessoas:[{
				nome: "Alcides",
				sobrenome: "Junior",
				idade: 24,
				profissao: "Programador",
				empresas: [
					{razaoSocial: "Macavi"},
					{razaoSocial: "IFCE"},
					{razaoSocial: "Setydeias"}
				]
			},
			{
				nome: "Antonio",
				sobrenome: "José",
				idade: 42,
				profissao: "Analista Senior",
				empresas: [{razaoSocial: "IFCE"}]
			}
			]
		}
})