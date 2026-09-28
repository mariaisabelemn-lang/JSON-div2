async function buscaCEP() {
    const cep = document.getElementById('edtCEP').value;

    const resp = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    const data = await resp.json();

    if (data.error) {
        console.log("CEP não encontrado!");
    } else {
        console.log(data.logradouro);
        console.log(data.localidade);
        console.log(data.uf);
        document.getElementById('edtENDERECO').
        value = data.logradouro;
        document.getElementById('edtCIDADE').
        value = data.localidade;
        document.getElementById('edtESTADO').
        value = data.uf;
        document.getElementById('edtNÚMERO').focus();
    }
}