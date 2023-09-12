const users = [];

const addUser = ({id, name, room}) => {
    name = name.trim().toLowerCase();
    room = room.trim().toLowerCase();

    // check if user already exists in that room
    const existingUser = users.find( user => user.room === room && user.name === name);

    if (existingUser){
        return {error: "Username is taken"};
    }

    // if user does not exist add the user
    const user = { id, name, room};
    users.push(user);
    return {user};
}

const removeUser = (id) => {
    // check if user exist
    const indexPosition = users.findIndex((user) => user.id === id);
    // if user exist remove that user
    if (indexPosition !== -1){
        return users.splice(indexPosition, 1)[0];
    }
}

const getUser = (id) => users.find((user) => user.id === id);

const getUsersInRoom = (room) => users.filter((user) => user.room === room);

module.exports = { addUser, removeUser, getUser, getUsersInRoom };