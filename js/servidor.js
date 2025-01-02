const express = require('express');
const PDFDocument = require('pdfkit');
const app = express();

app.get('/download-lab-results', (req, res) => {
    const doc = new PDFDocument();

    // Configurar encabezados para la descarga
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', 'attachment; filename="resultados_laboratorio.pdf"');

    // Crear el contenido del PDF
    doc.fontSize(20).text('Laboratorio Clínico', { align: 'center' });
    doc.moveDown();
    doc.fontSize(12).text('Paciente: Juan Pérez');
    doc.text('Edad: 35 años');
    doc.text('Fecha: 02/01/2025');
    doc.moveDown();
    doc.text('Resultados', { underline: true });
    doc.moveDown();

    // Tabla de resultados
    doc.text('Examen       Resultado       Referencia');
    doc.text('Glucosa      90 mg/dL        70-100 mg/dL');
    doc.text('Colesterol   180 mg/dL       <200 mg/dL');

    // Finalizar y enviar el PDF
    doc.pipe(res);
    doc.end();
});

// Iniciar el servidor
app.listen(3000, () => console.log('Servidor en http://localhost:3000'));
