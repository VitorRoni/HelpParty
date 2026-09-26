const headerTemplateUrl = new URL('../../components/header.html', document.currentScript.src);

fetch(headerTemplateUrl)
    .then(response => {
        if (!response.ok) {
            throw new Error(`Não foi possível carregar o cabeçalho: ${response.status}`);
        }

        return response.text();
    })
    .then(data => {
        document.getElementById('header').innerHTML = data;
    })
    .catch(error => {
        console.error('Erro ao carregar o cabeçalho:', error);
    });
