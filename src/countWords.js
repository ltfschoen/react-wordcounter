export default function countWords(text) {
    let matches;
    return text && (matches = text.match(/\w+/g)) ? matches.length : 0
}