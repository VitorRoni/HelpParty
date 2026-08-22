fetch('../../components/card.html')
.then(response => response.text())
.then(data => {
    document.getElementById('card').innerHTML = data;
});