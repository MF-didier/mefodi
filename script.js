const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}

if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}


function previewImage(event) {
    const input = event.target;
    const preview = document.getElementById('imagePreview');
    const placeholder = document.getElementById('placeholderText');

    if (input.files && input.files[0]) {
        const reader = new FileReader();

        reader.onload = function(e) {
            preview.src = e.target.result;
            preview.style.display = "block";
            placeholder.style.display = "none"; // Cache le texte du cadre
        }

        reader.readAsDataURL(input.files[0]);
    }
}