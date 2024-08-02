function navigateTo(letter) {
    console.log('Navigating to:', letter);
    const url = `alphabet.html?letter=${letter}`;
    console.log('Formed URL:', url);
    window.location.assign(url);
}
