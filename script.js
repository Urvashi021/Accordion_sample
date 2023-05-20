const accodion = document.getElementsByClassName('container');

console.log(accodion);

for (let i=0; i<accodion.length; i++)
{
    accodion[i].addEventListener(
        'click',
        function() {
            this.classList.toggle('active');
        }
    )
}
