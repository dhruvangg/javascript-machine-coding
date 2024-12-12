const data = Array.from({ length: 10000 }, (_, i) => `Item ${i + 1}`);

const container = document.getElementById("record-container");
const batchSize = 10;
let currentIndex = 0;
const bufferSize = 30;

function renderRecords() {
    const fragment = document.createDocumentFragment();
    const endIndex = Math.min(currentIndex + batchSize, data.length);

    for (let i = currentIndex; i < endIndex; i++) {
        const div = document.createElement('div');
        div.className = 'record';
        div.textContent = data[i];
        fragment.appendChild(div);
    }

    container.appendChild(fragment);
    currentIndex += batchSize;
}


container.addEventListener('scroll', () => {
    if (container.scrollTop + container.clientHeight >= container.scrollHeight) {
        renderRecords();
    }
})

renderRecords()