class URLShortener {
    constructor() {
        this.urlMap = new Map(); 
        this.baseUrl = 'http://short.url/';
        this.shortUrlLength = 6; 
    }

  
    generateShortCode() {
        let shortCode = '';
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const charactersLength = characters.length;
        for (let i = 0; i < this.shortUrlLength; i++) {
            shortCode += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return shortCode;
    }

    
    encodeURL(longURL) {
        let shortCode;
        do {
            shortCode = this.generateShortCode(); 
        } while (this.urlMap.has(shortCode)); 
        const shortenedURL = this.baseUrl + shortCode; 
        this.urlMap.set(shortCode, longURL); 
        return shortenedURL;
    }

   
    decodeURL(shortenedURL) {
        const shortCode = shortenedURL.slice(this.baseUrl.length); 
        if (this.urlMap.has(shortCode)) {
            const longURL = this.urlMap.get(shortCode);
            window.location.href = longURL; 
        } else {
            console.error("Shortened URL not found");
        }
    }
}