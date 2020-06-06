const siteUrl = 'http://sharkdev.eu/dimitar/facebook/public';
const pattern = /http[s]?:\/\/([a-z0-9а-я]+\.)+[a-zа-я]+/g; //match latin and cyrillic
const location = siteUrl.replace(pattern, '');
console.log(location);
export default {
    location: location
};
