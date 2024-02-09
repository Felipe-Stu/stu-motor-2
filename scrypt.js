function formatarTelefone(telefone) {
    // Remove todos os caracteres que não são dígitos
    telefone = telefone.replace(/\D/g, '');
    telefone = telefone.slice(0, 11);
    telefone = telefone.replace(/^(\d{2})(\d)/g, '($1) $2');
    telefone = telefone.replace(/(\d{5})(\d)/, '$1-$2');
    return telefone;
}

document.getElementById('telefone').addEventListener('input', function(event) {
    // Obtém o valor atual do campo
    var telefone = event.target.value;
    telefone = formatarTelefone(telefone);
    event.target.value = telefone;
});

