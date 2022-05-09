const $noteContent = document.querySelector('.data-note');
const $noteDisplay = document.querySelector('.col-8');

const printResults = notesArray => {
    
    const notesHTML = notesArray.map(({title, text, id}) => {
        return `
        <div class="col-8">
          <input
            class='note-title'
            placeholder=${title}
            maxlength="28"
            type="text"
          />
          <textarea class="note-textarea">${text}<br>
          id: ${id}</textarea>
        </div>
        `;
    });

    $noteDisplay.innerHTML = notesHTML.join('');
};

const getNotes = (formData = {}) => {
    let queryUrl = '../../db/db.json';

    Object.entries(formData).forEach(([key, value]) => {
        queryUrl += `${key}=${value}`;
});

    fetch(queryUrl)
    .then(response => {
        return response.json();
    })
    .then(noteView => {
        console.log(noteView);
        printResults(noteView);
    });
};

$noteContent.addEventListener('submit', getNotes )
