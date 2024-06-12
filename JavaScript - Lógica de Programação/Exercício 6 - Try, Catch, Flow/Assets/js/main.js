function sum(x,y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
        throw new Error('*** Both arguments must be numbers');
    }
    return x + y;
}

try {
    console.log(sum(1, 2));
    console.log(sum('1'), 2);
} catch(error) {
    // console.log(error);
    console.log('Friendly error message')
} finally {
    console.log('This will always run');
}