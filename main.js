import QRCode from "https://cdn.jsdelivr.net/npm/qrcode@1.5.4/+esm";

let urlInput = document.getElementById('url');
let scaleRange = document.getElementById('scaleRange');
let scaleNumber = document.getElementById('scaleNumber');
let qrOut = document.getElementById('qr');

function updateQR() {
    let text = urlInput.value;

    //get from scaleRange
    let size = Number(scaleRange.value);

    qrOut.innerHTML = '';
    if (!text) return;

    QRCode.toCanvas(text, { width: size }, (err, canvas) => {
        if (err) {
            alert('Error generating QR code: ' + err);
        } else {
            qrOut.appendChild(canvas)
        }
    });
}

scaleRange.addEventListener('input', () => {
    scaleNumber.value = scaleRange.value;
    updateQR();
});

scaleNumber.addEventListener('input', () => {
    scaleRange.value = scaleNumber.value;
    updateQR();
});

urlInput.addEventListener('input', () => {
    updateQR()
});