class UI {
    static showLoader() {
        document.getElementById('loader').style.display = 'flex';
    }

    static hideLoader() {
        document.getElementById('loader').style.display = 'none';
    }

    static showToast(message, type = 'info') {
        const toast = document.createElement('div');
        toast.className = `toast ${type}`;
        toast.textContent = message;
        document.body.appendChild(toast);
        setTimeout(() => toast.remove(), 3000);
    }
}