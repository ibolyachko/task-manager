import { root, user } from './config';

export const api = Object.freeze({
    todo: {
        getAll: () => {
            return fetch(`${root}/todos`, {
                method: 'GET',
                headers: {
                    'x-user': user
                }
            })
        },
        create: ({ data }) => {
            return fetch(`${root}/todos`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'x-user': user
                },
                body: JSON.stringify(data)
            })
        },
        getByHash: ({ hash }) => {
            return fetch(`${root}/todos/${hash}`, {
                method: 'GET',
                headers: {
                    'x-user': user
                }
            })
        },
        updateByHash: ({ hash, data }) => {
            return fetch(`${root}/todos/${hash}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'x-user': user
                },
                body: JSON.stringify(data)
            })
        },
        deleteByHash: ({ hash }) => {
            return fetch(`${root}/todos/${hash}`, {
                method: 'DELETE',
                headers: {
                    'x-user': user
                },
            })
        },
    }
});
