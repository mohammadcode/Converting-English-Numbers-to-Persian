document.getElementById('numberInput').addEventListener('input', function () {
    const input = this.value;
    const output = document.getElementById('output');
    const copyButton = document.getElementById('copyButton');
    const popup = document.getElementById('popup');
    const popupText = document.getElementById('popupText');
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'convert.php', true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const response = JSON.parse(xhr.responseText);

            if (response.error) {
                popupText.textContent = response.error;
                popup.style.display = 'block';
                setTimeout(() => {
                    popup.style.display = 'none';
                }, 3000);
                output.textContent = '';
                copyButton.disabled = true;
            } else {
                output.textContent = response.persianNumber;
                copyButton.disabled = false;
            }
        }
    };
    xhr.send('number=' + encodeURIComponent(input));
});
function copyToClipboard() {
    const output = document.getElementById('output');
    const textArea = document.createElement('textarea');
    textArea.value = output.textContent;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);
    const popup = document.getElementById('popup');
    const popupText = document.getElementById('popupText');
    popupText.textContent = 'عدد فارسی کپی شد!';
    popup.style.display = 'block';
    setTimeout(() => {
        popup.style.display = 'none';
    }, 3000);
}