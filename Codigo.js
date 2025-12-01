function doGet() {
    return HtmlService.createTemplateFromFile('Index')
        .evaluate()
        .setTitle('Reels Virales Manager')
        .addMetaTag('viewport', 'width=device-width, initial-scale=1');
}

function getVideos() {
    // Usamos openById para asegurar que conectamos con la hoja correcta
    // ID extraído de: https://docs.google.com/spreadsheets/d/148BDQffYq4O_RJFRBHRamIiUQoXESp17zQM3K-iBkXs
    const sheet = SpreadsheetApp.openById('148BDQffYq4O_RJFRBHRamIiUQoXESp17zQM3K-iBkXs').getSheetByName('Reels');

    if (!sheet) {
        throw new Error('No se encontró la hoja "Reels". Por favor verifica el nombre de la hoja.');
    }

    const data = sheet.getDataRange().getValues();
    const headers = data.shift(); // Remove headers

    // Map data to objects
    return data.map((row, index) => {
        return {
            rowIndex: index + 2, // 1-based index, +1 for header
            idea: row[0], // Column A
            descripcion: row[1], // Column B
            statusCreacion: row[3], // Column D
            statusAprobacion: row[4], // Column E
            url: row[6] // Column G
        };
    });
}

function deleteVideo(rowIndex) {
    const sheet = SpreadsheetApp.openById('148BDQffYq4O_RJFRBHRamIiUQoXESp17zQM3K-iBkXs').getSheetByName('Reels');
    sheet.deleteRow(rowIndex);
    return 'Deleted';
}

function updateVideoStatus(rowIndex, status) {
    const sheet = SpreadsheetApp.openById('148BDQffYq4O_RJFRBHRamIiUQoXESp17zQM3K-iBkXs').getSheetByName('Reels');
    // Column E is index 5 (1-based)
    sheet.getRange(rowIndex, 5).setValue(status);
    return 'Updated';
}
