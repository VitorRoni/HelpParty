const cardTemplateUrl = new URL('../../components/card.html', document.currentScript.src);

fetch(cardTemplateUrl)
    .then(response => {
        if (!response.ok) {
            throw new Error(`Não foi possível carregar o card: ${response.status}`);
        }

        return response.text();
    })
    .then(cardMarkup => {
        document.querySelectorAll('.card-slot').forEach(slot => {
            slot.innerHTML = cardMarkup;
        });
    })
    .catch(error => {
        console.error('Erro ao renderizar os cards:', error);
    });