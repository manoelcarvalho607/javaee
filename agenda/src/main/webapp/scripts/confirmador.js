/**
 * confirmacao de exclusao de contato
 *
 * @author Manoel Carvalho
 * @param idcon
 * o window.location - faz um redirecionamento
 * delete - local onde foi definido p o redirecionamento
 * idcon - alem de redirecionar um parametro (idcon) foi definido com o valor que a fuction recebeu
 * quem trata de requisões é o servlet
 */



function confirmar(idcon) {
	let resposta = confirm("Confirma a exclusão deste contato?")
	if (resposta === true) {
		window.location.href = "delete?idcon=" + idcon
	}
}