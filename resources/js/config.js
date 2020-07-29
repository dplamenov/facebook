const siteUrl = 'http://sharkdev.eu/dimitar/facebook/public';
const pattern = /http[s]?:\/\/([a-z0-9а-я]+\.)+[a-zа-я]+/g;
const location = siteUrl.replace(pattern, '');

export default {
    location: location
};
