export const date = Object.freeze({
    toISODate: (date = new Date()) => {
        return new Date(date).toISOString();
    },
    toUTCDate: (date = new Date()) => {
        return new Date(date).toUTCString();
    },
    toEndDay: (date = new Date()) => {
        return new Date(date.setHours(23,59,59));
    },
    formatDate: (date = new Date(), locale = 'en-GB') => {
        const d = new Date(date);
        const month = d.toLocaleString(locale, {month: 'long'});
        const day = d.getDate();
        const year = d.getFullYear();

        return `${month} ${day}, ${year}`;
    },
});
