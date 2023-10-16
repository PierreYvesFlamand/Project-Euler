module.exports = (ms) => {
    const days = Math.floor(ms / (24 * 60 * 60 * 1000));
    ms %= (24 * 60 * 60 * 1000);

    const hours = Math.floor(ms / (60 * 60 * 1000));
    ms %= (60 * 60 * 1000);

    const minutes = Math.floor(ms / (60 * 1000));
    ms %= (60 * 1000);

    const seconds = Math.floor(ms / 1000);

    const milliseconds = ms % 1000;

    const values = [`${days}d`, `${hours}h`, `${minutes}m`, `${seconds}s`, `${milliseconds}ms`];
    while (values[0].substring(0, 1) === '0' && values.length > 1) {
        values.shift();
    }

    return values;
}