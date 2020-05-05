(function() {
    var data = [
    {
        name: 'HTMLSnippets',
        description: 'HTML Snippets adds in rich language support for HTML markup, including snippets, quick info, and descriptions that include whether a tag is deprecated.',
        author: 'Mohamed Abusaid',
        url: 'https://marketplace.visualstudio.com/items?itemName=abusaidm.html-snippets',
        downloads: 3435721,
        stars: 57,
        price: Free,
        selector: 'p1'
    },
    {
        name: 'CSSPeek',
        description: 'Allow peeking to css ID and class strings as definitions from html files to respective CSS.',
        author: 'Pranay Prakash',
        url: 'https://marketplace.visualstudio.com/items?itemName=pranaygp.vscode-css-peek',
        downloads: 859152,
        stars: 55,
        price: Free,
        selector: 'p2'
    },
    {
        name: 'ESLint',
        description: 'The extension uses the ESLint library installed in the opened workspace folder.',
        author: 'Dirk Baeumer',
        url: 'https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint',
        downloads: 8946957,
        stars: 141,
        price: Free,
        selector: 'p3'
    }
];

function Package(data) {
    this.name = data.name;
    this.description = data.description;
    this.author = data.author;
    this.url = data.url;
    this.download = data.downloads;
    this.star = data.stars;
    this.selector = data.selector;

    this.getFormattedDownloads = function () {
        return this.downloads.toLocaleString();
    };

    this.getFormattedStars = function () {
        return this.star.toLocaleString();
    };
}

var getTodaysDate = function() {
    var today = new Date();
    return today.toDateString();
};

var getEl = function (id) {
    return document.getElementById(id);
}

var writePackageInfo = function(package) {

    var selector = package.selector,
        nameEl = getEl(selector + '-name'),
        descEl = getEl(selector + '-description'),
        authEl = getEl(selector + '-author'),
        downloadEl = getEl(selector + '-downloads'),
        starsEl = getEl(selector + '-stars');

        nameEl.textContent = package.name;
        descEl.textContent = package.description;
        authEl.textContent = package.author;
        downloadEl.textContent = package.getFormattedDownloads();
        starsEl.textContent = package.getFormattedStars();
}

dateEl = getEl('date');
dateEl.textContent = getTodayDate();

var HTMLSnippets = new Package(data[0]);
writePackageInfo(HTMLSnippets);

var CSSPeek = new Package(data[1]);
writePackageInfo(CSSPeek);

var ESLint = new Package(data[2]);
writePackageInfo(ESLint);


}());