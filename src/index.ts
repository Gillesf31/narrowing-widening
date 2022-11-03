// Very wide type
const test: any = 'Hello';

// Less wide type, more narrowed
const test2: string = 'Hello';

// Narrowed
const test3: 'Hello' = 'Hello';

// Type inference narrows type with const
const test4 = 'Hello';

// Let keyword is doing type widening
let test5 = 'Hello';
test5 = 'Hello Toto';

// TODO: Change this to let and see what happens
const featureFlag = true;

const myNumber = 42;

enum State {
    OFFLINE,
    ONLINE
}

// TODO: Change this to let and see what happens
const state = State.ONLINE;

// Not a tuple
const array = [1, 2, 3];
array.push(4);

// Tuple
const tuple: [1, 2, 3] = [1, 2, 3];
tuple.push(4);

// array as const
const array2 = [1, 2, 3] as const;
array2.push(2);

// same as previous one
const array3: readonly [1, 2, 3] = [1, 2, 3];
array3.push(2);

// more wide type
const array4: readonly number[] = [1, 2, 3];
array4.push(2);

// Let's talk about as const
let tutu = 'tutu' as const;

// TODO: Add as const
const toto = {
    name: 'toto',
    age: 12
};

type User = {
    // Narrowed type
    kind: 'user'
    name: string
};
  
function userName(user: User) {
    return user.name;
}

// TODO : Use as const to disable type widening on kind property
const titi = {
    kind: 'user',
    name: 'titi',
};

userName(titi);

// Return type is not narrowed
function returnNumber() {
    return 42;
}

const myNumber2 = returnNumber();

// This if is useless, 43 is impossible
if (myNumber2 === 43) {
    console.log('Not gonna log');
}

function getStatus() {
    return 'online';
}

function showStatus(state: 'online' | 'offline') {
    if (state === 'offline') {
        console.log('offline');
    }
}

// Too wide to work with showStatus
showStatus(getStatus());

// 2 solutions : add a return type or type check 
const myStatus = getStatus();

if (myStatus === 'online') {
    // In this block myStatus is narrowed to 'online'
    showStatus(myStatus);
}

const online = 'online';
const offline = 'offline';

// Theses 2 consts are narrowed, so maybe statusArray is it to ?
const statusArray = [online, offline];
// Just lost your type :) 
const currentStatus = statusArray[0];